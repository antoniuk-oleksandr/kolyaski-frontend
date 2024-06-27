import ProductCardGridLayout from "./ProductCardGridLayout";
import {ProductData} from "@/types/ProductData";
import ProductCard from "@/pages/products/components/ProductCard/ProductCard";

const ProductCardGrid = () => {
    const cardData: ProductData = {
        id: 1,
        image: "/images/card-image.jpg",
        title: "Прогулянкова коляска CARRELLO Forte CRL-8502 Frost Beige",
        price: 4200,
    }

    const arrOfCards = Array.from({length: 30}, (_) => cardData);

    return (
        <ProductCardGridLayout>
            {arrOfCards.map((card, index) => (
                <ProductCard {...card} key={index}/>
            ))}
        </ProductCardGridLayout>
    )
}

export default ProductCardGrid;