import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {handleAdminSearchSubmit} from "@/pages/admin/comments/handlers";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {AdminSubmitActionType} from "@/types/AdminSubmitActionType";
import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {SortOrderEnum} from "@/types/SortOrderEnum";

type CommentsSearchbarProps = LayoutProps & {
    inputValue: string,
    page: number,
    submitAction: AdminSubmitActionType,
    sortBy?: OrdersSortByEnum,
    sortOrder?: SortOrderEnum,
    type?: string,
    sortType?: string,
}

const AdminSearchbarLayout = (props: CommentsSearchbarProps) => {
    const {inputValue, page, submitAction, sortBy, sortOrder, type, sortType} = props;
    const {children, } = props;
    const methods = useForm();
    const router = useRouter();
    const dispatch = useDispatch();

    if (!page) return;
    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    handleAdminSearchSubmit(data, router, page, inputValue, dispatch, submitAction, sortBy, sortOrder, type, sortType))}
                className={"w-180 phone:w-full items-center rounded-full bg-white my-2 flex"}
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default AdminSearchbarLayout;