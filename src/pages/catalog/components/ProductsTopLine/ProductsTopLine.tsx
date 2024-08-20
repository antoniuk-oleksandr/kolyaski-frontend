import ProductsTopLineLayout from "./ProductsTopLineLayout";
import {SortEnum} from "@/types/SortEnum";
import {Select} from "@mantine/core";
import {SearchParams} from "@/types/SearchParams";
import {useRouter} from "next/router";
import {handleProductSortTypeChange} from "../../handlers";
import ProductShownBlock from "../ProductShownBlock/ProductShownBlock";
import {CatalogData} from "@/types/CatalogData";
import {CatalogSlice} from "@/types/CatalogSlice";
import { useDispatch } from "react-redux";

type ProductsTopLineProps = {
    catalogSlice: CatalogSlice,
}

const ProductsTopLine = (props: ProductsTopLineProps) => {
    const {catalogSlice} = props;
    const {sortType} = catalogSlice;
    const router = useRouter();

    return (
        <ProductsTopLineLayout>
            <ProductShownBlock {...props}/>
            <Select
                size={"sm"}
                radius={6}
                value={sortType}
                onChange={(value) =>
                    handleProductSortTypeChange(value as SortEnum, catalogSlice, router)
                }
                allowDeselect={false}
                data={Object.values(SortEnum)}
            />
        </ProductsTopLineLayout>
    )
}

export default ProductsTopLine;