import ProductsRightSideLayout from "./ProductsRightSideLayout";
import Breadcrumbs from "@/common-components/Breadcrumbs/Breadcrumbs";
import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import {SearchParams} from "@/types/SearchParams";
import ProductsTitle from "../ProductsTitle";
import ProductsTopLine from "../ProductsTopLine/ProductsTopLine";
import { getProductsBreadcrumbsItems } from "../../helpers";
import ProductCardGrid from "../ProductCardGrid/ProductCardGrid";

type ProductsRightSideProps = {
    searchParams: SearchParams,
}

const ProductsRightSide = (props: ProductsRightSideProps) => {
    const {searchParams} = props;

    const breadcrumbsItems: BreadcrumbsItemType[] = [
        {name: 'Головна', link: '/'},
        {name: 'Магазин', link: '/catalog'},
        ...getProductsBreadcrumbsItems(searchParams)
    ]

    return (
        <ProductsRightSideLayout>
            <Breadcrumbs items={breadcrumbsItems}/>
            <ProductsTitle {...props}/>
            <ProductsTopLine {...props}/>
            <ProductCardGrid/>
        </ProductsRightSideLayout>
    )
}

export default ProductsRightSide;