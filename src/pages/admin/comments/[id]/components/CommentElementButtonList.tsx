import CommentsBlockButtonsLayout
    from "@/pages/admin/comments/components/CommentsBlockButtons/CommentsBlockButtonsLayout";
import CommentElementButton from "@/pages/admin/comments/[id]/components/CommentElementButton";
import {useRouter} from "next/router";
import {FaArrowLeft, FaEnvelope, FaEnvelopeOpen, FaTrash} from "react-icons/fa6";
import {Comment} from "@/types/Comment";
import {
    handleChangeReadTypeToUnreadButtonClick, handleCommentsReturnBackButtonClick,
    handleDeleteCommentElementButtonClick
} from "@/pages/admin/comments/[id]/handlers";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {useState} from "react";

type CommentElementButtonsProps = Comment;

const CommentElementButtonList = (props: CommentElementButtonsProps) => {
    const {id} = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const {tokenInfo} = useSelector((state: ReduxState) => state.token);
    const {page, value} = useSelector((state: ReduxState) => state.comments);
    const [isDisabled, setIsDisabled] = useState(false);

    if (!page || value === null) return null;
    return (
        <CommentsBlockButtonsLayout>
            <CommentElementButton
                isDisabled={isDisabled}
                label={'Повернутися назад'}
                action={() => handleCommentsReturnBackButtonClick(router, page, value)}
                icon={<FaArrowLeft/>}
            />
            <CommentElementButton
                isDisabled={isDisabled}
                label={'Видалити'}
                action={() =>
                    handleDeleteCommentElementButtonClick(dispatch, id, tokenInfo, router, setIsDisabled)}
                icon={<FaTrash/>}
            />
            <CommentElementButton
                isDisabled={isDisabled}
                label={`Позначити як непрочитане`}
                action={() =>
                    handleChangeReadTypeToUnreadButtonClick(dispatch, id, tokenInfo, router, setIsDisabled)}
                icon={<FaEnvelope/>}
            />
        </CommentsBlockButtonsLayout>
    )
}

export default CommentElementButtonList;
