import {Dispatch, useEffect, useState} from "react";
import {getSalesInfoRequest} from "@/api/get-sales-info-request";
import {TokenInfo} from "@/types/TokenInfo";
import {clearTokenInfo, tryToRefreshToken} from "@/utils/token-utils";
import {UnknownAction} from "redux";
import {SalesData} from "@/types/SalesData";

export const useSales = (
    tokenInfo: TokenInfo | null,
    dispatch: Dispatch<UnknownAction>
) => {
    const [sales, setSales] = useState<null | SalesData>(null);

    useEffect(() => {
        const getData = async () => {
            if (tokenInfo === null || tokenInfo === undefined) return null;

            await tryToRefreshToken(tokenInfo, dispatch);
            const response = await getSalesInfoRequest(tokenInfo.access.token);
            if(!response) clearTokenInfo(dispatch);
            setSales(response);
        }

        getData();
    }, []);

    return {sales};
}