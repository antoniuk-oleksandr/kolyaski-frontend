import {Comment} from "@/types/Comment";
import CommentListLayout from "@/pages/admin/comments/components/CommentList/CommentListLayout";
import CommentElement from "@/pages/admin/comments/components/CommentElement/CommentElement";
import {CommentItemType} from "@/types/CommentItemType";

type MessageListPage = CommentItemType;

const CommentList = (props: MessageListPage) => {
    const {comments} = props;

    if (comments.length === 0) return null;
    return (
        <CommentListLayout>
            {comments.map((comment: Comment, index: number) => (
                <CommentElement
                    isLast={index === comments.length - 1}
                    {...props}
                    key={index}
                    {...comment}
                />
            ))}
        </CommentListLayout>
    )
}

export default CommentList;