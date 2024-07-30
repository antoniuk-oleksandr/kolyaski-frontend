import {LayoutProps} from "@/types/LayoutProps";
import {handleCommentsMainCheckboxChange} from "@/pages/admin/comments/handlers";
import {Dispatch, SetStateAction} from "react";
import {CommentItemType} from "@/types/CommentItemType";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";

type CommentsSelectButtonOverlayLayoutProps = LayoutProps & {
    setIsHovered: Dispatch<SetStateAction<boolean>>,
    isHovered: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>,
    commentItems: CommentItemType[],
}

const CommentsSelectButtonOverlayLayout = (props: CommentsSelectButtonOverlayLayoutProps) => {
    const {children, setIsHovered, setChecked, commentItems, isHovered} = props;
    const commentsState = useSelector((state: ReduxState) => state.comments);
    const dispatch = useDispatch();

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleCommentsMainCheckboxChange(setChecked, commentItems, commentsState, dispatch)}
            className={`absolute -ml-1 py-2.5 rounded-md px-1  cursor-pointer 
            ${isHovered && "bg-neutral-200"}`}>
            {children}
        </div>
    )
}

export default CommentsSelectButtonOverlayLayout;