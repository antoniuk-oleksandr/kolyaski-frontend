import {Dispatch, useEffect} from "react";
import {getTokenInfoFromCookies} from "@/utils/cookie-utils";
import {postTokenRefreshRequest} from "@/api/post-token-refresh-request";
import {UnknownAction} from "redux";
import {setTokenInfo} from "@/redux/token-slice";

export const useTokenInfo = (dispatch: Dispatch<UnknownAction>) => {
    useEffect(() => {
        const getData = async () => {
            const tokenInfoFromCookies = getTokenInfoFromCookies();
            if (!tokenInfoFromCookies) dispatch(setTokenInfo(null));
            else {
                const {token} = tokenInfoFromCookies.refresh;
                const response = await postTokenRefreshRequest(token);
                if(!response) dispatch(setTokenInfo(null));
                else dispatch(setTokenInfo(response));
            }
        }

        getData();
    }, []);
}