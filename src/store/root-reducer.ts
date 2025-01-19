import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { europeData } from './europe-data/europe-data';
import { asiaData } from './asia-data/asia-data';
import { countriesData } from './countries-data/countries-data';
import { cardListData } from './card-data/card-data';
import {filtersData} from "./filters-data/filters-data";

export const rootReducer = combineReducers({
  [NameSpace.Countries]: countriesData.reducer,
  [NameSpace.Travels]: cardListData.reducer,
  [NameSpace.Europe]: europeData.reducer,
  [NameSpace.Asia]: asiaData.reducer,
  [NameSpace.Filters]: filtersData.reducer,
});
