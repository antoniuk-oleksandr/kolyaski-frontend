import {NumberFormatter, Table} from "@mantine/core";
import OrderStatusElement from "@/pages/admin/orders/components/OrderStatusElement/OrderStatusElement";
import {OrderType} from "@/types/OrderType";
import {router} from "next/client";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";

type OrdersTableBodyProps = {
    orders: OrderType[],
    tableCellStyles: string,
}

const OrdersTableBody = (props: OrdersTableBodyProps) => {
    const {orders, tableCellStyles} = props;
    const {page, value, sortBy, sortOrder} = useSelector((state: ReduxState) => state.ordersState);

    console.log(orders)

    return (
        <div>
            {orders.map((item, index) => (
                <div
                    onClick={() => router.push(`/admin/orders/${item.id}?page=${page}&sortBy=${sortBy}&sortOrder=${sortOrder}${value === "" ? "" : `&value=${value}`}`)}
                    className={"last:rounded-b-md grid odd:bg-gray-50 grid-cols-ordersColumns hover:shadow hover:bg-comments cursor-pointer duration-200 ease-out"}
                    key={index}>
                    <div className={`${tableCellStyles} 
                    ${index === orders.length - 1 ? 'rounded-bl-md' : ''} pl-6`}
                    >{item.id}</div>
                    <div className={`${tableCellStyles}`}>{item.date}</div>
                    <div className={tableCellStyles}>{item.firstName}</div>
                    <div className={tableCellStyles}>{item.surname}</div>
                    <div className={tableCellStyles}>
                        <NumberFormatter
                            thousandSeparator={","}
                            value={item.totalPrice}
                            suffix={" грн."}
                        />
                    </div>
                    <div className={`${tableCellStyles} ${index === orders.length - 1 ? 'rounded-br-md' : ''}`}>
                        <OrderStatusElement key={item.id} {...item}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrdersTableBody;