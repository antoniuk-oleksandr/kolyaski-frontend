import {useAdminProducts} from "@/pages/admin/use-effects/use-admin-products";
import {useRouter} from "next/router";
import AdminElementLayout from "@/pages/admin/components/AdminElementLayout";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import AdminLoader from "@/pages/admin/components/AdminLoader";
import {Table} from "@mantine/core";
import ProductsListElement from "@/pages/admin/products/components/ProductsListElement/ProductsListElement";

const AdminPanelProducts = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    useAdminProducts(router, dispatch);
    const {page, value, products} = useSelector((state: ReduxState) => state.adminProductsState);

    if (!page || value === null || products === null) return <AdminLoader/>;
    return (
        <AdminElementLayout>
            {products.map((product, index) => (
                <ProductsListElement key={index} item={product}/>
            ))}
        </AdminElementLayout>
    )
}

export default AdminPanelProducts;