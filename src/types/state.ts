import { store } from '../store';
import { CountryType } from './country';
import { CardListType } from './card-list-type';
import { EuropeType } from './europe-type';
import { AsiaType } from './asia-type';
import { Status } from '../const';

export type CountriesDataType = {
  contries: CountryType[];
  areCountriesLoading: boolean;
  hasError: boolean;
  countriesByLetter: CountryType[],
  areCountriesByLetterLoading: boolean,
  hasErrorByLetter: boolean,
}

export type CardListDataType = {
  cardList: CardListType | null;
  isCardListDataLoading: boolean;
  hasError: boolean;
  setTravelPlanPostingStatus: Status;
}

export type EuropeDataType = {
    europeans: EuropeType[];
    areEuropeLoading: boolean;
    hasError: boolean;
  }

export type AsiaDataType = {
    asians: AsiaType[];
    areAsiaLoading: boolean;
    hasError: boolean;
  }

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
