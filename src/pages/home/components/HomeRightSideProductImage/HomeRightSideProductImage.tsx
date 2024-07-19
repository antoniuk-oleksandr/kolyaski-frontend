import HomeRightSideProductImageLayout from "./HomeRightSideProductImageLayout";
import Image from "next/image";
import {HomeDataElement} from "@/types/HomeDataElement";

type HomeRightSideProductImageProps = HomeDataElement;

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