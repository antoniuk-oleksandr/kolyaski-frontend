import {createSlice} from "@reduxjs/toolkit";
import {CartState} from "@/types/CartState";
import {CartItem} from "@/types/CartItem";


const initialState: CartState = {
    products: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartProduct: (state, action) => {
            const {product} = action.payload;
            const productArr = JSON.parse(JSON.stringify(state.products)) as CartItem[];
            const contain = productArr.some((item) => item.product.id === product.id);

            if (contain) {
                state.products = productArr.map((item) => {
                    if (item.product.id === product.id)
                        return {...item, quantity: item.quantity + 1};
                    return item;
                });
            } else state.products.push(action.payload);
        },

        setCartProducts: (state, action) => {
            state.products = action.payload;
        },
        removeCartProduct: (state, action) => {
            state.products = state.products.filter(item => item.product.id !== action.payload);
        },
        setCartProductQuantity: (state, action) => {
            const {id, newQuantity} = action.payload;
            state.products = state.products.map((product) => {
                if (product.product.id === id) {
                    return {...product, quantity: newQuantity};
                }
                return product;
            });
        },
        removeAllCartProducts: (state) => {
            state.products = [];
        }
    }
});

export const {
    addCartProduct,
    removeCartProduct,
    setCartProducts,
    setCartProductQuantity,
    removeAllCartProducts
} = cartSlice.actions;

export default cartSlice.reducer;