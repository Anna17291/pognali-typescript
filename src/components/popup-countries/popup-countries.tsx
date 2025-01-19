import React, { useEffect, MouseEvent, useCallback, useState } from 'react';
import styles from './popup-countries.module.scss';
import { fetchCountriesByLetterAction } from '../../store/api-actions';
import {
  getCountriesByLetter,
  getCountriesByLetterLoadingStatus,
  getCountriesByLetterErrorStatus,
} from '../../store/countries-data/countries-data.selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CountryType } from '../../types/country';
import { LETTERS } from '../../const';

type PopUpCountriesProps = {
  isShow: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onCountryNameSelect: (value: CountryType) => void;
  onPopupClose: () => void;
};

export default function PopUpCountries({
  isShow,
  onClose,
  onCountryNameSelect,
  onPopupClose,
  children,
}: PopUpCountriesProps) {
  const countriesByLetter = useAppSelector(getCountriesByLetter);
  const loadingStatus = useAppSelector(getCountriesByLetterLoadingStatus);
  const hasLoadingError = useAppSelector(getCountriesByLetterErrorStatus);
  const [countriesToShow, setCountriesToShow] = useState<CountryType[] | []>(
    []
  );

  const dispatch = useAppDispatch();

  const handlerEsc = useCallback(
    (evt: any) => {
      if (evt.key === 'Escape') {
        onClose && onClose();
        setCountriesToShow(() => []);
      }
    },
    [onClose]
  );

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      document.addEventListener('keydown', handlerEsc);
      return () => {
        document.removeEventListener('keydown', handlerEsc);
      };
    }
    return () => {
      isMounted = false;
    };
  }, [handlerEsc]);

  const handleLetterClick = (evt: MouseEvent) => {
    if (
      !(evt.target instanceof HTMLButtonElement) ||
      !evt.target.dataset.letter
    ) {
      return;
    }
    dispatch(fetchCountriesByLetterAction(evt.target.dataset.letter));
  };

  useEffect(() => {
    setCountriesToShow(() => [...countriesByLetter]);
  }, [countriesByLetter]);

  useEffect(() => {
    setCountriesToShow(() => []);
  }, [onClose]);

  const onCountryClick = (evt: React.MouseEvent<HTMLLIElement>) => {
    if (!(evt.target instanceof HTMLLIElement) || !evt.target.dataset) {
      return;
    }

    if (
      evt.target.dataset.country &&
      evt.target.dataset.flag &&
      evt.target.dataset.region
    ) {
      onCountryNameSelect({
        name: evt.target.dataset.country,
        flag: evt.target.dataset.flag,
        region: evt.target.dataset.region,
      });
      onPopupClose();
    }
  };

  return isShow ? (
    <div className={styles.popup}>
      <div className={styles.close} onClick={onClose}>
        Выберите страну
        <button type='button' className={styles.closebutton}></button>
      </div>
      <div className={styles.content}>
        <div className={styles.select}>
          <div onClick={handleLetterClick} className={styles.letters}>
            {LETTERS.map((letter) => (
              <button
                type='button'
                className={styles.letter}
                data-letter={letter}
                key={letter}
              >
                {letter.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={styles.countries}>
            {loadingStatus ? (
              <p>Загружаем страны...</p>
            ) : hasLoadingError ? (
              <>
                <p>Ошибка при поиске стран...</p>
                <p>Попробуйте еще раз</p>
              </>
            ) : (
              <ul className={styles.countrielist}>
                {!loadingStatus && countriesToShow.length
                  ? countriesToShow.map((country) => (
                      <li
                        className={styles.countrieitem}
                        key={country.name}
                        data-country={country.name}
                        data-flag={country.flag}
                        data-region={country.region}
                        onClick={onCountryClick}
                      >
                        {country.name}
                      </li>
                    ))
                  : ''}
              </ul>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  ) : null;
}
