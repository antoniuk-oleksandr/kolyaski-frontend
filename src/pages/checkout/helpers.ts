import {City} from "@/types/City";
import {CartItem} from "@/types/CartItem";
import {z} from "zod";
import {ProductData} from "@/types/ProductData";

export const checkIfSelectorCityContainError = (
    responseCities: City[] | undefined,
    inputValue: string,
    cityInput: City,
) => {
    if (inputValue === cityInput.description) return false;
    return !(responseCities === undefined || responseCities.length > 0);
}

export const calcTotalCartQuantity = (products: CartItem[]) => {
    return products.reduce((acc, item) => acc + item.quantity, 0);
}

export const getCartQuantityWordEnding = (totalCartQuantity: number) => {
    if (totalCartQuantity % 10 === 1) return "";
    if ([2, 3, 4].includes(totalCartQuantity % 10)) return "и";
    else return "ів";
}

export const checkoutFormScheme = z.object({
    warehouse: z.object({
        warehouse: z.string(),
    }).refine((value) => value !== undefined || value !== null),
    city: z.object({
        cityName: z.string(),
        regionName: z.string(),
        description: z.string(),
        ref: z.string(),
    }).refine((value) => value !== undefined || value !== null),
    products: z.array(z.object({
        quantity: z.number(),
        product: z.object({
            id: z.number(),
            price: z.number(),
        }),
    })),
    name: z.string().min(1, "Ім'я є обов'язковим"),
    surname: z.string().min(1, "Прізвище є обов'язковим"),
    phoneNumber: z.any().refine((value) => !isNaN(value), {message: "Номер телефона є обов'язковим"})
        .refine((value) => value.toString().length > 8, {message: "Номер телефона не може бути таким коротким"})
    .refine((value) => value.toString().length < 13, {message: "Номер телефона не може бути таким довгим"}),
});