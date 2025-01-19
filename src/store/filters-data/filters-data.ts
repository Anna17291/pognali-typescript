import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedPropertyType: null,
    priceRange: { min: null, max: null },
    areaRange: { min: null, max: null },
};

export const filtersData = createSlice({
    name: 'filterData',
    initialState,
    reducers: {
        setPropertyType(state, action) {
            state.selectedPropertyType = action.payload;
        },
        setPriceRangeMin(state, action) {
            state.priceRange.min = action.payload;
        },
        setPriceRangeMax(state, action) {
            state.priceRange.max = action.payload;
        },
        setAreaRangeMin(state, action) {
            state.areaRange.min = action.payload;
        },
        setAreaRangeMax(state, action) {
            state.areaRange.max = action.payload;
        },
    },
});

export const {
    setPropertyType,
    setPriceRangeMin,
    setPriceRangeMax,
    setAreaRangeMin,
    setAreaRangeMax
} = filtersData.actions;
