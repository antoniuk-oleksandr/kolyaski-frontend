import CartHoverMenuItemImageLayout from "./CartHoverMenuItemImageLayout";
import Image from "next/image";

type CartHoverMenuItemImageProps = {
    image: string,
}

const CartHoverMenuItemImage = (props: CartHoverMenuItemImageProps) => {
    const {image} = props;

    return (
        <CartHoverMenuItemImageLayout>
            <Image
                className={"size-16 object-center object-contain"}
                priority
                width={64}
                height={64}
                src={image}
                alt={"img"}
            />
        </CartHoverMenuItemImageLayout>
    )
}

export default CartHoverMenuItemImage;