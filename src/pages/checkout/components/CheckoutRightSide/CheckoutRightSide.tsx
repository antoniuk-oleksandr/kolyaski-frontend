import CheckoutRightSideLayout from "./CheckoutRightSideLayout";
import PageTitle from "@/common-components/PageTitle";
import {CartState} from "@/types/CartState";
import CheckoutBillTopLine from "@/pages/checkout/components/CheckoutBillTopLine/CheckoutBillTopLine";
import Button from "@/common-components/Button";
import CheckoutBillGrandTotal from "@/pages/checkout/components/CheckoutBillGrandTotal/CheckoutBillGrandTotal";
import CheckoutBillDeliveryPrice from "@/pages/checkout/components/CheckoutBillDeliveryPrice/CheckoutBillDeliveryPrice";

type CheckoutRightSideProps = {
    cart: CartState,
    isOrderRequestSending: boolean,
}

const CheckoutRightSide = (props: CheckoutRightSideProps) => {
    const {cart, isOrderRequestSending} = props;
    const {products} = cart;
    const deliveryPrice = 99;

    return (
        <CheckoutRightSideLayout>
            <PageTitle text={'Разом'}/>
            <CheckoutBillTopLine products={products}/>
            {/*<CheckoutBillDeliveryPrice deliveryPrice={deliveryPrice}/>*/}
            <CheckoutBillGrandTotal deliveryPrice={deliveryPrice} products={products}/>
            <Button
                disabled={isOrderRequestSending}
                className={"w-full mt-3 !text-lg"}
                type={"submit"}
            >Замовлення підтверджую</Button>
        </CheckoutRightSideLayout>
    )
}

export default CheckoutRightSide;