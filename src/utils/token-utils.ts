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

    if (tokenInfo.access.expiration > Date.now()) return;

    const response = await postTokenRefreshRequest(tokenInfo.refresh.token);
    if (!response) clearTokenInfoFromCookies();
    else setTokenInfoToCookies(response);
    dispatch(setTokenInfo(response));
    return response;
}