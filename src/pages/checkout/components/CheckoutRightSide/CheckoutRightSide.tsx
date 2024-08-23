import CheckoutRightSideLayout from "./CheckoutRightSideLayout";
import PageTitle from "@/common-components/PageTitle";
import {CartState} from "@/types/CartState";
import CheckoutBillTopLine from "@/pages/checkout/components/CheckoutBillTopLine/CheckoutBillTopLine";
import Button from "@/common-components/Button";
import CheckoutBillGrandTotal from "@/pages/checkout/components/CheckoutBillGrandTotal/CheckoutBillGrandTotal";
import CheckoutBillDeliveryPrice from "@/pages/checkout/components/CheckoutBillDeliveryPrice/CheckoutBillDeliveryPrice";
import {CartItem} from "@/types/CartItem";

type CheckoutRightSideProps = {
    isOrderRequestSending: boolean,
    cartItems: CartItem[],
}

const CheckoutRightSide = (props: CheckoutRightSideProps) => {
    const {isOrderRequestSending, cartItems} = props;
    const deliveryPrice = 99;

    return (
        <CheckoutRightSideLayout>
            <PageTitle text={'Разом'}/>
            <CheckoutBillTopLine cartItems={cartItems}/>
            {/*<CheckoutBillDeliveryPrice deliveryPrice={deliveryPrice}/>*/}
            <CheckoutBillGrandTotal deliveryPrice={deliveryPrice} cartItems={cartItems}/>
            <Button
                sending={isOrderRequestSending}
                disabled={isOrderRequestSending}
                className={"w-full mt-3 !text-lg"}
                type={"submit"}
            >Замовлення підтверджую</Button>
        </CheckoutRightSideLayout>
    )
}

export default CheckoutRightSide;