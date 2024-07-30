import {SalesDataItem} from "@/types/SalesDataItem";

export type SalesData = {
    week: SalesDataItem[],
    month: SalesDataItem[],
    allTime: SalesDataItem[],
}