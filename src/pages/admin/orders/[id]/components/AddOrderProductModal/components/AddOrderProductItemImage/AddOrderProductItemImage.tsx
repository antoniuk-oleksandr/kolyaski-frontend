import AddOrderProductItemImageLayout from "./AddOrderProductItemImageLayout";
import Image from "next/image";

type AddOrderProductItemImageProps = {
    src: string,
    size?: string,
}

const AddOrderProductItemImage = (props: AddOrderProductItemImageProps) => {
    const {src, size} = props;
    const sizeNumber = size === undefined ? 80 : Number.parseInt(size.slice(5))  * 4;

    return (
        <AddOrderProductItemImageLayout {...props}>
            <Image
                className={"size-full object-contain object-center"}
                priority
                src={src}
                alt={"img"}
                width={sizeNumber}
                height={sizeNumber}
            />
        </AddOrderProductItemImageLayout>
    )
}

export default AddOrderProductItemImage;