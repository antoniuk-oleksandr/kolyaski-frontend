import {LayoutProps} from "@/types/LayoutProps";
import {AdminSidebarItemType} from "@/types/AdminSidebarItemType";
import {useRouter} from "next/router";
import {handleAdminSidebarItemClick} from "@/pages/admin/handlers";

type AdminSidebarItemLayoutProps = LayoutProps & {
    item: AdminSidebarItemType,
    isSelected: boolean,
    clickAction? : () => void,
}

const AdminSidebarItemLayout = (props: AdminSidebarItemLayoutProps) => {
    const {children, item, isSelected, clickAction} = props;
    const {link} = item;
    const router = useRouter();

    return (
        <div
            onClick={() => handleAdminSidebarItemClick(router, link, clickAction)}
            className={` px-3 py-1.5 flex gap-x-3 items-center cursor-pointer duration-200 ease-out
            ${isSelected ? 'border-r-4 border-r-primary bg-neutral-200' : 'hover:bg-neutral-100'}`}>
            {children}
        </div>
    )
}

export default AdminSidebarItemLayout;