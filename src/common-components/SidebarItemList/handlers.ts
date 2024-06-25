import {NextRouter} from "next/router";
import React from "react";

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
) => {
    e.stopPropagation();
    console.log("chevron clicked");
}