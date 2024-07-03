import ProductCard from "../ProductCard/ProductCard";
import ProductCardGridLayout from "./ProductCardGridLayout";
import {ProductData} from "@/types/ProductData";

const ProductCardGrid = () => {
    const cardData: ProductData = {
        id: 1,
        images: ["/images/card-image.jpg"],
        name: "Прогулянкова коляска CARRELLO Forte CRL-8502 Frost Beige",
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