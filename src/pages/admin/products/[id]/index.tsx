import {useAdminProductById} from "@/pages/admin/use-effects/use-admin-product-by-id";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {ReduxState} from "@/types/ReduxState";
import AdminLoader from "@/pages/admin/components/AdminLoader";
import AdminSearchbar from "@/pages/admin/comments/components/CommentsSearchbar/AdminSearchbar";
import {productsSearchSubmitAction} from "@/pages/admin/helpers";
import AdminElementLayout from "@/pages/admin/components/AdminElementLayout";
import EditProductBlock from "@/pages/admin/products/[id]/components/EditProductBlock/EditProductBlock";
import EditProductImagesBlock
    from "@/pages/admin/products/[id]/components/EditProductImagesBlock/EditProductImagesBlock";

const ProductByIdPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const {tokenInfo} = useSelector((state: ReduxState) => state.token);
    useAdminProductById(dispatch, router, tokenInfo);
    const adminProductsState = useSelector((state: ReduxState) => state.adminProductsState);
    const {value, page, productById, sortType} = adminProductsState;

    if (page === null || productById === null || sortType === null || value === null) return <AdminLoader/>;
    return (
        <AdminElementLayout>
            <AdminSearchbar value={value} page={page} submitAction={productsSearchSubmitAction}/>
            <EditProductBlock adminProductsState={adminProductsState}/>
        </AdminElementLayout>
    )
}

export default ProductByIdPage;