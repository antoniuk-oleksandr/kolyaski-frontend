import HomeRightSideProductImageLayout from "./HomeRightSideProductImageLayout";
import Image from "next/image";
import {RestrictedProduct} from "@/types/RestrictedProduct";

type HomeRightSideProductImageProps = RestrictedProduct;

const HomeRightSideProductImage = (props: HomeRightSideProductImageProps) => {
    const {image} = props;

    return (
        <HomeRightSideProductImageLayout>
            <Image
                alt={"img"}
                src={image}
                priority
                width={60}
                height={60}
                className={"size-full object-contain object-center"}
            />
        </HomeRightSideProductImageLayout>
    )
}

export default HomeRightSideProductImage;