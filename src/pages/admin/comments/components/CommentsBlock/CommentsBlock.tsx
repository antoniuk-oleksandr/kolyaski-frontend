import CommentsBlockLayout from "./CommentsBlockLayout";
import CommentList from "@/pages/admin/comments/components/CommentList/CommentList";
import {Comment} from "@/types/Comment";
import {Accordion} from "@mantine/core";
import CommentsBlockButtons from "@/pages/admin/comments/components/CommentsBlockButtons/CommentsBlockButtons";
import {getCommentItems} from "@/pages/admin/comments/components/comment-items";
import {useEffect, useState} from "react";
import {useCommentCheckboxes} from "@/pages/admin/use-effects/use-comment-checkboxes";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";

const CommentsBlock = () => {
    const commentsState = useSelector((state: ReduxState) => state.comments);
    const commentItems = getCommentItems(commentsState);
    const [checked, setChecked] = useState(false);
    const {indeterminate} = useCommentCheckboxes(commentsState, setChecked);

    return (
        <CommentsBlockLayout>
            <CommentsBlockButtons
                checked={checked}
                setChecked={setChecked}
                indeterminate={indeterminate}
                commentItems={commentItems}
            />
            <Accordion
                defaultValue={commentItems.map((item) => item.title)}
                multiple={true}
                chevronPosition="left"
            >
                {commentItems.map((item) => (
                    <Accordion.Item key={item.title} value={item.title}>
                        <Accordion.Control className={"select-none"}>{item.title}</Accordion.Control>
                        <Accordion.Panel>
                            <CommentList {...item}/>
                        </Accordion.Panel>
                    </Accordion.Item>
                ))}
            </Accordion>
        </CommentsBlockLayout>
    )
}

export default CommentsBlock;