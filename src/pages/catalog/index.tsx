import PageContentLayout from "@/common-components/PageContentLayout";
import { useSearchParams } from "./use-search-params";
import ProductsLeftSide from "./components/ProductsLeftSide/ProductsLeftSide";
import ProductsRightSide from "./components/ProductsRightSide/ProductsRightSide";
import {useCatalogProducts} from "@/pages/catalog/use-catalog-products";

const ProductsPage = () => {
    const {searchParams} = useSearchParams();
    const {catalogData} = useCatalogProducts(searchParams);

    if (!searchParams) return;
    return (
        <>
            <PageContentLayout>
                <ProductsLeftSide searchParams={searchParams}/>
                <ProductsRightSide catalogData={catalogData} searchParams={searchParams}/>
            </PageContentLayout>
        </>
    )
}

export default ProductsPage;