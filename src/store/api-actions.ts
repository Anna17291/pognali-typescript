import {AxiosInstance} from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { EuropeType } from '../types/europe-type';
import { AsiaType } from '../types/asia-type';
import { CountryType } from '../types/country';
import { ErrorType } from '../types/error-type';
import { TravelPlanType } from '../types/travel-plan-type';
import { TravelDataType } from '../types/travel-data-type';
import { CardListType } from '../types/card-list-type';
import { CardListRequestType } from '../types/card-list-type';
import { APIRoute, NameSpace } from '../const';


export const fetchCountriesAction = createAsyncThunk<CountryType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Countries}/fetchCountries`,
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<CountryType[]>(APIRoute.Countries);
      return data;
    } catch {
      throw new Error();
    }
  },
);

export const fetchCountriesByLetterAction = createAsyncThunk<CountryType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Countries}/fetchCountriesByLetter`,
  async (letter, {extra: api}) => {
    try {
      const {data} = await api.get<CountryType[]>(`${APIRoute.Countries}?letter=${letter}`);
      return data;
    } catch {
      throw new Error();
    }
  },
);

export const fetchCardListAction = createAsyncThunk<CardListType, CardListRequestType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Travels}/fetchCardList`,
  async ({country, region, page, limit}, {extra: api}) => {
    //const params = new URLSearchParams();
    //const searchParams = Object.entries({country, region, page: page.toString(), limit: limit.toString()});
    //searchParams.forEach((searchParam) => params.append(searchParam[0], searchParam[1]));
    
    try {
      //const {data} = await api.get<CardListType>(APIRoute.Travels, {params});
 
      const {data} = await api.get<CardListType>(`${APIRoute.Travels}?region=${region}&country=${country}&page=${page}&limit=${limit}`);
      return data;
    } catch {
      throw new Error();
    }
  },
);

export const postTravelPlanAction = createAsyncThunk<TravelDataType, TravelPlanType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Travels}/postTravelPlan`,
  async (travelPan, {extra: api}) => {
    try {
      const {data} = await api.post<TravelDataType>(APIRoute.Travels, travelPan);
      return data;
    } catch (error) {
     const {response} = error as ErrorType;
      console.log(response.data.message);
      response.data.message.forEach((errorMessage) => console.log(errorMessage)); // заменить на toastify
      throw new Error();
    }
  } 
);

export const fetchEuropeAction = createAsyncThunk<EuropeType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Europe}/fetchEurope`,
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<EuropeType[]>(APIRoute.Europe);
      return data;
    } catch {
      throw new Error();
    }
  },
);

export const fetchAsiaAction = createAsyncThunk<AsiaType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Asia}/fetchAsia`,

  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<AsiaType[]>(APIRoute.Asia);
      return data;
    } catch {
      throw new Error();
    }
  },
);
