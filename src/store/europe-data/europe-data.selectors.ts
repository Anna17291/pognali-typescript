import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { EuropeType } from '../../types/europe-type';

export const getEurope = (state: State): EuropeType[] => state[NameSpace.Europe].europeans;
export const getEuropeLoadingStatus = (state: State): boolean => state[NameSpace.Europe].areEuropeLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Europe].hasError;
