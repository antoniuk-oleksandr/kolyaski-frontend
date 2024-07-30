import {useComments} from "@/pages/admin/use-effects/use-comments";
import {useDispatch, useSelector} from "react-redux";
import {TokenInfo} from "@/types/TokenInfo";
import AdminLoader from "@/pages/admin/components/AdminLoader";
import CommentsBlock from "@/pages/admin/comments/components/CommentsBlock/CommentsBlock";
import AdminElementLayout from "@/pages/admin/components/AdminElementLayout";
import {useRouter} from "next/router";
import CommentsSearchbar from "@/pages/admin/comments/components/CommentsSearchbar/CommentsSearchbar";
import NoCommentsFound from "@/pages/admin/comments/components/NoCommentsFound";
import {ReduxState} from "@/types/ReduxState";

const AdminPanelComments = () => {
    const {tokenInfo} = useSelector((state: any) => state.token) as { tokenInfo: TokenInfo };
    const dispatch = useDispatch();
    const router = useRouter();
    const {unreadComments, readComments, page, value} =
        useSelector((state: ReduxState) => state.comments);
    useComments(tokenInfo, dispatch, router, page, value);

    if (!unreadComments || !readComments || !page || value === null) return <AdminLoader/>
    const numberOfComments = unreadComments.length + readComments.length;
    return (
        <AdminElementLayout>
            <CommentsSearchbar/>
            {numberOfComments === 0
                ? <NoCommentsFound/>
                : <CommentsBlock/>
            }
        </AdminElementLayout>
    )
}

export default AdminPanelComments;