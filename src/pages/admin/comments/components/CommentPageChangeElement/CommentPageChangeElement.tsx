import CommentPageChangeElementLayout from "./CommentPageChangeElementLayout";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import CommentPageChangeArrow from "@/pages/admin/comments/components/CommentPageChangeArrow";

const CommentPageChangeElement = () => {
    const {commentsOnPageCount, totalCommentsCount, page} = useSelector((state: ReduxState) => state.comments);
    if (!page || !totalCommentsCount || !commentsOnPageCount) return;
    const onePageItems = 50;
    const first = (page - 1) * onePageItems + 1;

    return (
        <CommentPageChangeElementLayout>
            <span>{first}-{onePageItems * (page - 1) + commentsOnPageCount} з {totalCommentsCount}</span>
            <CommentPageChangeArrow onePageItems={onePageItems} left={true}/>
            <CommentPageChangeArrow onePageItems={onePageItems} left={false}/>
        </CommentPageChangeElementLayout>
    )
}

export default CommentPageChangeElement;