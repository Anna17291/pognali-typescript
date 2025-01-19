import { CountryType } from './country';

export type TravelDataType = {
  token: string;
  name: string;
  transport: string[];
  tags: string[];
  countries: CountryType[];
};
