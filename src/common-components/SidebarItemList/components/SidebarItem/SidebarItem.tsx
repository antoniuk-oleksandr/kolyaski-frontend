import SidebarItemLayout from "./SidebarItemLayout";
import {SidebarItemType} from "@/types/SidebarItemType";
import SidebarItemChevron from "@/common-components/SidebarItemList/components/SidebarItemChevron";
import {useState} from "react";
import SidebarSubItemsMenu
    from "@/common-components/SidebarItemList/components/SidebarSubItemsMenu/SidebarSubItemsMenu";

type SidebarItemProps = {
    itemStyles: string,
    chevronDirection: 'right' | 'down',
    item: SidebarItemType,
    border?: boolean,
    subMenuStyles?: string,
    subMenuItemStyle?: string,
}

const SidebarItem = (props: SidebarItemProps) => {
    const {item, subMenuStyles, subMenuItemStyle} = props;
    const {text, link} = item;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <SidebarItemLayout link={link} setIsHovered={setIsHovered} {...props}>
            <p>{text}</p>
            <SidebarItemChevron {...props}/>
            <SidebarSubItemsMenu
                {...props}
                subMenuStyles={subMenuStyles}
                isShown={isHovered}
                items={item.subItems}
            />
        </SidebarItemLayout>
    )
}

export default SidebarItem;