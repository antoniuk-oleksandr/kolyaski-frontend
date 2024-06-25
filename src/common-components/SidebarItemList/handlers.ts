import {NextRouter} from "next/router";
import React, {Dispatch, SetStateAction} from "react";

export const handleSidebarItemClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    router: NextRouter,
    link: string,
) => {
    e.stopPropagation();
    router.push(link);
}

export const handleSidebarItemChevronClick = (
    e: React.MouseEvent<HTMLOrSVGElement, MouseEvent>,
    setIsHovered : Dispatch<SetStateAction<boolean>>,
) => {
    setIsHovered((prev) => !prev);
    e.stopPropagation();
    console.log("chevron clicked");
}