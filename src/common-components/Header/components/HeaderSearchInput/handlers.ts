import {NextRouter} from "next/router";
import {SortEnum} from "@/types/SortEnum";

export const onHeaderFormSubmit = async (
    data: any,
    router: NextRouter
) => {
    const value = data.search;
    await router.push(`/catalog?value=${value}&sortType=${SortEnum.POPULARITY}&page=1`);
}