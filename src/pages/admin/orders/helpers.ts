import {OrderStatusEnum} from "@/types/OrderStatusEnum";
import {OrderType} from "@/types/OrderType";
import {NextRouter} from "next/router";
import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {SortOrderEnum} from "@/types/SortOrderEnum";

export const getOrderStatusStyles = (status: OrderStatusEnum) => {
    switch (status) {
        case OrderStatusEnum.Completed:
            return "bg-green-500 text-green-500";
        case OrderStatusEnum.InProgress:
            return "bg-blue-500 text-blue-500";
        case OrderStatusEnum.Canceled:
            return "bg-red-500 text-red-500";
    }
}

export const checkIfOrderType = (value: string | number) => {
    return Object.values(OrderStatusEnum).includes(value as OrderStatusEnum);
}

export const getOrdersPageParams = async (router: NextRouter, link: string,) => {
    const {page, value, sortBy, sortOrder, id} = router.query as {
        page: string,
        value: string,
        sortBy: string,
        sortOrder: string
        id: string,
    };
    if (page === undefined || sortBy === undefined || sortOrder === undefined) {
        await router.push(link);
        return {
            page: null,
            value: "",
            sortBy: null,
            sortOrder: null,
            id: null
        }
    }

    return {
        page: parseInt(page),
        value: value === undefined ? '' : String(value),
        sortBy: sortBy === undefined ? OrdersSortByEnum.ID : sortBy as OrdersSortByEnum,
        sortOrder: sortOrder === undefined ? SortOrderEnum.ASC : sortOrder as SortOrderEnum,
        id: parseInt(id),
    }
}