import {Comment} from "@/types/Comment";

export type CommentsState = {
    readComments: Comment[] | null,
    unreadComments: Comment[] | null,
    deleteRequestSending: boolean,
    changeReadTypeRequestSending: boolean,
    page: number | null,
    value: string | null,
    onPageCount: number | null,
    totalCount: number | null,
}