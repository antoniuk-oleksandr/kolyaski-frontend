import { createSlice } from "@reduxjs/toolkit";
import {CatalogSlice} from "@/types/CatalogSlice";

const initialState: CatalogSlice =  {
    products: null,
    page: null,
    priceFrom: null,
    priceTo: null,
    sortType: null,
    type: null,
    subType: null,
    value: null,
    pagesCount: null,
    totalCount: null,
}

const catalogSlice = createSlice({
    name: "catalogSlice",
    initialState,
    reducers: {
        setCatalogData(state, action) {
            const data = action.payload;
            Object.keys(state).forEach((key) => {
                if(Object.keys(data).includes(key)) return;
                (state as any)[key] = null;
            })

            Object.entries(data).forEach(([key, value]) => {
                (state as any)[key] = value;
            });
        },
    }
});

export const { setCatalogData } = catalogSlice.actions;
export default catalogSlice.reducer;