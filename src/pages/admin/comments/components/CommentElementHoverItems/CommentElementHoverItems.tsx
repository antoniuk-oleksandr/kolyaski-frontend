import CommentElementHoverItemsLayout from "./CommentElementHoverItemsLayout";
import {FaEnvelope, FaEnvelopeOpen, FaTrash} from "react-icons/fa6";
import {Tooltip} from "@mantine/core";
import ComponentElementIcon from "@/pages/admin/comments/components/ComponentElementIcon";
import {handleChangeReadTypeButtonClick, handleDeleteCommentButtonClick} from "@/pages/admin/comments/handlers";
import {useDispatch, useSelector} from "react-redux";
import {TokenInfo} from "@/types/TokenInfo";
import {CommentType} from "@/types/CommentType";
import {useViewportSize} from "@mantine/hooks";
import { useRouter } from "next/router";

type CommentElementHoverItemsProps = {
    commentHovered: boolean,
    isUnread: boolean,
    id: number,
    commentType: CommentType,
    isSelected: boolean,
};

const CommentElementHoverItems = (props: CommentElementHoverItemsProps) => {
    const {isUnread, id, commentType, isSelected} = props;
    const {tokenInfo} = useSelector((state: any) => state.token) as { tokenInfo: TokenInfo };
    const {deleteRequestSending, changeReadTypeRequestSending} =
        useSelector((state: any) => state.comments);
    const dispatch = useDispatch();
    const {width} = useViewportSize();
    const isMobile = width < 960;
    const router = useRouter();

    if(isMobile) return null;
    return (
        <CommentElementHoverItemsLayout {...props}>
            <Tooltip label={'Видалити'}>
                <div className={"h-fit grid place-items-center"}>
                    <ComponentElementIcon
                        lightOverlay={true}
                        isSelected={isSelected}
                        isDisabled={deleteRequestSending as boolean}
                        action={() => handleDeleteCommentButtonClick(dispatch, id, tokenInfo, commentType, router)}
                        icon={<FaTrash/>}
                    />
                </div>
            </Tooltip>
            <Tooltip label={isUnread ? 'Позначити як прочитане' : 'Позначити як непрочитане'}>
                <div className={"h-fit grid place-items-center"}>
                    <ComponentElementIcon
                        lightOverlay={true}
                        isSelected={isSelected}
                        isDisabled={changeReadTypeRequestSending as boolean}
                        action={() => handleChangeReadTypeButtonClick(dispatch, id, !isUnread, tokenInfo, commentType, router)}
                        icon={isUnread ? <FaEnvelopeOpen/> : <FaEnvelope/>}
                    />
                </div>
            </Tooltip>
        </CommentElementHoverItemsLayout>
    )
}

export default CommentElementHoverItems;