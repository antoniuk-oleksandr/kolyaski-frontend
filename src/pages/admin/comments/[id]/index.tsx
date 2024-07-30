import {useDispatch, useSelector} from "react-redux";
import AdminElementLayout from "@/pages/admin/components/AdminElementLayout";
import {ReduxState} from "@/types/ReduxState";
import CommentBody from "@/pages/admin/comments/[id]/components/CommentBody/CommentBody";
import {useCommentById} from "@/pages/admin/use-effects/use-comment-by-id";
import AdminLoader from "@/pages/admin/components/AdminLoader";
import CommentsSearchbar from "@/pages/admin/comments/components/CommentsSearchbar/CommentsSearchbar";

const AdminPanelComments = () => {
    const {tokenInfo} = useSelector((state: ReduxState) => state.token);
    const {page, value} = useSelector((state: ReduxState) => state.comments);
    const dispatch = useDispatch();
    const {comment} = useCommentById(tokenInfo, dispatch);

    if(!comment || !page || value === null) return <AdminLoader/>;
    return (
        <AdminElementLayout>
            <CommentsSearchbar/>
            <CommentBody {...comment}/>
        </AdminElementLayout>
    )
}

export default AdminPanelComments;