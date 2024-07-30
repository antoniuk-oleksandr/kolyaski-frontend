import {TokenInfo} from "@/types/TokenInfo";
import {UnknownAction} from "redux";
import {Dispatch} from "react";
import {setTokenInfo} from "@/redux/token-slice";
import {postTokenRefreshRequest} from "@/api/post-token-refresh-request";
import {clearTokenInfoFromCookies, setTokenInfoToCookies} from "@/utils/cookie-utils";

export const tryToRefreshToken = async (
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>
) => {
    // if (tokenInfo.access.expiration > Date.now()) return;

    let tokenCopy = {...tokenInfo};
    tokenCopy.access = await postTokenRefreshRequest(tokenCopy.refresh.token);
    if (!tokenCopy.access) clearTokenInfoFromCookies();
    else setTokenInfoToCookies(tokenCopy);
    dispatch(setTokenInfo(tokenCopy));
}

export const clearTokenInfo = (dispatch: Dispatch<UnknownAction>) => {
    dispatch(setTokenInfo(null));
    clearTokenInfoFromCookies();
}