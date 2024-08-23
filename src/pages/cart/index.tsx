import {NextPage} from "next";
import CartLeftSide from "@/pages/cart/components/CartLeftSide/CartLeftSide";
import CartRightSide from "@/pages/cart/components/CartRightSide/CartRightSide";
import PageContentLayout from "@/common-components/PageContentLayout";
import {useSelector} from "react-redux";
import NoCartItemsMessage from "@/pages/cart/components/NoCartItemsMessage";
import {ReduxState} from "@/types/ReduxState";
import {useHeaderCartItems} from "@/common-components/Header/use-effects/use-header-cart-items";

const CartPage: NextPage = () => {
    const cartState = useSelector((state: ReduxState) => state.cart);
    const {cartItems} = useHeaderCartItems(cartState);

    if(!cartItems) return null;
    if (cartItems.length === 0) return <NoCartItemsMessage/>
    return (
        <PageContentLayout>
            <CartLeftSide cartItems={cartItems}/>
            <CartRightSide cartItems={cartItems}/>
        </PageContentLayout>
    )
}

export default CartPage;