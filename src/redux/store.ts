import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "@/redux/cart-slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});