import {createSlice} from "@reduxjs/toolkit";
import {AdminProductsState} from "@/types/AdminProductsState";

const initialState: AdminProductsState = {
    products: null,
    page: null,
    value: null,
}

const adminProductsSlice = createSlice({
    name: "adminProductsState",
    initialState,
    reducers: {
        setAdminProductsData: (state, action) => {
            Object.entries(action.payload).forEach(([key, value]) => {
                (state as any)[key] = value;
            });
        },
        setAdminProducts: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const {setAdminProducts, setAdminProductsData} = adminProductsSlice.actions;

export default adminProductsSlice.reducer;