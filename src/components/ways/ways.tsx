import styles from './ways.module.scss';
import SelectCountryField from '../select-country-field/select-country-field';
import { CountryType } from '../../types/country';

type WaysProps = {
  onCountrySelect: (value: CountryType) => void;
  selectedCountries: CountryType[] | [];
  onCountryRemove: (value: string) => void;
  //паддинги для шага2
  setListOpen: (value: boolean) => void;
  //
};

function Ways({
  onCountrySelect,
  selectedCountries,
  onCountryRemove,
  //паддинги для шага2
  setListOpen
  //
}: WaysProps) {

  return (
    <div>
      <div className={styles.selects}>
        <div className={styles.fields}>
          {[...Array(4)].map((_, index) => (
            <div className={styles.field}>
              <SelectCountryField
                onCountrySelect={onCountrySelect}
                onCountryRemove={onCountryRemove}
                selectedCountries={selectedCountries}
                countryIndex={index}
                //паддинги для шага2
                setListOpen={setListOpen}
              //
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ways;
