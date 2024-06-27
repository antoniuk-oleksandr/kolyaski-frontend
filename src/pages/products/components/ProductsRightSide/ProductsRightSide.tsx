import ProductsRightSideLayout from "./ProductsRightSideLayout";
import Breadcrumbs from "@/common-components/Breadcrumbs/Breadcrumbs";
import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import {SearchParams} from "@/types/SearchParams";
import {getProductsBreadcrumbsItems} from "@/pages/products/helpers";
import ProductsTitle from "@/pages/products/components/ProductsTitle";
import ProductsTopLine from "@/pages/products/components/ProductsTopLine/ProductsTopLine";
import ProductCardGrid from "@/pages/products/components/ProductCardGrid/ProductCardGrid";

type ProductsRightSideProps = {
    searchParams: SearchParams,
}

const ProductsRightSide = (props: ProductsRightSideProps) => {
    const {searchParams} = props;

    const breadcrumbsItems: BreadcrumbsItemType[] = [
        {name: 'Головна', link: '/'},
        {name: 'Магазин', link: '/products'},
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