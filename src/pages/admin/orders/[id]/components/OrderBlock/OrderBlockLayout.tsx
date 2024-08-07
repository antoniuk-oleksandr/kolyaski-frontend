import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {handleOrderByIdFormSubmit} from "@/pages/admin/orders/handlers";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {OrderType} from "@/types/OrderType";

type OrderBlockLayoutProps = LayoutProps & {
    initialOrderData: MutableRefObject<OrderType | null>,
    setSending: Dispatch<SetStateAction<boolean>>,
}

const OrderBlockLayout = (props: OrderBlockLayoutProps) => {
    const {children, initialOrderData, setSending} = props;
    const {orderById} = useSelector((state: ReduxState) => state.ordersState);
    if (!orderById) return null;

    const methods = useForm({defaultValues: {...orderById}});

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    handleOrderByIdFormSubmit(data, initialOrderData, setSending))}
                className={"bg-white rounded-md text-sm p-6"}>
                {children}
            </form>
        </FormProvider>
    )
}

export default OrderBlockLayout;