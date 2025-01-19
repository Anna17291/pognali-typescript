import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchAsiaAction } from '../api-actions';
import { AsiaDataType } from '../../types/state';


const initialState: AsiaDataType = {
  asians: [],
  areAsiaLoading: false,
  hasError: false,
};

export const asiaData = createSlice({
  name: NameSpace.Asia,
  initialState,
  reducers: {
  },

  extraReducers(builder) {
    builder

      .addCase(fetchAsiaAction.pending, (state) => {
        state.areAsiaLoading = true;
        state.hasError = false;
      })
      .addCase(fetchAsiaAction.fulfilled, (state, action) => {
        state.asians = action.payload;
        state.areAsiaLoading = false;
      })
      .addCase(fetchAsiaAction.rejected, (state) => {
        state.areAsiaLoading = false;
        state.hasError = true;
      })
  }
});