import {LayoutProps} from "@/types/LayoutProps";
import {handleCommentCheckboxChange} from "@/pages/admin/comments/handlers";
import {Dispatch, SetStateAction} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {CommentType} from "@/types/CommentType";

type CommentElementCheckboxOverlayLayoutProps = LayoutProps & {
    isHovered: boolean,
    id: number,
    commentType: CommentType,
    setIsHovered: Dispatch<SetStateAction<boolean>>,
    isSelected: boolean,
}

const CommentElementCheckboxOverlayLayout = (props: CommentElementCheckboxOverlayLayoutProps) => {
    const {children, isHovered, id, setIsHovered, commentType, isSelected} = props;
    const commentsState = useSelector((state: ReduxState) => state.comments);
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => handleCommentCheckboxChange(id, dispatch, commentType, commentsState)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`absolute top-0 left-0 -mt-2  duration-200 ease-out -ml-2 p-2 rounded-full ${isHovered ? isSelected ? 'bg-neutral-300 bg-opacity-30' : 'bg-neutral-200' : ''}`}>
            {children}
        </div>
    )
}

export default CommentElementCheckboxOverlayLayout;