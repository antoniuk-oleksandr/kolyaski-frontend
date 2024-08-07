import CartLeftSideLayout from "./CartLeftSideLayout";
import {useSelector} from "react-redux";
import CartItemElement from "@/pages/cart/components/CartItemElement/CartItemElement";
import {Key} from "react";
import {CartState} from "@/types/CartState";
import PageTitle from "@/common-components/PageTitle";
import {CartItem} from "@/types/CartItem";

type CartLeftSideProps = {
    products: CartItem[],
}

const CartLeftSide = (props: CartLeftSideProps) => {
    const {products} = props;

    return (
        <CartLeftSideLayout>
            <PageTitle text={'Товари в кошику'}/>
            <div className={"flex flex-col gap-y-3"}>
                {products.map((product, index: number) => (
                    <CartItemElement
                        {...product}
                        bottomBorderShown={index !== products.length - 1}
                        key={index}
                    />
                ))}
            </div>
        </CartLeftSideLayout>
    )
}

export default CartLeftSide;