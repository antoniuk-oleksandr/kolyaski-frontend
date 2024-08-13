import AdminSearchbarLayout from "./AdminSearchbarLayout";
import {useState} from "react";
import AdminSearchbarSearchElement from "@/pages/admin/comments/components/AdminSearchbarSearchElement";
import AdminSearchbarButton from "@/pages/admin/comments/components/AdminSearchbarButton";
import AdminSearchbarClearButton from "@/pages/admin/comments/components/AdminSearchbarClearButton";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {AdminSubmitActionType} from "@/types/AdminSubmitActionType";
import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {SortOrderEnum} from "@/types/SortOrderEnum";

type CommentsSearchbarProps = {
    value: string,
    page: number,
    submitAction: AdminSubmitActionType,
    sortBy?: OrdersSortByEnum,
    sortOrder?: SortOrderEnum,
    type?: string,
    sortType?: string,
}

const AdminSearchbar = (props: CommentsSearchbarProps) => {
    const {value} = props;
    const [inputValue, setInputValue] = useState(value);

    return (
        <AdminSearchbarLayout {...props} inputValue={inputValue}>
            <AdminSearchbarButton/>
            <AdminSearchbarSearchElement inputValue={inputValue} setInputValue={setInputValue}/>
            <AdminSearchbarClearButton setInputValue={setInputValue} inputValue={inputValue}/>
        </AdminSearchbarLayout>
    )
}

export default AdminSearchbar;