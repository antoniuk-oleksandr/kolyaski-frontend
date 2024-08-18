import AdminPageLayout from "@/pages/admin/AdminPageLayout";
import AdminElementLayout from "@/pages/admin/components/AdminElementLayout";
import AdminSearchbar from "@/pages/admin/comments/components/CommentsSearchbar/AdminSearchbar";
import {productsSearchSubmitAction} from "@/pages/admin/helpers";
import NewProductBlock from "@/pages/admin/products/new/components/NewProductBlock/NewProductBlock";
import NewProductFileSelectButton from "@/pages/admin/products/new/components/NewProductFileSelectButton";
import NewProductTopLine from "@/pages/admin/products/new/components/NewProductTopLIne/NewProductTopLine";
import {useEffect} from "react";
import {getAdminProductByIdPageParams} from "@/pages/admin/products/[id]/helpers";
import {useNewProduct} from "@/pages/admin/use-effects/use-new-product";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import AdminLoader from "../../components/AdminLoader";
import NewProductModal from "@/pages/admin/products/new/components/NewProductModal/NewProductModal";

const NewProductPage = () => {
    const state = useSelector((state: ReduxState) => state.adminProductsState);
    const {page, value, sortType} = state;
    const dispatch = useDispatch();
    useNewProduct(dispatch);

    if (sortType === null || value === null || !page) return <AdminLoader/>;
    return (
        <AdminPageLayout>
            <AdminElementLayout>
                <NewProductTopLine value={value} page={page}/>
                <NewProductBlock adminProductsState={state}/>
            </AdminElementLayout>
        </AdminPageLayout>
    )
}

export default NewProductPage;