import PopUpCountries from '../popup-countries/popup-countries';
import styles from './select-country-field.module.scss';
import React, { useState } from 'react';
import { CountryType } from '../../types/country';
import ButtonDelete from '../../ui/button-delete/button-delete';

type SelectCountryFieldProps = {
  onCountrySelect: (value: CountryType) => void;
  onCountryRemove: (value: string) => void;
  selectedCountries: CountryType[];
  countryIndex: number;
  //паддинги для шага2
  setListOpen: (value: boolean) => void;
  //
};

function SelectCountryField({
  onCountrySelect,
  onCountryRemove,
  selectedCountries,
  countryIndex,
  //паддинги для шага2
  setListOpen
  //
}: SelectCountryFieldProps) {
  const [isShowPopup, setIsShowPopup] = useState(false);

  const [country, setCountry] = useState<string>(selectedCountries.length && selectedCountries[countryIndex] ? selectedCountries[countryIndex].name : 'Выберите страну');
  const [prevCountry, setPrevCountry] = useState<string>(selectedCountries.length && selectedCountries[countryIndex] ? selectedCountries[countryIndex].name : '');
  const [flagUrl, setFlagUrl] = useState<string>(selectedCountries.length && selectedCountries[countryIndex] ? selectedCountries[countryIndex].flag : '');

  const handleCountryNameSelect = (value: CountryType) => {
    if (
      selectedCountries.some(
        (selectedCountry) => value.name === selectedCountry.name
      )
    ) {
      return;
    }

    setCountry(value.name);
    setFlagUrl(value.flag);

    onCountrySelect({
      name: value.name,
      flag: value.flag,
      region: value.region,
    });

    if (value.name !== prevCountry) {
      onCountryRemove(prevCountry);
    }
  };

  const handleSelectClick = () => {
    if (country !== 'Выберите страну') {
      setPrevCountry(country);
    }
    setIsShowPopup(true);
    //паддинги для шага2
    setListOpen(true);
    //
  };

  const handleClose = () => {
    setIsShowPopup(false);
    //паддинги для шага2
    setListOpen(false);
    //
  };

  const handleDeleteButtonClick = () => {
    onCountryRemove(country);
    setCountry('Выберите страну');
    setFlagUrl('');
    setPrevCountry('');
  };

  const [newButton, setnewButton] = useState<string>(selectedCountries.length && selectedCountries[countryIndex] ? '' : 'Добавить страну');
  const [widthEl, setwidthEl] = useState<number>();
  const [paddingEl, setpaddingEl] = useState<number>();
  const [displayEl, setdisplayEl] = useState<string>(selectedCountries.length && selectedCountries[countryIndex] ? 'none' : 'flex');

  const change = () => {
    setnewButton('');
    setwidthEl(0);
    setpaddingEl(0)
    setdisplayEl('none')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonadd} onClick={change} style={{ width: widthEl, padding: paddingEl, display: displayEl }}>{newButton}</div>
      {newButton === '' ?
        <div className={styles.open}>
          <div className={styles.but} onClick={handleSelectClick}>
            <div className={styles.country}>{country}</div>
            <button type='button' className={styles.openbutton}></button>
          </div>
          <PopUpCountries
            isShow={isShowPopup}
            onClose={handleClose}
            onCountryNameSelect={handleCountryNameSelect}
            //паддинги для шага2
            onPopupClose={() => { setIsShowPopup(false); setListOpen(false); }}
          //
          >
            <div />
          </PopUpCountries>
        </div>
        : ''}
      {flagUrl ? (
        <div className={styles.flagfield}>
          <span className={styles.marker} />
          <img src={flagUrl} alt={flagUrl || ''} width={70} height={47} />
          <ButtonDelete onDeleteButtonClick={handleDeleteButtonClick} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default SelectCountryField;