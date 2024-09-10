import {TokenInfo} from "@/types/TokenInfo";
import {UnknownAction} from "redux";
import {Dispatch} from "react";
import {setTokenInfo} from "@/redux/token-slice";
import {postTokenRefreshRequest} from "@/api/post-token-refresh-request";
import {clearTokenInfoFromCookies, setTokenInfoToCookies} from "@/utils/cookie-utils";
import {NextRouter} from "next/router";

export const tryToRefreshToken = async (
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
    router: NextRouter,
    ignoreExpiration?: boolean,
) => {
    if(!ignoreExpiration) {
        if (tokenInfo.access.expiration > Date.now()) return;
    }

    let tokenCopy = {...tokenInfo};
    tokenCopy.access = await postTokenRefreshRequest(tokenCopy.refresh.token);
    if (!tokenCopy.access) {
        clearTokenInfoFromCookies();
        dispatch(setTokenInfo(null));
        await router.push("/admin");
    } else {
        dispatch(setTokenInfo(tokenCopy));
        setTokenInfoToCookies(tokenCopy);
    }
}

export const clearTokenInfo = (dispatch: Dispatch<UnknownAction>) => {
    dispatch(setTokenInfo(null));
    clearTokenInfoFromCookies();
}