import {TokenInfo} from "@/types/TokenInfo";
import Cookies from "js-cookie";

const token = "kolyaskiTokenInfo";

export const setTokenInfoToCookies = (tokenInfo: TokenInfo) => {
    Cookies.set(token, JSON.stringify(tokenInfo));
}

export const getTokenInfoFromCookies = () => {
    const data = Cookies.get(token);
    if(!data) return null;
    return JSON.parse(data) as TokenInfo;
}

export const clearTokenInfoFromCookies = () => {
    console.log("clear tokenInfoFromCookies");
    Cookies.remove(token);
}