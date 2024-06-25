import SidebarItemListLayout from "./SidebarItemListLayout";
import {sidebarItemListText} from "./sidebar-Item-list-text"
import SidebarItem from "@/common-components/SidebarItemList/components/SidebarItem/SidebarItem";
import {Key} from "react";

type SidebarItemListProps = {
    itemStyles: string,
    chevronDirection: 'right' | 'down',
    subMenuStyles?: string,
    menuStyles?: string,
    borderBottom?: boolean,
    subMenuItemStyle?: string,
}

const SidebarItemList = (props: SidebarItemListProps) => {
    const {borderBottom} = props;

    return (
        <SidebarItemListLayout {...props}>
            {sidebarItemListText.map((item, index: Key) => (
                <SidebarItem
                    border={borderBottom && index !== sidebarItemListText.length - 1}
                    item={item}
                    {...props}
                    key={index}/>
            ))}
        </SidebarItemListLayout>
    )
}

export default SidebarItemList;