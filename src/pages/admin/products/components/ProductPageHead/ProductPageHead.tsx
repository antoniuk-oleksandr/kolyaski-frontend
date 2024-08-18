import ProductPageHeadLayout from "./ProductPageHeadLayout";
import AdminSearchbar from "@/pages/admin/comments/components/CommentsSearchbar/AdminSearchbar";
import {productsSearchSubmitAction} from "@/pages/admin/helpers";
import Button from "@/common-components/Button";
import AdminProductPageHeadButton from "@/pages/admin/products/components/AdminProductPageHeadButton";
import {AdminProductsState} from "@/types/AdminProductsState";

type ProductPageHeadProps = {
    state: AdminProductsState,
}

const ProductPageHead = (props: ProductPageHeadProps) => {
    const {state} = props;
    const {value, page, type, sortType} = state;

    if (page === null || type === null || sortType === null || value === null) return null;
    return (
        <ProductPageHeadLayout>
            <AdminSearchbar
                value={value}
                page={page}
                type={type}
                sortType={sortType}
                submitAction={productsSearchSubmitAction}
            />
            <AdminProductPageHeadButton {...props}/>
        </ProductPageHeadLayout>
    )
}

export default ProductPageHead;