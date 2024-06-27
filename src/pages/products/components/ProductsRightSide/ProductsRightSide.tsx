import ProductsRightSideLayout from "./ProductsRightSideLayout";
import Breadcrumbs from "@/common-components/Breadcrumbs/Breadcrumbs";
import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import {SearchParams} from "@/types/SearchParams";
import {getProductsBreadcrumbsItems} from "@/pages/products/helpers";

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
        </ProductsRightSideLayout>
    )
}

export default ProductsRightSide;