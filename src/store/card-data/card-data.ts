import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchCardListAction } from '../api-actions';
import { CardListDataType } from '../../types/state';
import { postTravelPlanAction } from '../api-actions';
import { Status } from '../../const';


const initialState: CardListDataType = {
  cardList: null,
  isCardListDataLoading: false,
  hasError: false,
  setTravelPlanPostingStatus: Status.Unsent,
};

export const cardListData = createSlice({
    name: NameSpace.Travels,
    initialState,
    reducers: {
      resetTravelPlanPostingStatus: (state) => {
        state.setTravelPlanPostingStatus = Status.Unsent;
      },
    },
  
    extraReducers(builder) {
      builder
  
        .addCase(fetchCardListAction.pending, (state) => {
          state.isCardListDataLoading = true;
          state.hasError = false;
        })
        .addCase(fetchCardListAction.fulfilled, (state, action) => {
          state.cardList = action.payload;
          state.isCardListDataLoading = false;
        })
        .addCase(fetchCardListAction.rejected, (state) => {
          state.isCardListDataLoading = false;
          state.hasError = true;
        })

        .addCase(postTravelPlanAction.pending, (state) => {
          state.setTravelPlanPostingStatus = Status.Pending;
        })
        .addCase(postTravelPlanAction.fulfilled, (state, action) => {
          state.cardList?.data.push(action.payload);
          state.setTravelPlanPostingStatus = Status.Success;
        })
        .addCase(postTravelPlanAction.rejected, (state) => {
          state.setTravelPlanPostingStatus = Status.Error;
          //toast.warn('Не удалось отправить план');
          console.log('Не удалось отправить план');
        });
    }
  });

  export const { resetTravelPlanPostingStatus } = cardListData.actions; 
