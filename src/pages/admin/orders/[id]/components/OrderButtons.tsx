import Button from "@/common-components/Button";
import {useFormContext} from "react-hook-form";
import {MutableRefObject} from "react";
import {OrderType} from "@/types/OrderType";
import {useRouter} from "next/router";
import {checkIfOrders} from "@/pages/admin/orders/[id]/helpers";

type OrderButtonsProps = {
    sending: boolean,
    initialOrderDataRef: MutableRefObject<OrderType | null>,
}

const OrderButtons = (props: OrderButtonsProps) => {
    const {sending, initialOrderDataRef} = props;
    const router = useRouter();
    const {watch} = useFormContext();

    return (
        <div className="flex justify-end space-x-3 h-11">
            <Button
                disabled={checkIfOrders(initialOrderDataRef, watch() as OrderType)}
                className={"w-32"}
                sending={sending}
                type={"submit"}
            >Підтвердити</Button>
            <button
                onClick={() => router.push("/admin/orders")}
                className={"bg-neutral-200 px-4 outline-none rounded-md duration-200 ease-out active:scale-95 hover:brightness-105"}
            >Відмінити
            </button>
        </div>
    )
}

export default OrderButtons;