import ProductsRightSideLayout from "./ProductsRightSideLayout";
import Breadcrumbs from "@/common-components/Breadcrumbs/Breadcrumbs";
import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import ProductsTitle from "../ProductsTitle";
import {getProductsBreadcrumbsItems} from "../../helpers";
import CatalogProductsData from "@/pages/catalog/components/CatalogProductsData/CatalogProductsData";
import {CatalogSlice} from "@/types/CatalogSlice";

type ProductsRightSideProps = {
    catalogSlice: CatalogSlice,
}

const ProductsRightSide = (props: ProductsRightSideProps) => {
    const {catalogSlice} = props;

    const breadcrumbsItems: BreadcrumbsItemType[] = [
        {name: 'Головна', link: '/'},
        {name: 'Магазин', link: '/catalog?page=1'},
        ...getProductsBreadcrumbsItems(catalogSlice)
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