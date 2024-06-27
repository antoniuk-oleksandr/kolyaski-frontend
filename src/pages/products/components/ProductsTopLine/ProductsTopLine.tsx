import ProductsTopLineLayout from "./ProductsTopLineLayout";
import {SortEnum} from "@/types/SortEnum";
import {Select} from "@mantine/core";
import {SearchParams} from "@/types/SearchParams";
import {handleProductSortTypeChange} from "@/pages/products/handlers";
import {useRouter} from "next/router";
import ProductShownBlock from "@/pages/products/components/ProductShownBlock/ProductShownBlock";

type ProductsTopLineProps = {
    searchParams: SearchParams,
}

const ProductsTopLine = (props: ProductsTopLineProps) => {
    const {searchParams} = props;
    const {sortType} = searchParams;
    const router = useRouter();

    return (
        <ProductsTopLineLayout>
            <ProductShownBlock/>
            <Select
                size={"sm"}
                radius={6}
                value={sortType}
                onChange={(value) =>
                    handleProductSortTypeChange(value as SortEnum, router, searchParams)
                }
                allowDeselect={false}
                data={Object.values(SortEnum)}
            />
        </ProductsTopLineLayout>
    )
}

export default ProductsTopLine;