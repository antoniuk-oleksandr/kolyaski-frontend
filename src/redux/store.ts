import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "@/redux/cart-slice";
import tokenSlice from "@/redux/token-slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        token: tokenSlice,
    }
});