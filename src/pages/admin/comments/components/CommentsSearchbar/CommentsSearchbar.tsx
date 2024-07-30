import CommentsSearchbarLayout from "./CommentsSearchbarLayout";
import {useState} from "react";
import CommentSearchElement from "@/pages/admin/comments/components/CommentSearchElement";
import CommentsSearchButton from "@/pages/admin/comments/components/CommentsSearchButton";
import CommentsClearButton from "@/pages/admin/comments/components/CommentsClearButton";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";

const CommentsSearchbar = () => {
    const {page, value} = useSelector((state: ReduxState) => state.comments);
    if (!page || value === null) return null;

    const [inputValue, setInputValue] = useState(value);

    return (
        <CommentsSearchbarLayout inputValue={inputValue}>
            <CommentsSearchButton/>
            <CommentSearchElement inputValue={inputValue} setInputValue={setInputValue}/>
            <CommentsClearButton setInputValue={setInputValue} inputValue={inputValue}/>
        </CommentsSearchbarLayout>
    )
}

export default CommentsSearchbar;