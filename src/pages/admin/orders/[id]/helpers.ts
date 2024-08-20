import {OrderType} from "@/types/OrderType";
import {MutableRefObject} from "react";
import {CartItem} from "@/types/CartItem";
import {z} from "zod";
import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {SortOrderEnum} from "@/types/SortOrderEnum";
import {DeliveryType} from "@/types/DeliveryType";
import {OrderStatusEnum} from "@/types/OrderStatusEnum";

export const nullOrder = {
    firstName: null,
    surname: null,
    message: null,
    phoneNumber: null,
    email: null,
    delivery: null,
    products: null,
    status: null,
};

const cleanInitialOrderData = (
    initialData: OrderType,
) => {
    let cleanInitialData = {...initialData};
    delete cleanInitialData.id;
    delete cleanInitialData.totalPrice;
    delete cleanInitialData.date;
    return cleanInitialData;
}

export const compareOrderDataPieces = (
    initialDataRef: MutableRefObject<OrderType | null>,
    editedData: OrderType | null
): OrderType => {
    let differentData = {...nullOrder} as unknown as OrderType;

    if(!initialDataRef.current || !editedData) return differentData;
    let initialData = cleanInitialOrderData(initialDataRef.current);

    Object.entries(initialData).forEach(([key, value]) => {
        if (key === "delivery" || key === "products") return;

        if ((editedData as any)[key] !== value) {
            if (key === "") return;
            (differentData as any)[key] = (editedData as any)[key];
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
    if (!editedData.delivery.warehouse) return;

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

    delete differentData.delivery?.warehouse.schedule;
};

export const checkOrderProductsData = (
    initialData: OrderType,
    editedData: OrderType,
    differentData: OrderType,
) => {
    if (initialData.products.length !== editedData.products.length) {
        differentData.products = formatProducts(editedData.products);
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

    return !Object.values(differentData).some((value) => value !== null);
}

export const formatProducts = (products: CartItem[]) => {
    return products.map((product) => ({
        quantity: product.quantity,
        product: {
            id: product.product.id,
        }
    })) as CartItem[];
}

export const editOrderScheme = z.object({
    firstName: z.string().min(1, {message: "Ім'я не може бути порожнім"}),
    surname: z.string().min(1, {message: "Прізвище не може бути порожнім"}),
    phoneNumber: z.string().min(1, {message: "Телефон не може бути порожнім"}),
    delivery: z.object({
        city: z.object({
            cityName: z.string(),
            ref: z.string(),
            description: z.string(),
            regionName: z.string(),
        }),
        warehouse: z.object({warehouse: z.string()}),
    }),
    products: z.array(z.object({
        quantity: z.number(),
        product: z.object({id: z.number()})
    })).min(1, {message: "Додайте хоча б один товар"}),
    status: z.string(),
    email: z.string().nullable(),
    message: z.any().nullable(),
});