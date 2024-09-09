import {Dispatch, useEffect} from "react";
import {getTokenInfoFromCookies} from "@/utils/cookie-utils";
import {UnknownAction} from "redux";
import {setTokenInfo} from "@/redux/token-slice";
import {tryToRefreshToken} from "@/utils/token-utils";
import {NextRouter} from "next/router";

export const useTokenInfo = (
    dispatch: Dispatch<UnknownAction>,
    router: NextRouter,
) => {
    useEffect(() => {
        const getData = async () => {
            let tokenInfoFromCookies = getTokenInfoFromCookies();
            if (!tokenInfoFromCookies) dispatch(setTokenInfo(null));
            else await tryToRefreshToken(tokenInfoFromCookies, dispatch, router);
        }

        getData();
    }, []);
}