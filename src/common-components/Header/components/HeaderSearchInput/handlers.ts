import {NextRouter} from "next/router";

export const onHeaderFormSubmit = (data: any, router: NextRouter) => {
    const value = data.search;
    router.push(`/products?value=${encodeURIComponent(value)}`);
}