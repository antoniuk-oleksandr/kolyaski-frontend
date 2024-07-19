import {useEffect, useState} from "react";
import {TokenInfo} from "@/types/TokenInfo";
import {getTokenInfoFromCookies} from "@/utils/cookie-utils";

export const useTokenInfo = () => {
    const [tokenInfo, setTokenInfo] = useState<undefined | null | TokenInfo>(undefined);

    useEffect(() => {
        const tokenInfoFromCookies = getTokenInfoFromCookies();
        if(!tokenInfoFromCookies) setTokenInfo(null);

    }, []);

    return {tokenInfo};
}