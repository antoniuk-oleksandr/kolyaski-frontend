import {CommentsState} from "@/types/CommentsState";
import {TokenInfo} from "@/types/TokenInfo";
import {OrdersState} from "@/types/OrdersState";
import {CartState} from "@/types/CartState";
import {AdminProductsState} from "@/types/AdminProductsState";

export type ReduxState = {
    comments: CommentsState,
    token: {
        tokenInfo: TokenInfo,
    },
    ordersState: OrdersState,
    cart: CartState,
    adminProductsState: AdminProductsState,
}