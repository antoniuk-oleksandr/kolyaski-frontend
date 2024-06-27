import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useRouter} from "next/router";

type ThirdBottomHeaderColumnItemLayoutProps = LayoutProps & {
    setIsHovered: Dispatch<SetStateAction<boolean>>,
    isHovered: boolean,
    link: string,
}

const ThirdBottomHeaderColumnItemLayout = (props: ThirdBottomHeaderColumnItemLayoutProps) => {
    const {children, setIsHovered, isHovered, link} = props;
    const router = useRouter();

    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => router.push(link)}
            className={`flex flex-col items-center justify-center text-3xl gap-y-2 duration-200 ease-out outline-none active:scale-95
            ${isHovered ? "text-secondary" : "text-white"}`}
        >
            {children}
        </button>
    );
}

export default ThirdBottomHeaderColumnItemLayout;
