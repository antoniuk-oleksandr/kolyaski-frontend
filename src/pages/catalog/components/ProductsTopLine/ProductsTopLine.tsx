import ProductsTopLineLayout from "./ProductsTopLineLayout";
import {SortEnum} from "@/types/SortEnum";
import {Select} from "@mantine/core";
import {SearchParams} from "@/types/SearchParams";
import {useRouter} from "next/router";
import {handleProductSortTypeChange} from "../../handlers";
import ProductShownBlock from "../ProductShownBlock/ProductShownBlock";
import {CatalogData} from "@/types/CatalogData";

type ProductsTopLineProps = {
    searchParams: SearchParams,
    catalogData: CatalogData | null,
}

const ProductsTopLine = (props: ProductsTopLineProps) => {
    const {searchParams, catalogData} = props;
    const {sortType, page} = searchParams;
    const router = useRouter();

    if(!catalogData) return null;
    return (
        <ProductsTopLineLayout>
            <ProductShownBlock page={page} {...props}/>
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