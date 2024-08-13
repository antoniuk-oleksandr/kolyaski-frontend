import AdminProductListLayout from "./AdminProductListLayout";
import AdminProductsListElement
    from "@/pages/admin/products/components/AdminProductsListElement/AdminProductsListElement";
import {ProductData} from "@/types/ProductData";
import {useViewportSize} from "@mantine/hooks";
import AdminMobileProductListElement
    from "@/pages/admin/products/components/AdminMobileProductListElement/AdminMobileProductListElement";
import {Fragment} from "react";
import {AdminProductsState} from "@/types/AdminProductsState";

type AdminProductListProps = {
    products: ProductData[],
    adminProductsState: AdminProductsState,
}

const AdminProductList = (props: AdminProductListProps) => {
    const {products} = props;
    const {width} = useViewportSize();
    const isMobile = width < 960;

    return (
        <AdminProductListLayout>
            {products.map((product, index) => (
                <Fragment key={index}>
                    {isMobile
                        ? <AdminMobileProductListElement item={product}/>
                        : <AdminProductsListElement
                            {...props}
                            last={index === products.length - 1}
                            item={product}
                        />
                    }
                </Fragment>
            ))}
        </AdminProductListLayout>
    )
}

export default AdminProductList;