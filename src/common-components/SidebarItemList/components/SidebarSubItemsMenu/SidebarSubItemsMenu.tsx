import SidebarSubItemsMenuLayout from "./SidebarSubItemsMenuLayout";
import {SidebarItemType} from "@/types/SidebarItemType";
import SidebarItem from "@/common-components/SidebarItemList/components/SidebarItem/SidebarItem";

type SidebarSubItemsMenuProps = {
    items: SidebarItemType[] | undefined,
    isShown: boolean,
    subMenuStyles? : string,
    subMenuItemStyle?: string,
}

const SidebarSubItemsMenu = (props: SidebarSubItemsMenuProps) => {
    const {items, isShown, subMenuItemStyle} = props;
    if (items === undefined) return null;

    return (
        <SidebarSubItemsMenuLayout {...props} isShown={isShown}>
            {items.map((item, index) => (
                <SidebarItem
                    key={index}
                    itemStyles={`hover:text-neutral-600 ${subMenuItemStyle}`}
                    item={item}
                />
            ))}
        </SidebarSubItemsMenuLayout>
    )
}

export default SidebarSubItemsMenu;