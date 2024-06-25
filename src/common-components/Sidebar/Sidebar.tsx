import SidebarLayout from "./SidebarLayout";
import SidebarHeader from "@/common-components/Sidebar/components/SidebarHeader/SidebarHeader";
import SidebarItemList from "@/common-components/SidebarItemList/SidebarItemList";
import SidebarContent from "@/common-components/Sidebar/components/SidebarContent/SidebarContent";

const Sidebar = () => {
    return (
        <SidebarLayout>
            <SidebarHeader/>
            <SidebarContent/>
        </SidebarLayout>
    )
}

export default Sidebar;