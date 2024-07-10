import CartItemImageLayout from "./CartItemImageLayout";
import Image from "next/image";
import {useRouter} from "next/router";

type CartItemImageProps = {
    image: string,
    id: number,
}

const CartItemImage = (props: CartItemImageProps) => {
    const {image, id} = props;
    const router = useRouter();

    return (
        <CartItemImageLayout>
            <Image
                onClick={() => router.push(`/product/${id}`)}
                className={"object-center object-contain cursor-pointer"}
                src={image}
                alt={'img'}
                width={80}
                height={80}
            />
        </CartItemImageLayout>
    )
}

export default CartItemImage;