import {Dispatch, useEffect, useState} from "react";
import {getSalesInfo} from "@/api/get-sales-info";
import {TokenInfo} from "@/types/TokenInfo";
import {tryToRefreshToken} from "@/utils/token-utils";
import {UnknownAction} from "redux";

export const useSales = (
    tokenInfo: TokenInfo | null,
    dispatch: Dispatch<UnknownAction>
) => {
    const [idk, setIdk] = useState<any>(null);

    useEffect(() => {
        const getData = async () => {
            if (tokenInfo === null || tokenInfo === undefined) return null;

            await tryToRefreshToken(tokenInfo, dispatch);
            const response = await getSalesInfo(tokenInfo.refresh.token);
            console.log(response);
        }

        getData();
    }, []);
}