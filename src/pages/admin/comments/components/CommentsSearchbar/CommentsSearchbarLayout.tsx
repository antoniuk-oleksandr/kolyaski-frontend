import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {handleCommentsSearchSubmit} from "@/pages/admin/comments/handlers";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";

type CommentsSearchbarProps = LayoutProps & {
    inputValue: string;
}

const CommentsSearchbarLayout = (props: CommentsSearchbarProps) => {
    const {inputValue} = props;
    const {page} = useSelector((state: ReduxState) => state.comments);
    const {children} = props;
    const methods = useForm();
    const router = useRouter();
    const dispatch = useDispatch();

    if (!page) return;
    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    handleCommentsSearchSubmit(data, router, page, inputValue, dispatch))}
                className={"w-180 phone:w-full items-center rounded-full bg-white my-2 flex"}
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default CommentsSearchbarLayout;