import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";
import {useRouter} from "next/router";
import {handleSidebarItemClick} from "@/common-components/SidebarItemList/handlers";
import {useViewportSize} from "@mantine/hooks";

type SidebarItemLayoutProps = LayoutProps & {
    itemStyles: string,
    setIsHovered: Dispatch<SetStateAction<boolean>>,
    link: string,
    border?: boolean,
    setIsParentHovered?: Dispatch<SetStateAction<boolean>>,
}


const SidebarItemLayout = (props: SidebarItemLayoutProps) => {
    const {children, itemStyles, setIsHovered, link, setIsParentHovered} = props;
    const router = useRouter();
    const {width} = useViewportSize();
    const isMobile = width < 960;

    return (
        <div
            onClick={(e) => handleSidebarItemClick(e, router, link, setIsParentHovered)}
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
            className={`text-sm font-medium duration-200 ease-out cursor-pointer flex gap-x-1.5 justify-center flex-col relative 
            ${itemStyles}`}>
            {children}
        </div>
    )
}

export default SidebarItemLayout;