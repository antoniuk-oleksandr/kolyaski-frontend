import CheckoutCartContentLayout from "./CheckoutCartContentLayout";
import {CartItem} from "@/types/CartItem";
import CheckoutCartEditButton from "@/pages/checkout/components/CheckoutCart/components/CheckoutCartEditButton/CheckoutCartEditButton";
import CheckoutCartItemElement
    from "@/pages/checkout/components/CheckoutCart/components/CheckoutCartItemElement/CheckoutCartItemElement";

type CheckoutCartContentProps = {
    products: CartItem[]
}

const CheckoutCartContent = (props: CheckoutCartContentProps) => {
    const {products} = props;

    return (
        <CheckoutCartContentLayout>
            {products.map((product, index: number) => (
                <CheckoutCartItemElement
                    key={index}
                    {...product}
                    bottomBorderShown={index !== products.length - 1}
                />
            ))}
            <CheckoutCartEditButton/>
        </CheckoutCartContentLayout>
    )
}

export default CheckoutCartContent;