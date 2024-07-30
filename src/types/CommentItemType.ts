import {Comment} from "@/types/Comment";
import {CommentType} from "@/types/CommentType";

export type CommentItemType = {
    title: string,
    comments: Comment[],
    commentType: CommentType,
}