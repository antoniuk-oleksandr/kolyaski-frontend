import {Comment} from "@/types/Comment";
import {CommentItemType} from "@/types/CommentItemType";
import {CommentsState} from "@/types/CommentsState";
import {CommentType} from "@/types/CommentType";

export const getCommentItems = (
    commentsState: CommentsState,
): CommentItemType[] => {
    const {unreadComments, readComments} = commentsState;

    return [
        {
            title: "Непрочитані",
            comments: unreadComments as Comment[],
            commentType: CommentType.Unread,
        },
        {
            title: "Прочитані",
            comments: readComments as Comment[],
            commentType: CommentType.Read,
        },
    ];
}