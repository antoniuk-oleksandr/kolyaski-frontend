import {Dispatch, SetStateAction} from "react";
import {postSignInRequest} from "@/api/post-sign-in-request";
import {setTokenInfoToCookies} from "@/utils/cookie-utils";
import {UnknownAction} from "redux";
import {setTokenInfo} from "@/redux/token-slice";

export const handleAdminSignFormSubmit = async (
    data: any,
    setSending: Dispatch<SetStateAction<boolean>>,
    setError: any,
    dispatch: Dispatch<UnknownAction>,
) => {
    setSending(true);
    const response = await postSignInRequest(data);

    if (response.data) {
        setTokenInfoToCookies(response.data);
        dispatch(setTokenInfo(response.data));
    }

    if(response.status === 404) {
        setError("username", {message: "Неправильний логін або пароль"});
        setError("password", { message: "Неправильний логін або пароль"});
    }

    setSending(false);
}