import CommentElementLayout from "./CommentElementLayout";
import {Comment} from "@/types/Comment";
import {useState} from "react";
import CommentElementHoverItems
    from "@/pages/admin/comments/components/CommentElementHoverItems/CommentElementHoverItems";
import CommentElementCheckbox from "@/pages/admin/comments/components/CommentElementCheckbox/CommentElementCheckbox";
import {CommentType} from "@/types/CommentType";

type CommentElementProps = Comment & {
    commentType: CommentType,
    isLast: boolean,
};

const CommentElement = (props: CommentElementProps) => {
    const {name, message, dateStringFormat} = props;
    const [commentHovered, setCommentHovered] = useState(false);

    return (
        <CommentElementLayout {...props} setCommentHovered={setCommentHovered}>
            <CommentElementCheckbox {...props}/>
            <span className={"truncate text-base"}>{name}</span>
            <span className={"truncate phone:col-start-2 phone:row-start-2"}>{message}</span>
            <span className={"text-end phone:text-xs"}>{dateStringFormat}</span>
            <CommentElementHoverItems {...props} commentHovered={commentHovered}/>
        </CommentElementLayout>
    )
}

export default CommentElement;