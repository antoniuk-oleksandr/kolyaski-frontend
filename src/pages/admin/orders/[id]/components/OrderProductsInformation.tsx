import OrderComponentLayout from "@/pages/admin/orders/[id]/components/OrderComponentLayout";
import CartItemElement from "@/pages/cart/components/CartItemElement/CartItemElement";
import {OrderType} from "@/types/OrderType";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {useEffect} from "react";
import {useFormContext} from "react-hook-form";
import {useOrdersProducts} from "@/pages/admin/use-effects/use-orders-products";
import AddOrderProductButton from "@/pages/admin/orders/[id]/components/AddOrderProductButton";

const OrderProductsInformation = () => {
    const {products} = useSelector((state: ReduxState) => state.cart);
    const {setValue} = useFormContext();
    useOrdersProducts(setValue, products);

    return (
        <OrderComponentLayout>
            <h2 className="text-lg font-semibold">Продукти</h2>
            <div className={"flex flex-col gap-y-3"}>
                {products.map((product, index: number) => (
                    <CartItemElement
                        {...product}
                        gridCols={'grid-cols-ordersCartElement'}
                        bottomBorderShown={index !== products.length - 1}
                        key={index}
                    />
                ))}
            </div>
            <AddOrderProductButton/>
        </OrderComponentLayout>
    )
}

export default OrderProductsInformation;