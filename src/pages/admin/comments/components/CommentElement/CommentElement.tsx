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
            <span className={"truncate"}>{name}</span>
            <span className={"truncate"}>{message}</span>
            <span className={"text-end"}>{dateStringFormat}</span>
            <CommentElementHoverItems {...props} commentHovered={commentHovered}/>
        </CommentElementLayout>
    )
}

export default CommentElement;