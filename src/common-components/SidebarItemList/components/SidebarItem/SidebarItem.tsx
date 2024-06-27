import SidebarItemLayout from "./SidebarItemLayout";
import {SidebarItemType} from "@/types/SidebarItemType";
import {Dispatch, SetStateAction, useState} from "react";
import SidebarSubItemsMenu
    from "@/common-components/SidebarItemList/components/SidebarSubItemsMenu/SidebarSubItemsMenu";
import SidebarItemContent from "@/common-components/SidebarItemList/components/SidebarItemContent/SidebarItemContent";

type SidebarItemProps = {
    border?: boolean,
    item: SidebarItemType,
    itemStyles: string,
    subMenuItemStyle?: string,
    subMenuStyles?: string,
    setIsParentHovered? :Dispatch<SetStateAction<boolean>>
}

const SidebarItem = (props: SidebarItemProps) => {
    const {item, subMenuStyles} = props;
    const {link} = item;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <SidebarItemLayout link={link} setIsHovered={setIsHovered} {...props}>
            <SidebarItemContent setIsHovered={setIsHovered} {...props}/>
            <SidebarSubItemsMenu
                {...props}
                border={false}
                setIsParentHovered={setIsHovered}
                subMenuStyles={subMenuStyles}
                isShown={isHovered}
                items={item.subItems}
            />
        </SidebarItemLayout>
    )
}

export default SidebarItem;