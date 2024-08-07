import {useAllComments} from "@/pages/admin/use-effects/use-all-comments";
import {useDispatch, useSelector} from "react-redux";
import {TokenInfo} from "@/types/TokenInfo";
import AdminLoader from "@/pages/admin/components/AdminLoader";
import CommentsBlock from "@/pages/admin/comments/components/CommentsBlock/CommentsBlock";
import AdminElementLayout from "@/pages/admin/components/AdminElementLayout";
import {useRouter} from "next/router";
import AdminSearchbar from "@/pages/admin/comments/components/CommentsSearchbar/AdminSearchbar";
import NoCommentsFound from "@/pages/admin/comments/components/NoCommentsFound";
import {ReduxState} from "@/types/ReduxState";
import {commentsSearchSubmitAction} from "@/pages/admin/helpers";

const AdminPanelComments = () => {
    const {tokenInfo} = useSelector((state: any) => state.token) as { tokenInfo: TokenInfo };
    const dispatch = useDispatch();
    const router = useRouter();
    const {unreadComments, readComments, page, value} =
        useSelector((state: ReduxState) => state.comments);
    useAllComments(tokenInfo, dispatch, router, page, value);

    if (!unreadComments || !readComments || !page || value === null) return <AdminLoader/>
    const numberOfComments = unreadComments.length + readComments.length;
    return (
        <AdminElementLayout>
            <AdminSearchbar
                value={value}
                page={page}
                submitAction={commentsSearchSubmitAction}
            />
            {numberOfComments === 0
                ? <NoCommentsFound/>
                : <CommentsBlock/>
            }
        </AdminElementLayout>
    )
}

export default AdminPanelComments;