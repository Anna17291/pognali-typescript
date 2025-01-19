import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchCountriesAction, fetchCountriesByLetterAction } from '../api-actions';
import { CountriesDataType } from '../../types/state';


const initialState: CountriesDataType = {
  contries: [],
  areCountriesLoading: false,
  hasError: false,
  countriesByLetter: [],
  areCountriesByLetterLoading: false,
  hasErrorByLetter: false,
};

export const countriesData = createSlice({
    name: NameSpace.Countries,
    initialState,
    reducers: {
    },
  
    extraReducers(builder) {
      builder
  
        .addCase(fetchCountriesAction.pending, (state) => {
          state.areCountriesLoading = true;
          state.hasError = false;
        })
        .addCase(fetchCountriesAction.fulfilled, (state, action) => {
          state.contries = action.payload;
          state.areCountriesLoading = false;
        })
        .addCase(fetchCountriesAction.rejected, (state) => {
          state.areCountriesLoading = false;
          state.hasError = true;
        })

        .addCase(fetchCountriesByLetterAction.pending, (state) => {
            state.areCountriesByLetterLoading = true;
            state.hasErrorByLetter = false;
          })
          .addCase(fetchCountriesByLetterAction.fulfilled, (state, action) => {
            state.countriesByLetter = action.payload;
            state.areCountriesByLetterLoading = false;
          })
          .addCase(fetchCountriesByLetterAction.rejected, (state) => {
            state.areCountriesByLetterLoading = false;
            state.hasErrorByLetter = true;
          })
    }
  });
