import { useState } from 'react';
import CountriesList from '../countries-list/countries-list';
import styles from './all-countries.module.scss';
import React, { useEffect } from 'react';
import ContinentsList from '../continents-list/continents-list';
import {
  getCountries,
  getCountriesByLetter,
  getCountriesByLetterErrorStatus,
  getCountriesByLetterLoadingStatus,
  getCountriesLoadingStatus,
  getCountriesErrorStatus,
} from '../../store/countries-data/countries-data.selectors';
import { fetchCountriesByLetterAction } from '../../store/api-actions';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { LETTERS } from '../../const';
import { CountryType } from '../../types/country';

type AllCountriesProps = {
  isShow?: boolean;
  onClose: () => void;
  onCountrySelect: (value: string) => void;
  onRegionSelect: (value: string) => void;
};

export default function AllCountries({
  isShow,
  onClose,
  onCountrySelect,
  onRegionSelect,
}: AllCountriesProps) {
  const allCountries = useAppSelector(getCountries);
  const areCountriesLoading = useAppSelector(getCountriesLoadingStatus);
  const hasError = useAppSelector(getCountriesErrorStatus);
  const [countriesByLetterToShow, setCountriesByLetterToShow] = useState<
    CountryType[] | []
  >([]);

  const countriesByLetter = useAppSelector(getCountriesByLetter);
  const areCountriesByLetterLoading = useAppSelector(
    getCountriesByLetterLoadingStatus
  );
  const hasErrorByLetter = useAppSelector(getCountriesByLetterErrorStatus);
  const dispatch = useAppDispatch();
  const handlerEsc = (evt: KeyboardEvent) => {
    if (evt.keyCode === 27) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handlerEsc);

    return () => {
      document.removeEventListener('keydown', handlerEsc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLetterClick = (
    evt: React.MouseEvent<HTMLDivElement | HTMLHeadingElement>
  ) => {
    if (
      !(evt.target instanceof HTMLElement) ||
      !evt.target ||
      !evt.target.dataset.letter
    ) {
      return;
    }

    dispatch(fetchCountriesByLetterAction(evt.target.dataset.letter));
  };

  useEffect(() => {
    setCountriesByLetterToShow(countriesByLetter);
  }, [countriesByLetter]);

  const handleCountryClick = (evt: React.MouseEvent<HTMLElement>) => {
    if (
      !(evt.target instanceof HTMLElement) ||
      !evt.target ||
      !evt.target.dataset.name
    ) {
      return;
    }
    onCountrySelect(evt.target.dataset.name);
    setCountriesByLetterToShow([]);
  };

  return isShow ? (
    <>
      <div className={styles.popup}>
        <div className={styles.popup__header}>
          <button className={styles.button__headerclose} onClick={onClose}>
            Фильтрация по странам:
          </button>
          <ContinentsList onRegionSelect={onRegionSelect} />
        </div>
        <div className={styles.selectcountries}>
          {areCountriesLoading && (
            <p className={styles.loading_message}>Загрузка...</p>
          )}
          {hasError ? (
            <>
              <p className={styles.error_message}>Что-то пошло не так...</p>
              <p className={styles.error_message}>
                Попробуйте обновить страницу
              </p>
            </>
          ) : (
            <>
              <div className={styles.blocks}>
                {LETTERS.map((letter) => (
                  <div className={styles.block} key={letter}>
                    <h2 className={styles.letter}>{letter}</h2>
                    <CountriesList
                      letter={letter}
                      allCountries={allCountries}
                      onCountrySelect={onCountrySelect}
                    />
                  </div>
                ))}
              </div>
              <div className={styles['blocks--mobile']}>
                {LETTERS.map((letter) => (
                  <div
                    onClick={handleLetterClick}
                    className={styles.block}
                    key={letter}
                    data-letter={letter}
                  >
                    <h2 className={styles.letter} data-letter={letter}>
                      {letter}
                    </h2>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className={styles.selected}>
            {areCountriesByLetterLoading && (
              <p className={styles['loading_message--mobile']}>Загрузка...</p>
            )}
            {hasErrorByLetter && (
              <>
                <p className={styles['error_message--mobile']}>
                  Что-то пошло не так...
                </p>
                <p className={styles['error_message--mobile']}>
                  Попробуйте еще раз
                </p>
              </>
            )}
            {countriesByLetterToShow.length
              ? countriesByLetterToShow.map((country) => (
                <p onClick={handleCountryClick} data-name={country.name}>
                  {country.name}
                </p>
              ))
              : null}
          </div>
        </div>
        <button onClick={onClose} className={styles.closebutton}>
          Свернуть
        </button>
      </div>
    </>
  ) : (
    <div className={styles.popup__menu}>
      <ContinentsList onRegionSelect={onRegionSelect} />
    </div>
  );
}
