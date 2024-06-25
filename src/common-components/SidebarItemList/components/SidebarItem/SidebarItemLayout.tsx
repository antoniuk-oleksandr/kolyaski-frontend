import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";
import {useRouter} from "next/router";
import {handleSidebarItemClick} from "@/common-components/SidebarItemList/handlers";

type SidebarItemLayoutProps = LayoutProps & {
    itemStyles: string,
    setIsHovered: Dispatch<SetStateAction<boolean>>,
    link: string,
    border?: boolean,
}

const SidebarItemLayout = (props: SidebarItemLayoutProps) => {
    const {children, itemStyles, setIsHovered, link, border} = props;
    const router = useRouter();

    return (
        <div
            onClick={(e) => handleSidebarItemClick(e, router, link)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`text-sm font-medium mb-2 duration-200 ease-out cursor-pointer flex gap-x-1.5 items-center relative 
            ${itemStyles}
            ${border && "border-b"}`}>
            {children}
        </div>
    )
}

export default SidebarItemLayout;