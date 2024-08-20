import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {handleOrderByIdFormSubmit} from "@/pages/admin/orders/handlers";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {OrderType} from "@/types/OrderType";
import { useRouter } from "next/router";
import {zodResolver} from "@hookform/resolvers/zod";
import {editOrderScheme} from "@/pages/admin/orders/[id]/helpers";

type OrderBlockLayoutProps = LayoutProps & {
    initialOrderData: MutableRefObject<OrderType | null>,
    setSending: Dispatch<SetStateAction<boolean>>,
    id?: number,
}

const OrderBlockLayout = (props: OrderBlockLayoutProps) => {
    const {children, initialOrderData, setSending, id} = props;
    const dispatch = useDispatch();
    const router = useRouter();
    const {tokenInfo} = useSelector((state: ReduxState) => state.token);
    const {orderById} = useSelector((state: ReduxState) => state.ordersState);
    if (!orderById) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm({
        defaultValues: {...orderById},
        resolver: zodResolver(editOrderScheme),
    });

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    handleOrderByIdFormSubmit(data, initialOrderData, setSending, tokenInfo, dispatch, router, id))}
                className={"bg-white rounded-md text-sm p-6"}>
                {children}
            </form>
        </FormProvider>
    )
}

export default OrderBlockLayout;