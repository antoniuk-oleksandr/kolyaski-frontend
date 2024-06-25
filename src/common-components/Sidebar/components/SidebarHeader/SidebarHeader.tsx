import SidebarHeaderLayout from "./SidebarHeaderLayout";
import {IoMenu} from "react-icons/io5";

const SidebarHeader = () => {
    return (
        <SidebarHeaderLayout>
            <IoMenu className={"text-2xl"}/>
            <span>категорії</span>
        </SidebarHeaderLayout>
    )
}

export default SidebarHeader;