import HomePopularProductImageLayout from "./HomePopularProductImageLayout";
import Image from "next/image";

type HomePopularProductImageProps = {
    src: string,
}

const HomePopularProductImage = (props: HomePopularProductImageProps) => {
    const {src} = props;

    return (
        <HomePopularProductImageLayout>
            <Image
                priority
                alt={"img"}
                className={"w-full object-center object-contain"}
                src={src}
                width={300}
                height={300}
            />
        </HomePopularProductImageLayout>
    )
}

export default HomePopularProductImage;