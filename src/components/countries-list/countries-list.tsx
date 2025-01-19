import styles from './countries-list.module.scss';
import { CountryType } from '../../types/country';

type CountriesListProps = {
  letter: string;
  allCountries: CountryType[];
  onCountrySelect: (value: string) => void;
};

export function CountriesList({
  letter,
  allCountries,
  onCountrySelect,
}: CountriesListProps) {
  const onCountryClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (
      !(evt.target instanceof HTMLDivElement) ||
      !evt.target.dataset.country
    ) {
      return;
    }
    onCountrySelect(evt.target.dataset.country);
  };

  return (
    <div className={styles.block}>
      {allCountries.map((country) =>
        country.name.toLocaleLowerCase().startsWith(`${letter}`) ? (
          <div onClick={onCountryClick} data-country={country.name}>
            {country.name}
          </div>
        ) : null
      )}
    </div>
  );
}

export default CountriesList;
