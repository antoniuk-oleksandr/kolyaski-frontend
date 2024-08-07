import {NextRouter} from "next/router";
import {Dispatch} from "react";
import {UnknownAction} from "redux";

export type AdminSubmitActionType = (
    router: NextRouter,
    dispatch: Dispatch<UnknownAction>,
    params: any,
) => void;