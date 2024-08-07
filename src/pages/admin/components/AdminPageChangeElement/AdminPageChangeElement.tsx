import AdminPageChangeElementLayout from "./AdminPageChangeElementLayout";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import AdminPageChangeArrow from "@/pages/admin/components/AdminPageChangeArrow";
import {OrdersState} from "@/types/OrdersState";
import {CommentsState} from "@/types/CommentsState";

type AdminPageChangeElementProps = {
    state: OrdersState | CommentsState,
}

const AdminPageChangeElement = (props: AdminPageChangeElementProps) => {
    const {state} = props;
    const {commentsOnPageCount, page, totalCommentsCount} = state;
    if (!page || !totalCommentsCount || !commentsOnPageCount) return;
    const onePageItems = 50;
    const first = (page - 1) * onePageItems + 1;

    return (
        <AdminPageChangeElementLayout>
            <span>{first}-{onePageItems * (page - 1) + commentsOnPageCount} з {totalCommentsCount}</span>
            <AdminPageChangeArrow {...props} onePageItems={onePageItems} left={true}/>
            <AdminPageChangeArrow {...props} onePageItems={onePageItems} left={false}/>
        </AdminPageChangeElementLayout>
    )
}

export default AdminPageChangeElement;