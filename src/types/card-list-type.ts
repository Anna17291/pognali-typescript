import { CountryType } from './country';

export type CardListRequestType = {
  country: string;
  region: string;
  page: number;
  limit: number;
};

export type DataType = {
  token: string;
  name: string;
  transport: string[];
  tags: string[];
  countries: CountryType[];
};

export type CardListType = {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  data: DataType[];
};
