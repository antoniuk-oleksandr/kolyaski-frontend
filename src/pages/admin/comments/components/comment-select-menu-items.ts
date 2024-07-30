import {CommentsSelectMenuItemType} from "@/types/CommentsSelectMenuItemType";
import {CommentItemType} from "@/types/CommentItemType";
import {selectAllComments, selectSomeComments} from "@/pages/admin/comments/helpers";
import {Dispatch, SetStateAction} from "react";
import {CommentsState} from "@/types/CommentsState";
import {UnknownAction} from "redux";
import {CommentType} from "@/types/CommentType";

export const getCommentSelectMenuItems = (
    commentItems: CommentItemType[],
    setChecked: Dispatch<SetStateAction<boolean>>,
    commentsState: CommentsState,
    dispatch: Dispatch<UnknownAction>,
) => {
    const menuItem = [
        {text: "Всі", select: () => selectAllComments(commentItems, true, commentsState, dispatch)},
        {text: "Жоден", select: () => selectAllComments(commentItems, false, commentsState, dispatch)},
        {
            text: "Непрочитані", select: () => {
                selectSomeComments(commentsState, CommentType.Unread, dispatch, true);
                selectSomeComments(commentsState, CommentType.Read, dispatch, false);
            }
        },
        {
            text: "Прочитані",
            select: () => {
                selectSomeComments(commentsState, CommentType.Read, dispatch, true);
                selectSomeComments(commentsState, CommentType.Unread, dispatch, false);
            }
        }
    ];

    return menuItem.map(({text, select}) => ({
        text,
        action: () => {
            select();
            setChecked(text !== "Жоден");
        }
    })) as CommentsSelectMenuItemType[];
}