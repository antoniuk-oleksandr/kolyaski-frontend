import CommentsMainMarkButtonLayout from "./CommentsMainMarkButtonLayout";
import {FaEnvelope, FaEnvelopeOpen} from "react-icons/fa6";
import {Tooltip} from "@mantine/core";
import ComponentElementIcon from "@/pages/admin/comments/components/ComponentElementIcon";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {markAllComments} from "@/pages/admin/comments/handlers";

type CommentsMainMarkButtonProps = {
    checked: boolean,
}

const CommentsMainMarkButton = (props: CommentsMainMarkButtonProps) => {
    const {checked} = props;
    const {comments, token} = useSelector((state: ReduxState) => state);
    const markAsRead = comments.unreadComments?.some((item) => item.isSelected);
    const dispatch = useDispatch();

    if (!checked || markAsRead === undefined) return;
    return (
        <CommentsMainMarkButtonLayout checked={checked}>
            <Tooltip label={`Позначити як ${!markAsRead ? 'не' : ''}прочитані`}>
                <div
                    onClick={() => markAllComments(comments, markAsRead, dispatch, token.tokenInfo)}
                    className={"grid place-items-center"}>
                    <ComponentElementIcon icon={markAsRead ? <FaEnvelopeOpen/> : <FaEnvelope/>}/>
                </div>
            </Tooltip>
        </CommentsMainMarkButtonLayout>
    )
}

export default CommentsMainMarkButton;