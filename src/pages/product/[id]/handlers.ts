import React, {Dispatch, MutableRefObject, SetStateAction} from "react";

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