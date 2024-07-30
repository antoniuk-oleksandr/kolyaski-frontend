import {CommentsState} from "@/types/CommentsState";
import {TokenInfo} from "@/types/TokenInfo";

export type ReduxState = {
    comments: CommentsState,
    token: {
        tokenInfo: TokenInfo,
    }
}