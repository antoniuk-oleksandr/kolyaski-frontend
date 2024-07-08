import {createSlice} from "@reduxjs/toolkit";
import {CartState} from "@/types/CartState";


const initialState: CartState = {
    products: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartProduct: (state, action) => {
            state.products.push(action.payload);
        },
        setCartProducts: (state, action) => {
            state.products = action.payload;
        },
        removeCartProduct: (state, action) => {
            state.products = state.products.filter(item => item.product.id !== action.payload);
        },
        setCartProductQuantity: (state, action) => {
            const {id, newQuantity} = action.payload;
            state.products.forEach((product) => {
                if (product.product.id === id) {
                    product.quantity = newQuantity;
                }
            });
        }
    }
});

export const {addCartProduct, removeCartProduct, setCartProducts, setCartProductQuantity} = cartSlice.actions;

export default cartSlice.reducer;