import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchEuropeAction } from '../api-actions';
import { EuropeDataType } from '../../types/state';

const initialState: EuropeDataType = {
  europeans: [],
  areEuropeLoading: false,
  hasError: false,
};

export const europeData = createSlice({
  name: NameSpace.Europe,
  initialState,
  reducers: {
  },

  extraReducers(builder) {
    builder

      .addCase(fetchEuropeAction.pending, (state) => {
        state.areEuropeLoading = true;
        state.hasError = false;
      })
      .addCase(fetchEuropeAction.fulfilled, (state, action) => {
        state.europeans = action.payload;
        state.areEuropeLoading = false;
      })
      .addCase(fetchEuropeAction.rejected, (state) => {
        state.areEuropeLoading = false;
        state.hasError = true;
      })
  }
});
