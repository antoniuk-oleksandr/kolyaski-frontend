import React, {Dispatch, MutableRefObject, SetStateAction} from "react";
import {UnknownAction} from "redux";
import {ProductData} from "@/types/ProductData";
import {addCartProduct} from "@/redux/cart-slice";
import {addCartProductToLocalStorage} from "@/utils/local-storage-utils";
import {removeUnnecessaryFieldsFromProduct} from "@/pages/product/[id]/helpers";
import {CartItem} from "@/types/CartItem";

export const handleProductImageMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setPercentages: Dispatch<SetStateAction<number[]>>,
) => {
    const {clientX, clientY} = e;
    const {left, top, width, height} = e.currentTarget.getBoundingClientRect();

    const percentageX = (((clientX - left) / width) * 100);
    const percentageY = (((clientY - top) / height) * 100);

    setPercentages([percentageX, percentageY]);
}

export const handleSlideBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setIsViewShown: Dispatch<SetStateAction<boolean>>,
    backDropRef: MutableRefObject<HTMLDivElement | null>,
) => {
    if (backDropRef.current && !(e.target as Node).contains(backDropRef.current)) return;

    e.stopPropagation();
    setIsViewShown(false);
}


export const handleImagesViewControlClick = (
    setSelectedSlideIndex: Dispatch<SetStateAction<number>>,
    numberOfSlides: number,
    sign: number,
) => {
    setSelectedSlideIndex((prev) => {
        const value = (prev + sign) % numberOfSlides;
        if(value === -1) return numberOfSlides - 1;
        return value;
    });
}

export const handleProductBuyFormSubmit = (
    data: any,
    dispatch: Dispatch<UnknownAction>,
    product: ProductData,
) => {
    const copiedProduct = removeUnnecessaryFieldsFromProduct(product);
    const newCartItem = {quantity: data.quantity, product: {id: copiedProduct.id}} as CartItem;
    dispatch(addCartProduct(newCartItem));
    addCartProductToLocalStorage(newCartItem);
}