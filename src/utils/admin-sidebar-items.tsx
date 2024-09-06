import { FaHome } from "react-icons/fa";
import {FaBoxArchive, FaClipboardList, FaComments} from "react-icons/fa6";
import {AdminSidebarItemType} from "@/types/AdminSidebarItemType";

const items = [
    {text: "Головна", link: "/admin", icon: <FaHome />},
    {text: "Коментарі", link: "/admin/comments", icon: <FaComments />},
    {text: "Товари", link: "/admin/products", icon: <FaBoxArchive />},
    {text: "Замовлення", link: "/admin/orders", icon: <FaClipboardList />},
] as AdminSidebarItemType[];

export { items };
