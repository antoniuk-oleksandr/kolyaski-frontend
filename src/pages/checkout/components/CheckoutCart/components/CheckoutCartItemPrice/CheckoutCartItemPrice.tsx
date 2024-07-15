import CheckoutCartItemPriceLayout from "./CheckoutCartItemPriceLayout";
import {NumberFormatter} from "@mantine/core";
import {IoClose} from "react-icons/io5";

type CheckoutCartItemPriceProps = {
    price: number,
    quantity: number,
}

const CheckoutCartItemPrice = (props: CheckoutCartItemPriceProps) => {
    const {price, quantity} = props;

    return (
        <CheckoutCartItemPriceLayout {...props}>
                <NumberFormatter
                    thousandSeparator={","}
                    suffix={" грн."}
                    className={"text-center phone:col-start-2 phone:row-start-3 phone:text-start"}
                    value={price}
                />
                <IoClose className={"text-sm"}/>
                <span>{quantity} од.</span>
        </CheckoutCartItemPriceLayout>
    )
}

export default CheckoutCartItemPrice;