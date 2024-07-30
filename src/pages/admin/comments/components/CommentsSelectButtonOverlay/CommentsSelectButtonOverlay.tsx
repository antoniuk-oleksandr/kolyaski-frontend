import {Dispatch, SetStateAction} from "react";
import {CommentItemType} from "@/types/CommentItemType";
import CommentsSelectButtonOverlayLayout
    from "@/pages/admin/comments/components/CommentsSelectButtonOverlay/CommentsSelectButtonOverlayLayout";

type CommentsSelectButtonOverlayProps = {
    setIsHovered: Dispatch<SetStateAction<boolean>>,
    isHovered: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>,
    commentItems: CommentItemType[],
}

const CommentsSelectButtonOverlay = (props: CommentsSelectButtonOverlayProps) => {
    return (
        <CommentsSelectButtonOverlayLayout {...props}>
            <div className={"size-5"}/>
        </CommentsSelectButtonOverlayLayout>
    )
}

export default CommentsSelectButtonOverlay;