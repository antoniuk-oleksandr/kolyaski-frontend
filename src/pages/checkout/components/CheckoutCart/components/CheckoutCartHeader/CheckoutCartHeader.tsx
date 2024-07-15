import CheckoutCartHeaderLayout from "./CheckoutCartHeaderLayout";
import {NumberFormatter} from "@mantine/core";
import {calcTotalCartPrice} from "@/common-components/Header/helpers";
import {CartItem} from "@/types/CartItem";

type CheckoutCartHeaderProps = {
    products: CartItem[],
}

const CheckoutCartHeader = (props: CheckoutCartHeaderProps) => {
    const {products} = props;
    const totalCartPrice = calcTotalCartPrice(products);

    return (
        <CheckoutCartHeaderLayout>
            <h2 className="text-lg font-semibold ">Замовлення</h2>
            <span className={"text-sm flex gap-x-1"}>на суму:
                <NumberFormatter
                    className={"font-semibold"}
                    suffix={" грн."}
                    thousandSeparator={","}
                    value={totalCartPrice}
                />
                </span>
        </CheckoutCartHeaderLayout>
    )
}

export default CheckoutCartHeader;