import ProductCard from "../ProductCard/ProductCard";
import ProductCardGridLayout from "./ProductCardGridLayout";
import {CatalogData} from "@/types/CatalogData";
import {CatalogSlice} from "@/types/CatalogSlice";

type ProductCardGridProps = {
    catalogSlice: CatalogSlice,
}

const ProductCardGrid = (props: ProductCardGridProps) => {
    const {catalogSlice} = props;
    const {products} = catalogSlice;

    if(!products) return null;
    return (
        <ProductCardGridLayout>
            {products.map((element, index) => (
                <ProductCard {...element} key={index}/>
            ))}
        </ProductCardGridLayout>
    )
}

export default ProductCardGrid;