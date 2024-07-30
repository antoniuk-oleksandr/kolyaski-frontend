import CommentsBlockButtonsLayout from "./CommentsBlockButtonsLayout";
import CommentsReloadButton from "@/pages/admin/comments/components/CommentsReloadButton";
import CommentsSelectButton from "@/pages/admin/comments/components/CommentsSelectButton";
import {CommentItemType} from "@/types/CommentItemType";
import {Dispatch, SetStateAction} from "react";
import {Tooltip} from "@mantine/core";
import CommentsMainMarkButton from "@/pages/admin/comments/components/CommentsMainMarkButton/CommentsMainMarkButton";
import CommentPageChangeElement
    from "@/pages/admin/comments/components/CommentPageChangeElement/CommentPageChangeElement";

type CommentsBlockButtonsProps = {
    commentItems: CommentItemType[],
    indeterminate: boolean,
    checked: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>,
}

const CommentsBlockButtons = (props: CommentsBlockButtonsProps) => {
    return (
        <CommentsBlockButtonsLayout>
            <CommentsSelectButton {...props}/>
            <CommentsReloadButton/>
            <CommentsMainMarkButton {...props}/>
            <CommentPageChangeElement/>
        </CommentsBlockButtonsLayout>
    )
}

export default CommentsBlockButtons;