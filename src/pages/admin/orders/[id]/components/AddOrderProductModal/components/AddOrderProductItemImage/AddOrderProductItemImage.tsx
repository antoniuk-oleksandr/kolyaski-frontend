import AddOrderProductItemImageLayout from "./AddOrderProductItemImageLayout";
import Image from "next/image";

type AddOrderProductItemImageProps = {
    src: string,
}

const AddOrderProductItemImage = (props: AddOrderProductItemImageProps) => {
    const {src} = props;

    return (
        <AddOrderProductItemImageLayout>
            <Image
                className={"size-full object-contain object-center"}
                priority
                src={src}
                alt={"img"}
                width={80}
                height={80}
            />
        </AddOrderProductItemImageLayout>
    )
}

export default AddOrderProductItemImage;