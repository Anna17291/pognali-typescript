import { State } from '../../types/state';

export const getSelectedPropertyType = (state: State) => state.FILTERS.selectedPropertyType;
export const getPriceRange = (state: State) => state.FILTERS.priceRange;
export const getAreaRange = (state: State) => state.FILTERS.areaRange;