import {OrderStatusEnum} from "@/types/OrderStatusEnum";
import {DeliveryType} from "@/types/DeliveryType";
import {CartItem} from "@/types/CartItem";

export type OrderType = {
    id: number,
    totalPrice: number,
    date: string,
    firstName: string,
    surname: string,
    message: string | null,
    phoneNumber: string,
    email: string | null,
    delivery: DeliveryType,
    products: CartItem[],
    status: OrderStatusEnum,
}