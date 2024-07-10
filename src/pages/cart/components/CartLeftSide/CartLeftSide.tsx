import CartLeftSideLayout from "./CartLeftSideLayout";
import {useSelector} from "react-redux";
import CartItemElement from "@/pages/cart/components/CartItemElement/CartItemElement";
import {Key} from "react";
import {CartState} from "@/types/CartState";
import PageTitle from "@/common-components/PageTitle";

type CartLeftSideProps = {
    cart: CartState,
}

const CartLeftSide = (props: CartLeftSideProps) => {
    const {cart} = props;

    return (
        <CartLeftSideLayout>
            <PageTitle text={'Товари в кошику'}/>
            <div className={"flex flex-col gap-y-3"}>
                {cart.products.map((product, index: number) => (
                    <CartItemElement
                        {...product}
                        bottomBorderShown={index !== cart.products.length - 1}
                        key={index}
                    />
                ))}
            </div>
        </CartLeftSideLayout>
    )
}

export default CartLeftSide;