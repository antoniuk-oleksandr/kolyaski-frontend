import {NextRouter} from "next/router";

export const onHeaderFormSubmit = (data: any, router: NextRouter) => {
    const value = data.search;
    router.push(`/catalog?value=${encodeURIComponent(value)}&sortType=за+полулярністю&page=1`);
}