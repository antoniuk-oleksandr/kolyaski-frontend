import {useRouter} from "next/router";
import CheckoutCartEditButtonLayout
    from "@/pages/checkout/components/CheckoutCart/components/CheckoutCartEditButton/CheckoutCartEditButtonLayout";

const CheckoutCartEditButton = () => {
    const router = useRouter();

    return (
        <CheckoutCartEditButtonLayout>
            <button
                type={"button"}
                onClick={() => router.push("/cart")}
                className={"text-primary w-fit text-sm hover:underline outline-none duration-200 ease-out"}
            >Редагувати
            </button>
        </CheckoutCartEditButtonLayout>
    )
}

export default CheckoutCartEditButton;