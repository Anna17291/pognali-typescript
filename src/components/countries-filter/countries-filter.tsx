import AllCountries from '../all-countries/all-countries';
import styles from './countries-filter.module.scss';
import ButtonCountries from '../button-countries/button-countries';
import ButtonCountriesClose from '../button-countries-close/button-countries-close';

type CountriesFilterProps = {
  onCountrySelect: (value: string) => void;
  onRegionSelect: (value: string) => void;
  onOpenClick: () => void;
  onCloseClick: () => void;
  isShowPopup: boolean;
  isShowButton: boolean;
};

function CountriesFilter({
  onCountrySelect,
  onRegionSelect,
  onOpenClick,
  onCloseClick,
  isShowPopup,
  isShowButton,
}: CountriesFilterProps) {
  return (
    <section className={styles.countries}>
      <div className={styles.header}>
        <div className={styles.openclose} onClick={onOpenClick}>
          <ButtonCountries isShow={isShowButton}></ButtonCountries>
        </div>

        <div onClick={onCloseClick}>
          <ButtonCountriesClose isShow={isShowButton}></ButtonCountriesClose>
        </div>

        <AllCountries
          isShow={isShowPopup}
          onClose={onCloseClick}
          onCountrySelect={onCountrySelect}
          onRegionSelect={onRegionSelect}
        />
      </div>
    </section>
  );
}

export default CountriesFilter;
