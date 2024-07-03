import ProductCardLayout from "./ProductCardLayout";
import {ProductData} from "@/types/ProductData";
import Image from "next/image";
import ProductCardInfo from "../ProductCardInfo/ProductCardInfo";

type ProductCardProps = ProductData;

const ProductCard = (props: ProductCardProps) => {
    const {images, name} = props;

    return (
        <ProductCardLayout {...props}>
            <Image
                priority
                className="w-full h-48 object-center object-cover rounded-t-md"
                src={images[0]}
                alt={name}
                layout="responsive"
                width={400}
                height={200}
            />
            <ProductCardInfo {...props}/>
        </ProductCardLayout>
    );
}

export default ProductCard;
