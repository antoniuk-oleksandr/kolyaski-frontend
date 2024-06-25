import SidebarItemContentLayout from "./SidebarItemContentLayout";
import SidebarItemChevron from "@/common-components/SidebarItemList/components/SidebarItemChevron";
import {Dispatch, SetStateAction} from "react";
import {SidebarItemType} from "@/types/SidebarItemType";

type SidebarItemContentProps = {
    border?: boolean,
    setIsHovered: Dispatch<SetStateAction<boolean>>,
    item: SidebarItemType,
}

const SidebarItemContent = (props: SidebarItemContentProps) => {
    const {item} = props;
    const {text} = item;

    return (
        <SidebarItemContentLayout {...props}>
            <p>{text}</p>
            <SidebarItemChevron {...props}/>
        </SidebarItemContentLayout>
    )
}

export default SidebarItemContent;