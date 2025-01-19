import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { AsiaType } from '../../types/asia-type';

export const getAsia = (state: State): AsiaType[] => state[NameSpace.Asia].asians;
export const getAsiaLoadingStatus = (state: State): boolean => state[NameSpace.Asia].areAsiaLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Asia].hasError;
