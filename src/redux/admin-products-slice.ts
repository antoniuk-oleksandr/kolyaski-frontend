import {createSlice} from "@reduxjs/toolkit";
import {AdminProductsState} from "@/types/AdminProductsState";

const initialState: AdminProductsState = {
    productById: null,
    products: null,
    page: null,
    value: null,
    onPageCount: null,
    totalCount: null,
    sortType: null,
    type: null,
    id: null,
}

const adminProductsSlice = createSlice({
    name: "adminProductsState",
    initialState,
    reducers: {
        setAdminProductsData: (state, action) => {
            Object.entries(action.payload).forEach(([key, value]) => {
                (state as any)[key] = value;
            });
        }
    }
});

export const {setAdminProductsData} = adminProductsSlice.actions;

export default adminProductsSlice.reducer;