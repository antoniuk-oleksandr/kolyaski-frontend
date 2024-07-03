import PageContentLayout from "@/common-components/PageContentLayout";
import { useProducts } from "./use-products";
import ProductsLeftSide from "./components/ProductsLeftSide/ProductsLeftSide";
import ProductsRightSide from "./components/ProductsRightSide/ProductsRightSide";

const ProductsPage = () => {
    const {searchParams} = useProducts();

    if (!searchParams) return;
    return (
        <PageContentLayout>
            <ProductsLeftSide searchParams={searchParams}/>
            <ProductsRightSide searchParams={searchParams}/>
        </PageContentLayout>
    )
}

export default ProductsPage;