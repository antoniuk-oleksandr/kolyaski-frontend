import ProductCardLayout from "./ProductCardLayout";
import {ProductData} from "@/types/ProductData";
import Image from "next/image";
import ProductCardInfo from "../ProductCardInfo/ProductCardInfo";

type ProductCardProps = ProductData;

const ProductCard = (props: ProductCardProps) => {
    const {images, name} = props;

    return (
        <ProductCardLayout {...props}>
            <div className={"aspect-3x4  grid place-items-center p-3"}>
                <Image
                    priority
                    className={"size-full object-center object-contain rounded-t-md"}
                    src={images[0]}
                    alt={name}
                    layout="responsive"
                    width={400}
                    height={200}
                />
            </div>
            <ProductCardInfo {...props}/>
        </ProductCardLayout>
    );
}

export default ProductCard;
