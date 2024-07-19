import {TokenInfo} from "@/types/TokenInfo";
import Cookies from "js-cookie";

const token = "kolyaskiTokenInfo";

export const setTokenInfoToCookies = (tokenInfo: TokenInfo) => {
    Cookies.set(token, JSON.stringify(tokenInfo));
}

export const getTokenInfoFromCookies = () => {
    return Cookies.get(token);
}