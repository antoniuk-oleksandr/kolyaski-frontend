import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";
import {handleCommentsMainCheckboxChange} from "@/pages/admin/comments/handlers";
import {CommentItemType} from "@/types/CommentItemType";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";

type CommentsSelectMenuCheckboxLayoutProps = LayoutProps & {
    setChecked: Dispatch<SetStateAction<boolean>>,
    commentItems: CommentItemType[],
}

const CommentsSelectMenuCheckboxLayout = (props: CommentsSelectMenuCheckboxLayoutProps) => {
    const {children, setChecked, commentItems} = props;
    const commentsState = useSelector((state: ReduxState) => state.comments);
    const dispatch = useDispatch();

    return (
        <div
            className={"cursor-pointer z-10"}
            onClick={() => handleCommentsMainCheckboxChange(setChecked, commentItems, commentsState, dispatch)}
        >
            {children}
        </div>
    )
}

export default CommentsSelectMenuCheckboxLayout;