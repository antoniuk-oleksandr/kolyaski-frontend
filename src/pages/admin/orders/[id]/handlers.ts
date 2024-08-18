import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {ProductData} from "@/types/ProductData";
import {addCartProduct} from "@/redux/cart-slice";
import {orderModalSignal} from "@/pages/admin/signals/order-modal-signal";

export const handleAddOrderProductItemClick = (
    product: ProductData,
    dispatch: Dispatch<UnknownAction>
) => {
    dispatch(addCartProduct({
        quantity: 1,
        product: {
            id: product.id,
            images: product.images,
            name: product.name,
            price: product.price,
        },
    }));

    orderModalSignal.value = {
        ...orderModalSignal.value,
        close: ++orderModalSignal.value.close,
    };
}

export const handleOrderModalOpen = () => {
    orderModalSignal.value = {
        ...orderModalSignal.value,
        open: ++orderModalSignal.value.open,
    }
}