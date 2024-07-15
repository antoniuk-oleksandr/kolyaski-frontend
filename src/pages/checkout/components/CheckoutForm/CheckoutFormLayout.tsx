import {FormProvider, useForm} from "react-hook-form";
import {LayoutProps} from "@/types/LayoutProps";
import {handleCheckoutFormSubmit} from "@/pages/checkout/handlers";
import {CheckoutFormType} from "@/types/CheckoutFormType";
import {useCheckoutForm} from "@/pages/checkout/use-effects/use-checkout-form";
import {CartItem} from "@/types/CartItem";
import {checkoutFormScheme} from "@/pages/checkout/helpers";
import {zodResolver} from "@hookform/resolvers/zod";
import {Dispatch, SetStateAction} from "react";
import {useDispatch} from "react-redux";

type CheckoutFormProps = LayoutProps & {
    products: CartItem[],
    setIsOrderCompleted: Dispatch<SetStateAction<boolean>>,
    setIsOrderRequestSending: Dispatch<SetStateAction<boolean>>,
};

const CheckoutFormLayout = (props: CheckoutFormProps) => {
    const {children, products, setIsOrderCompleted, setIsOrderRequestSending} = props;
    const methods = useForm({resolver: zodResolver(checkoutFormScheme)});
    const dispatch = useDispatch();
    useCheckoutForm(methods, products);

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    handleCheckoutFormSubmit(
                        data as CheckoutFormType, setIsOrderCompleted, setIsOrderRequestSending, dispatch
                    ))}
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default CheckoutFormLayout;