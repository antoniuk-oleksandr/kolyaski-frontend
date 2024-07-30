import CommentsBlockLayout from "@/pages/admin/comments/components/CommentsBlock/CommentsBlockLayout";
import CommentElementButtonList from "@/pages/admin/comments/[id]/components/CommentElementButtonList";
import {Comment} from "@/types/Comment";
import CommentElementBody from "@/pages/admin/comments/[id]/components/CommentElementBody/CommentElementBody";

type CommentBodyProps = Comment;

const CommentBody = (props: CommentBodyProps) => {
    return (
        <CommentsBlockLayout>
            <CommentElementButtonList {...props}/>
            <CommentElementBody {...props}/>
        </CommentsBlockLayout>
    )
}

export default CommentBody;