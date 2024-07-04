import PageContentLayout from "@/common-components/PageContentLayout";
import { useCatalog } from "./use-catalog";
import ProductsLeftSide from "./components/ProductsLeftSide/ProductsLeftSide";
import ProductsRightSide from "./components/ProductsRightSide/ProductsRightSide";

const ProductsPage = () => {
    const {searchParams} = useCatalog();

    if (!searchParams) return;
    return (
        <>
            <PageContentLayout>
                <ProductsLeftSide searchParams={searchParams}/>
                <ProductsRightSide searchParams={searchParams}/>
            </PageContentLayout>
        </>
    )
}

export default ProductsPage;