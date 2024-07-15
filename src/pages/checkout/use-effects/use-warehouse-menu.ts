import {useEffect, useState} from "react";

export const useWarehouseMenu = (
    list: HTMLDivElement | null,
    element: HTMLDivElement | null
) => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    const handleClick = (e: MouseEvent) => {
        if (!list || list.contains(e.target as Node)) return;
        if (!element || element.contains(e.target as Node)) return;

        setIsMenuShown(false);
    }

    useEffect(() => {
        if (!list || !element) return;

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [list]);

    return {isMenuShown, setIsMenuShown};
}