import ProductsRightSideLayout from "./ProductsRightSideLayout";
import Breadcrumbs from "@/common-components/Breadcrumbs/Breadcrumbs";
import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import {SearchParams} from "@/types/SearchParams";
import ProductsTitle from "../ProductsTitle";
import ProductsTopLine from "../ProductsTopLine/ProductsTopLine";
import {getProductsBreadcrumbsItems} from "../../helpers";
import ProductCardGrid from "../ProductCardGrid/ProductCardGrid";
import CatalogPagination from "@/pages/catalog/components/CatalogPagination/CatalogPagination";
import {CatalogData} from "@/types/CatalogData";
import CatalogProductsData from "@/pages/catalog/components/CatalogProductsData/CatalogProductsData";

type ProductsRightSideProps = {
    searchParams: SearchParams,
    catalogData: CatalogData | null,
}

const ProductsRightSide = (props: ProductsRightSideProps) => {
    const {searchParams} = props;

    const breadcrumbsItems: BreadcrumbsItemType[] = [
        {name: 'Головна', link: '/'},
        {name: 'Магазин', link: '/catalog?page=1'},
        ...getProductsBreadcrumbsItems(searchParams)
    ]

    return (
        <ProductsRightSideLayout>
            <Breadcrumbs items={breadcrumbsItems}/>
            <ProductsTitle {...props}/>
            <CatalogProductsData {...props}/>
        </ProductsRightSideLayout>
    )
}

export default ProductsRightSide;