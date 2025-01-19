import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../../components/Layout/Layout';
import CardsList from '../../components/CardsList/CardsList';
import FilterForm from '../../components/FilterForm/FilterForm';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import AddCards from '../../components/AddCards/AddCards';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCardListAction } from '../../store/api-actions';
import {
  getCardList,
  getCardListLoadingStatus,
  getCardListErrorStatus,
} from '../../store/card-data/card-data.selectors';

import styles from './Catalog.module.scss';
import CountriesFilter from '../../components/countries-filter/countries-filter';
import { CardListRequestType } from '../../types/card-list-type';
import TitlePrimary from '../../ui/TitlePrimary/TitlePrimary';

function Catalog() {
  const cardList = useAppSelector(getCardList);
  const status = useAppSelector(getCardListLoadingStatus);
  const errosStatus = useAppSelector(getCardListErrorStatus);
  const dispatch = useAppDispatch();

  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowButton, setIsShowButton] = useState(true);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const openPopup = () => {
    setIsShowPopup(true);
    setIsShowButton(false);
    setCurrentPage(1);
    setFilter((prev) => ({ ...prev, page: 1 }));
  };

  const closePopup = () => {
    setIsShowPopup(false);
    setIsShowButton(true);
  };

  const [filter, setFilter] = useState<CardListRequestType>({
    country: '',
    region: '',
    page: 1,
    limit: 4,
  });

  useEffect(() => {
    dispatch(fetchCardListAction(filter));
  }, [dispatch, filter]);

  const handleCountrySelect = (countryName: string) => {
    setFilter((prev) => ({ ...prev, country: countryName, page: 1 }));
    setCurrentPage(1);
    closePopup();
  };

  const handleRegionSelect = (region: string) => {
    setFilter((prev) => ({ ...prev, country: '', region, page: 1 }));
    setCurrentPage(1);
    closePopup();
  };

  const handlePageClick = (pageNumber: number) => {
    setFilter((prev) => ({ ...prev, page: pageNumber }));
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (cardList && currentPage < cardList.totalPages) {
      setCurrentPage(currentPage + 1);
      handlePageClick(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      handlePageClick(currentPage - 1);
    }
  };

  const handleMoreClick = () => {
    handleNext();
  };

  return (
    <>
      <Helmet>
        <title>ПОГНАЛИ! Каталог</title>
      </Helmet>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.catalog__destination}>
            <TitlePrimary
              text='ПОПУТЧИКИ'
              level={1}
              className='catalog__heading'
            />
          </div>
          <h1 className='visually-hidden'>Каталог</h1>
          {/* <div className={styles.catalog__head}>
            <TitlePrimary
              text='ПОПУТЧИКИ'
              level={1}
              className={styles.catalog__heading}
            />
          </div> */}
          <CountriesFilter
            onOpenClick={openPopup}
            onCloseClick={closePopup}
            onCountrySelect={handleCountrySelect}
            onRegionSelect={handleRegionSelect}
            isShowButton={isShowButton}
            isShowPopup={isShowPopup}
          />
          <div className={styles.flexContainer}>
            {status ? (
              <p className={styles.message}>Ищем попутчиков</p>
            ) : errosStatus ? (
              <p className={styles.message}>
                Не удалось загрузить данные. Попробуйте обновить страницу
              </p>
            ) : cardList?.data.length ? (
              <CardsList cards={cardList.data} />
            ) : (
              <p className={styles.message}>Нет подходящих попутчиков</p>
            )}
            <FilterForm />
            {cardList?.totalPages &&
            cardList.totalPages > 1 &&
            currentPage < cardList?.totalPages ? (
              <AddCards onMoreButtonClick={handleMoreClick} />
            ) : (
              ''
            )}

            {cardList?.totalPages && cardList.totalPages > 1 ? (
              <CustomPagination
                onNextClick={handleNext}
                onPrevClick={handlePrev}
                onPageClick={handlePageClick}
                totalPages={cardList.totalPages}
                currentPage={currentPage}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Catalog;
