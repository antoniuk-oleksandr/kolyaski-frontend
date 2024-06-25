import {SidebarItemType} from "@/types/SidebarItemType";
import {IoChevronDownOutline, IoChevronForwardOutline} from "react-icons/io5";
import {handleSidebarItemChevronClick} from "@/common-components/SidebarItemList/handlers";
import {Dispatch, SetStateAction} from "react";
import {useViewportSize} from "@mantine/hooks";

type SidebarItemChevronProps = {
    item: SidebarItemType,
    setIsHovered: Dispatch<SetStateAction<boolean>>,
}

const SidebarItemChevron = (props: SidebarItemChevronProps) => {
    const {item, setIsHovered} = props
    const styles = 'text-lg';
    const {width} = useViewportSize();
    const isMobile = width < 960;

    if (item.subItems === undefined) return null;
    return (
        <>
            <IoChevronForwardOutline
                onClick={(e) => isMobile && handleSidebarItemChevronClick(e, setIsHovered)}
                className={`${styles} ${isMobile ? 'hidden' : 'static'}`}
            />
            <IoChevronDownOutline
                onClick={(e) => isMobile && handleSidebarItemChevronClick(e, setIsHovered)}
                className={`${styles} ${!isMobile ? 'hidden' : 'static'}`}
            />
        </>
    )
}

export default SidebarItemChevron;