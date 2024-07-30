import CommentsSelectMenuCheckboxLayout from "./CommentsSelectMenuCheckboxLayout";
import {getCommentCheckboxStyles} from "@/pages/admin/comments/components/comment-checkbox-styles";
import {Checkbox} from "@mantine/core";
import {Dispatch, SetStateAction} from "react";
import {CommentItemType} from "@/types/CommentItemType";

type CommentsSelectMenuCheckboxProps = {
    checked: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>,
    commentItems: CommentItemType[],
    indeterminate: boolean,
}

const CommentsSelectMenuCheckbox = (props: CommentsSelectMenuCheckboxProps) => {
    const {checked, indeterminate} = props;

    return (
        <CommentsSelectMenuCheckboxLayout {...props}>
            <Checkbox
                className={"duration-200 ease-out hover:bg-gray-300 hover:ring-[8px] rounded-full ring-gray-300"}
                onChange={() => null}
                styles={getCommentCheckboxStyles(false)}
                variant="outline"
                indeterminate={indeterminate}
                checked={checked}
            />
        </CommentsSelectMenuCheckboxLayout>
    )
}

export default CommentsSelectMenuCheckbox;