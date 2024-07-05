import ProductCard from "../ProductCard/ProductCard";
import ProductCardGridLayout from "./ProductCardGridLayout";
import {CatalogData} from "@/types/CatalogData";

type ProductCardGridProps = {
    catalogData: CatalogData | null,
}

const ProductCardGrid = (props: ProductCardGridProps) => {
    const {catalogData} = props;

    if(!catalogData) return null;
    return (
        <ProductCardGridLayout>
            {catalogData.products.map((element, index) => (
                <ProductCard {...element} key={index}/>
            ))}
        </ProductCardGridLayout>
    )
}

export default ProductCardGrid;