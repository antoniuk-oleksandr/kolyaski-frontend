import CommentElementCheckboxLayout from "./CommentElementCheckboxLayout";
import {getCommentCheckboxStyles} from "@/pages/admin/comments/components/comment-checkbox-styles";
import {handleCommentCheckboxChange} from "@/pages/admin/comments/handlers";
import {Checkbox} from "@mantine/core";
import {useState} from "react";
import CommentElementCheckboxOverlay
    from "@/pages/admin/comments/components/CommentElementCheckboxOverlay/CommentElementCheckboxOverlay";
import {CommentType} from "@/types/CommentType";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";

type CommentElementCheckboxProps = {
    id: number,
    commentType: CommentType,
    isSelected: boolean,
}

const CommentElementCheckbox = (props: CommentElementCheckboxProps) => {
    const {isSelected, id, commentType} = props;
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();
    const commentsState = useSelector((state: ReduxState) => state.comments);

    return (
        <CommentElementCheckboxLayout>
            <Checkbox
                className={`duration-200 ease-out hover:ring-[8px] ring-neutral-200 hover:bg-neutral-200 rounded-full 
                ${isSelected ? 'hover:bg-opacity-30 ring-opacity-30' : ''}`}
                onChange={() => null}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                variant="outline"
                styles={getCommentCheckboxStyles(isSelected)}
                checked={isSelected}
                onClick={() => handleCommentCheckboxChange(id, dispatch, commentType, commentsState)}
            />
        </CommentElementCheckboxLayout>
    )
}

export default CommentElementCheckbox;