import CatalogProductsDataLayout from "./CatalogProductsDataLayout";
import ProductsTopLine from "@/pages/catalog/components/ProductsTopLine/ProductsTopLine";
import ProductCardGrid from "@/pages/catalog/components/ProductCardGrid/ProductCardGrid";
import CatalogPagination from "@/pages/catalog/components/CatalogPagination/CatalogPagination";
import {SearchParams} from "@/types/SearchParams";
import {CatalogData} from "@/types/CatalogData";
import NoProductsFoundMessage from "@/pages/catalog/components/NoProductsFoundMessage";
import {CatalogSlice} from "@/types/CatalogSlice";

type CatalogProductsDataProps = {
    catalogSlice: CatalogSlice,
}

const CatalogProductsData = (props: CatalogProductsDataProps) => {
    const {catalogSlice} = props;

    if(catalogSlice.products && catalogSlice.products.length === 0) return <NoProductsFoundMessage/>
    return (
        <CatalogProductsDataLayout isShown={catalogSlice.products && catalogSlice.products.length > 0}>
            <ProductsTopLine {...props}/>
            <ProductCardGrid {...props}/>
            <CatalogPagination {...props}/>
        </CatalogProductsDataLayout>
    )
}

export default CatalogProductsData;