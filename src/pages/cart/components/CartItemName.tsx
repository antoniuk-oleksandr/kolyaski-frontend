import {useRouter} from "next/router";

type CartItemNameProps = {
    id: number,
    name: string,
}

const CartItemName = (props: CartItemNameProps) => {
    const {id, name} = props;
    const router = useRouter();

    return (
        <p
            onClick={() => router.push(`/product/${id}`)}
            className={"line-clamp-2 phone:col-start-2 phone:row-start-1 text-pretty hover:text-primary cursor-pointer"}
        >{name}</p>
    )
}

export default CartItemName;