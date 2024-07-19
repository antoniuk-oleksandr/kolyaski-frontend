import AdminSidebarLayout from "./AdminSidebarLayout";
import AdminSidebarItem from "@/pages/admin/components/AdminSidebarItem/AdminSidebarItem";
import {adminSidebarItems} from "./admin-sidebar-items";
import {useAdminPage} from "@/pages/admin/use-admin-page";

type AdminSidebarProps = {
    hide: boolean,
}

const AdminSidebar = (props: AdminSidebarProps) => {
    const {hide} = props;
    const {page} = useAdminPage();

    if(hide) return null;
    return (
        <AdminSidebarLayout>
            {adminSidebarItems.map((item, index) => (
                <AdminSidebarItem isSelected={page === item.link} item={item} key={index}/>
            ))}
        </AdminSidebarLayout>
    )
}

export default AdminSidebar;