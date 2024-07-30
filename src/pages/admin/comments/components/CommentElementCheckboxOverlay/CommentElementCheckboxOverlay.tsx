import CommentElementCheckboxOverlayLayout from "./CommentElementCheckboxOverlayLayout";
import {Dispatch, SetStateAction} from "react";
import {CommentType} from "@/types/CommentType";

type CommentElementCheckboxOverlayProps = {
    isHovered: boolean,
    setIsHovered: Dispatch<SetStateAction<boolean>>,
    id: number,
    commentType: CommentType,
    isSelected: boolean,
}

const CommentElementCheckboxOverlay = (props: CommentElementCheckboxOverlayProps) => {
    return (
        <CommentElementCheckboxOverlayLayout {...props}>
            <div className={"size-5"}/>
        </CommentElementCheckboxOverlayLayout>
    )
}

export default CommentElementCheckboxOverlay;