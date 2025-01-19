import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { CardListType } from '../../types/card-list-type';
import { Status } from '../../const';

export const getCardList = (state: State): CardListType | null => state[NameSpace.Travels].cardList;
export const getCardListLoadingStatus = (state: State): boolean => state[NameSpace.Travels].isCardListDataLoading;
export const getCardListErrorStatus = (state: State): boolean => state[NameSpace.Travels].hasError;

export const getTravelPlanPostingStatus = (state: State): Status => state[NameSpace.Travels].setTravelPlanPostingStatus;