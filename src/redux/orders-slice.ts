import {createSlice} from "@reduxjs/toolkit";
import {OrdersState} from "@/types/OrdersState";
import {OrderType} from "@/types/OrderType";

const initialState: OrdersState = {
    orders: null,
    value: null,
    page: null,
    totalCount: null,
    onPageCount: null,
    sortBy: null,
    sortOrder: null,
    orderById: undefined,
}

export const ordersSlice = createSlice({
    name: "orders",
    initialState: initialState,
    reducers: {
        setOrdersData: (state, action) => {
            const data = action.payload;
            Object.entries(data).forEach(([key, value]) => {
                if (key === "id") return;
                (state as any)[key] = value;
            });
        },
        setOrderByIdParam: (state, action) => {
            const {key, value} = action.payload;
            if(!state.orderById) return;
            (state.orderById as any)[key] = value;
        },
        setOrdersSearchValue: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const {
    setOrderByIdParam,
    setOrdersSearchValue,
    setOrdersData
} = ordersSlice.actions;

export default ordersSlice.reducer;