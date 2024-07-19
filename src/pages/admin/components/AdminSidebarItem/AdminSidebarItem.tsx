import AdminSidebarItemLayout from "./AdminSidebarItemLayout";
import {AdminSidebarItemType} from "@/types/AdminSidebarItemType";

type AdminSidebarItemProps = {
    item: AdminSidebarItemType,
    isSelected: boolean,
}

const AdminSidebarItem = (props: AdminSidebarItemProps) => {
    const {item} = props;
    const {text, icon} = item;

    return (
        <AdminSidebarItemLayout {...props}>
            <div className={"grid place-items-center text-xl"}>
                {icon}
            </div>
            <p>{text}</p>
        </AdminSidebarItemLayout>
    )
}

export default AdminSidebarItem;