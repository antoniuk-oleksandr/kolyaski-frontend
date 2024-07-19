import PopularProductTypeImageLayout from "./PopularProductTypeImageLayout";
import Image from "next/image";

type PopularProductTypeImageProps = {
    src: string,
}

const PopularProductTypeImage = (props: PopularProductTypeImageProps) => {
    const {src} = props;

    return (
        <PopularProductTypeImageLayout>
            <Image
                priority
                width={300}
                height={300}
                className={"size-full object-contain object-center"}
                src={src}
                alt={"img"}
            />
        </PopularProductTypeImageLayout>
    )
}

export default PopularProductTypeImage;