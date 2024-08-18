import {useRouter} from "next/router"
import {Dispatch, useEffect} from "react";
import {getAdminProductByIdPageParams} from "../products/[id]/helpers";
import {UnknownAction} from "@reduxjs/toolkit";
import {setAdminProductsData} from "@/redux/admin-products-slice";
import {newProductModalSignal} from "../signals/new-product-modal-signal";

export const useNewProduct = (dispatch: Dispatch<UnknownAction>) => {
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        const getData = async () => {
            const params = await getAdminProductByIdPageParams(router);
            dispatch(setAdminProductsData(params));
        }

        getData();
    }, [router]);
}