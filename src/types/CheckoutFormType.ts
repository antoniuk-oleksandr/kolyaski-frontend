import {City} from "@/types/City";
import {Warehouse} from "@/types/Warehouse";
import {CartItem} from "@/types/CartItem";

export type CheckoutFormType = {
    name: string,
    surname: string,
    phoneNumber: string,
    email: string | undefined,
    message: string | undefined,
    city: City,
    warehouse: Warehouse,
    products: CartItem[],
}