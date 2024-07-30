import CommentElementBodyLayout from "./CommentElementBodyLayout";
import {Comment} from "@/types/Comment";

type CommentElementBodyProps = Comment;

const CommentElementBody = (props: CommentElementBodyProps) => {
    const {name, email, message} = props;

    return (
        <CommentElementBodyLayout>
            <h2 className={"py-5 border-b mb-3 text-2xl"}>{`${name} <${email}>`}</h2>
            <p className={""}>{message}</p>
        </CommentElementBodyLayout>
    )
}

export default CommentElementBody;