import {commentsSelectMenuSignal} from "@/pages/admin/signals/comments-select-menu-signal";
import {Dispatch, MutableRefObject, SetStateAction, useEffect, useState} from "react";
import {effect} from "@preact/signals-react";

export const useCommentsMenu = (
    menuRef: MutableRefObject<HTMLDivElement | null>,
    menuButtonRef: MutableRefObject<HTMLDivElement | null>,
) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (e: MouseEvent) => {
        if (!menuRef.current || menuButtonRef.current?.contains(e.target as Node)) return;
        commentsSelectMenuSignal.value = false;
    }

    useEffect(() => {
        effect(() => {
            const {value} = commentsSelectMenuSignal;
            setIsMenuOpen(value);
        });

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return {isMenuOpen};
}