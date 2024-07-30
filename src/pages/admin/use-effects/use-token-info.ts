import {Dispatch, useEffect} from "react";
import {getTokenInfoFromCookies} from "@/utils/cookie-utils";
import {UnknownAction} from "redux";
import {setTokenInfo} from "@/redux/token-slice";
import {tryToRefreshToken} from "@/utils/token-utils";

export const useTokenInfo = (dispatch: Dispatch<UnknownAction>) => {
    useEffect(() => {
        const getData = async () => {
            let tokenInfoFromCookies = getTokenInfoFromCookies();
            if (!tokenInfoFromCookies) dispatch(setTokenInfo(null));
            else await tryToRefreshToken(tokenInfoFromCookies, dispatch);
        }

        getData();
    }, []);
}