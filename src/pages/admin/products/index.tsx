import {useAllAdminProducts} from "@/pages/admin/use-effects/use-all-admin-products";
import {useRouter} from "next/router";
import AdminElementLayout from "@/pages/admin/components/AdminElementLayout";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import AdminLoader from "@/pages/admin/components/AdminLoader";
import AdminProductListHead from "@/pages/admin/products/components/AdminProductListHead/AdminProductListHead";
import ProductPageHead from "@/pages/admin/products/components/ProductPageHead/ProductPageHead";
import AdminProductsNavigationBar
    from "@/pages/admin/products/components/AdminProductsNavigationBar/AdminProductsNavigationBar";
import NoDataFound from "@/pages/admin/comments/components/NoDataFound";
import AdminProductList from "@/pages/admin/products/components/AdminProductList/AdminProductList";

const AdminPanelProducts = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {tokenInfo} = useSelector((state: ReduxState) => state.token);
    const adminProductsState = useSelector((state: ReduxState) => state.adminProductsState);
    useAllAdminProducts(router, dispatch, tokenInfo);
    const {page, value, products, sortType} = adminProductsState;

    if (!page || value === null || products === null || sortType === null) return <AdminLoader/>;
    return (
        <AdminElementLayout>
            <ProductPageHead state={adminProductsState}/>
            <AdminProductsNavigationBar state={adminProductsState}/>
            {products.length === 0 ? <NoDataFound type={"products"}/> : (
                <>
                    <AdminProductListHead/>
                    <AdminProductList
                        adminProductsState={adminProductsState}
                        products={products}
                    />
                </>
            )}
        </AdminElementLayout>
    )
}

export default AdminPanelProducts;