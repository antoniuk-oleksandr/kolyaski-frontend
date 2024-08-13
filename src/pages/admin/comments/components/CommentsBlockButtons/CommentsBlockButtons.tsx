import CommentsBlockButtonsLayout from "./CommentsBlockButtonsLayout";
import CommentsReloadButton from "@/pages/admin/comments/components/CommentsReloadButton";
import CommentsSelectButton from "@/pages/admin/comments/components/CommentsSelectButton";
import {CommentItemType} from "@/types/CommentItemType";
import {Dispatch, SetStateAction} from "react";
import {Tooltip} from "@mantine/core";
import CommentsMainMarkButton from "@/pages/admin/comments/components/CommentsMainMarkButton/CommentsMainMarkButton";
import AdminPageChangeElement
    from "@/pages/admin/components/AdminPageChangeElement/AdminPageChangeElement";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";

type CommentsBlockButtonsProps = {
    commentItems: CommentItemType[],
    indeterminate: boolean,
    checked: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>,
}

const CommentsBlockButtons = (props: CommentsBlockButtonsProps) => {
    const commentsState = useSelector((state: ReduxState) => state.comments);

    return (
        <CommentsBlockButtonsLayout>
            <CommentsSelectButton {...props}/>
            <CommentsReloadButton/>
            <CommentsMainMarkButton {...props}/>
            <AdminPageChangeElement onePageItems={50} link={"/admin/comments"} state={commentsState}/>
        </CommentsBlockButtonsLayout>
    )
}

export default CommentsBlockButtons;