import SidebarContentLayout from "./SidebarContentLayout";
import SidebarItemList from "@/common-components/SidebarItemList/SidebarItemList";

const SidebarContent = () => {
    return (
        <SidebarContentLayout>
            <SidebarItemList
                subMenuItemStyle={'hover:!text-secondary'}
                menuStyles={'!w-full'}
                subMenuStyles={'!bg-primary !text-white w-full px-2 pt-2 drop-shadow-lg'}
                itemStyles={'py-3 !mb-0 hover:!text-primary'}
                borderBottom
            />
        </SidebarContentLayout>
    )
}

export default SidebarContent;