import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { CountryType } from '../../types/country';

export const getCountries = (state: State): CountryType[] => state[NameSpace.Countries].contries;
export const getCountriesLoadingStatus = (state: State): boolean => state[NameSpace.Countries].areCountriesLoading;
export const getCountriesErrorStatus = (state: State): boolean => state[NameSpace.Countries].hasError;

export const getCountriesByLetter = (state: State): CountryType[] => state[NameSpace.Countries].countriesByLetter;
export const getCountriesByLetterLoadingStatus = (state: State): boolean => state[NameSpace.Countries].areCountriesByLetterLoading;
export const getCountriesByLetterErrorStatus = (state: State): boolean => state[NameSpace.Countries].hasErrorByLetter;