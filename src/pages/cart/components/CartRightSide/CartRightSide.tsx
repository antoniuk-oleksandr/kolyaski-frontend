import CartRightSideLayout from "./CartRightSideLayout";
import PageTitle from "@/common-components/PageTitle";
import {CartState} from "@/types/CartState";
import {calcTotalCartPrice} from "@/common-components/Header/helpers";
import {NumberFormatter} from "@mantine/core";
import Button from "@/common-components/Button";
import {FaCheck} from "react-icons/fa6";
import {useRouter} from "next/router";
import {CartItem} from "@/types/CartItem";

type CartRightSideProps = {
    products: CartItem[],
}

const CartRightSide = (props: CartRightSideProps) => {
    const {products} = props;
    const totalCartPrice = calcTotalCartPrice(products);
    const router = useRouter();

    return (
        <CartRightSideLayout>
            <PageTitle text="Підсумки кошика"/>
            <div className="flex justify-between items-center ">
                <span className="font-medium">Проміжний підсумок:</span>
                <NumberFormatter
                    suffix=" грн."
                    thousandSeparator=","
                    value={totalCartPrice}
                />
            </div>
            <Button
                onClick={() => router.push("/checkout")}
                className={"mt-3"}
            >
                <FaCheck/>
                <span>Перейти до оплати</span>
            </Button>
        </CartRightSideLayout>
    );
};

export default CartRightSide;
