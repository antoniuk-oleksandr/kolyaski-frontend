import {createSlice} from "@reduxjs/toolkit";
import {CartItem} from "@/types/CartItem";

type CartState = {
    items: CartItem[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.items.splice(state.items.indexOf(action.payload), 1);
        },
        setQuantity: (state, action) => {
            const {id, newQuantity} = action.payload;
            state.items.forEach((item) => {
                if (item.product.id === id) {
                    item.quantity = newQuantity;
                }
            });
        }
    }
});

export const {addProduct, removeProduct, setQuantity} = cartSlice.actions;

export default cartSlice.reducer;