import AdminPageChangeElementLayout from "./AdminPageChangeElementLayout";
import AdminPageChangeArrow from "@/pages/admin/components/AdminPageChangeArrow";
import {OrdersState} from "@/types/OrdersState";
import {CommentsState} from "@/types/CommentsState";
import {AdminProductsState} from "@/types/AdminProductsState";

type AdminPageChangeElementProps = {
    state: OrdersState | CommentsState | AdminProductsState,
    link: string,
    onePageItems: number,
    linkParams?: string,
}

const AdminPageChangeElement = (props: AdminPageChangeElementProps) => {
    const {state, onePageItems} = props;
    const {onPageCount, page, totalCount} = state;
    if (!page || !totalCount || !onPageCount) return;
    const first = (page - 1) * onePageItems + 1;

    return (
        <AdminPageChangeElementLayout>
            <span>{first}-{onePageItems * (page - 1) + onPageCount} з {totalCount}</span>
            <AdminPageChangeArrow {...props} onePageItems={onePageItems} left={true}/>
            <AdminPageChangeArrow {...props} onePageItems={onePageItems} left={false}/>
        </AdminPageChangeElementLayout>
    )
}

export default AdminPageChangeElement;