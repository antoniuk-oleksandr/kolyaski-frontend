import ProductCardLayout from "./ProductCardLayout";
import {ProductData} from "@/types/ProductData";
import Image from "next/image";
import ProductCardInfo from "@/pages/products/components/ProductCardInfo/ProductCardInfo";

type ProductCardProps = ProductData;

const ProductCard = (props: ProductCardProps) => {
    const {image, title} = props;

    return (
        <ProductCardLayout {...props}>
            <Image
                className="w-full h-48 object-center object-cover rounded-t-md"
                src={image}
                alt={title}
                layout="responsive"
                width={400}
                height={200}
            />
            <ProductCardInfo {...props}/>
        </ProductCardLayout>
    );
}

export default ProductCard;
