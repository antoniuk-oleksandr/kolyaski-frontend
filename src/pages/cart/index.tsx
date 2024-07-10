import {NextPage} from "next";
import CartLeftSide from "@/pages/cart/components/CartLeftSide/CartLeftSide";
import CartRightSide from "@/pages/cart/components/CartRightSide/CartRightSide";
import PageContentLayout from "@/common-components/PageContentLayout";
import {useSelector} from "react-redux";
import {CartState} from "@/types/CartState";
import NoCartItemsMessage from "@/pages/cart/components/NoCartItemsMessage";

const CartPage: NextPage = () => {
    const {cart} = useSelector((state: any) => state) as { cart: CartState };

    if (cart.products.length === 0) return <NoCartItemsMessage/>
    return (
        <PageContentLayout>
            <CartLeftSide cart={cart}/>
            <CartRightSide cart={cart}/>
        </PageContentLayout>
    )
}

export default CartPage;