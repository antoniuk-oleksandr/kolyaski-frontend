import CatalogProductsDataLayout from "./CatalogProductsDataLayout";
import ProductsTopLine from "@/pages/catalog/components/ProductsTopLine/ProductsTopLine";
import ProductCardGrid from "@/pages/catalog/components/ProductCardGrid/ProductCardGrid";
import CatalogPagination from "@/pages/catalog/components/CatalogPagination/CatalogPagination";
import {SearchParams} from "@/types/SearchParams";
import {CatalogData} from "@/types/CatalogData";
import NoProductsFoundMessage from "@/pages/catalog/components/NoProductsFoundMessage";

type CatalogProductsDataProps = {
    searchParams: SearchParams,
    catalogData: CatalogData | null,
}

const CatalogProductsData = (props: CatalogProductsDataProps) => {
    const {catalogData} = props;

    if(catalogData && catalogData.products.length === 0) return <NoProductsFoundMessage/>
    return (
        <CatalogProductsDataLayout isShown={catalogData && catalogData.products.length > 0}>
            <ProductsTopLine {...props}/>
            <ProductCardGrid {...props}/>
            <CatalogPagination {...props}/>
        </CatalogProductsDataLayout>
    )
}

export default CatalogProductsData;