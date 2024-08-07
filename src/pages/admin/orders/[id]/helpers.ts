import {OrderType} from "@/types/OrderType";
import {MutableRefObject} from "react";
import {CartItem} from "@/types/CartItem";

export const compareOrderDataPieces = (
    initialDataRef: MutableRefObject<OrderType | null>,
    editedData: OrderType | null
): OrderType | null => {
    let differentData = {} as OrderType;
    const initialData = initialDataRef.current;
    if (!initialData || !editedData) return null;

    Object.entries(initialData).forEach(([key, value]) => {
        if (key === "delivery" || key === "products") return;

        if ((editedData as any)[key] !== value) {
            if (key === "") return;
            (differentData as any)[key] = value;
        }
    });
    checkOrderDeliveryData(initialData, editedData, differentData);
    checkOrderProductsData(initialData, editedData, differentData);

    return differentData;
}

export const checkOrderDeliveryData = (
    initialData: OrderType,
    editedData: OrderType,
    differentData: OrderType,
) => {
    if (initialData.delivery.city.ref !== editedData.delivery.city.ref) {
        differentData.delivery = {
            ...((differentData as any).delivery),
            city: editedData.delivery.city,
        }
    }
    if (initialData.delivery.warehouse.warehouse !== editedData.delivery.warehouse.warehouse) {
        (differentData as any).delivery = {
            ...(differentData as any).delivery,
            warehouse: editedData.delivery.warehouse,
        }
    }
}

export const checkOrderProductsData = (
    initialData: OrderType,
    editedData: OrderType,
    differentData: OrderType,
) => {
    if (initialData.products.length !== editedData.products.length) {
        (differentData as any) = formatProducts(editedData.products);
        return;
    }
    initialData.products.forEach((value: CartItem, index) => {
        if (value.quantity !== editedData.products[index].quantity) {
            (differentData as any).products = formatProducts(editedData.products);
            return;
        }
        if (value.product.id !== editedData.products[index].product.id) {
            (differentData as any).products = formatProducts(editedData.products);
            return;
        }
    });
}

export const checkIfOrders = (
    initialDataRef: MutableRefObject<OrderType | null>,
    editedData: OrderType,
) => {
    const initialData = initialDataRef.current;
    if (!initialData) return;

    const differentData = compareOrderDataPieces(initialDataRef, editedData);

    if (!differentData) return true;
    return Object.keys(differentData).length === 0;
}

export const formatProducts = (products: CartItem[]) => {
    return products.map((product) => ({
        quantity: product.quantity,
        product: {
            id: product.product.id,
        }
    }));
}