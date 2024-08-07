import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "@/redux/cart-slice";
import tokenSlice from "@/redux/token-slice";
import commentsSlice from "@/redux/comments-slice";
import ordersSlice from "@/redux/orders-slice";
import adminProductsSlice from "@/redux/admin-products-slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        token: tokenSlice,
        comments: commentsSlice,
        ordersState: ordersSlice,
        adminProductsState: adminProductsSlice,
    }
});