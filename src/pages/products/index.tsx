import {useProducts} from "@/pages/products/use-products";
import PageContentLayout from "@/common-components/PageContentLayout";
import ProductsLeftSide from "@/pages/products/components/ProductsLeftSide/ProductsLeftSide";
import ProductsRightSide from "@/pages/products/components/ProductsRightSide/ProductsRightSide";

const ProductsPage = () => {
    const {searchParams} = useProducts();

    if (!searchParams) return;
    return (
        <PageContentLayout>
            <ProductsLeftSide/>
            <ProductsRightSide searchParams={searchParams}/>
        </PageContentLayout>
    )
}

export default ProductsPage;