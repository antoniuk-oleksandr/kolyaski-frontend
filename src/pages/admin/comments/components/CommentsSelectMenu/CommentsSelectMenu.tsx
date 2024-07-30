import CommentsSelectMenuLayout from "./CommentsSelectMenuLayout";
import CommentsSelectMenuItem from "@/pages/admin/comments/components/CommentsSelectMenuItem/CommentsSelectMenuItem";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {getCommentSelectMenuItems} from "../comment-select-menu-items";
import {CommentItemType} from "@/types/CommentItemType";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";

type CommentsSelectMenuProps = {
    menuButtonRef: MutableRefObject<HTMLDivElement | null>,
    commentItems: CommentItemType[],
    setChecked: Dispatch<SetStateAction<boolean>>,
}

const CommentsSelectMenu = (props: CommentsSelectMenuProps) => {
    const {commentItems, setChecked} = props;
    const commentsState = useSelector((state: ReduxState) => state.comments);
    const dispatch = useDispatch();

    return (
        <CommentsSelectMenuLayout {...props}>
            {getCommentSelectMenuItems(commentItems, setChecked, commentsState, dispatch)
                .map((item, index) => (
                    <CommentsSelectMenuItem {...item} key={index}/>
                ))}
        </CommentsSelectMenuLayout>
    )
}

export default CommentsSelectMenu;