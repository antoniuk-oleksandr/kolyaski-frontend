import {handleDeleteProductButtonClick} from "@/pages/admin/products/[id]/handlers";
import {Dispatch, SetStateAction} from "react";
import {TokenInfo} from "@/types/TokenInfo";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {Loader} from "@mantine/core";
import EditProductConfirmModal
    from "@/pages/admin/products/[id]/components/EditProductConfirmModal/EditProductConfirmModal";
import {editProductConfirmModalSignal} from "@/pages/admin/signals/edit-product-confirm-modal-signal";

type DeleteProductButtonProps = {
    setSending: Dispatch<SetStateAction<boolean>>,
    id: number,
    tokenInfo: TokenInfo,
    sending: boolean,
}

export const DeleteProductButton = (props: DeleteProductButtonProps) => {
    const {sending} = props;


    return (
        <div className={"phone:flex phone:justify-end"}>
            <button
                disabled={sending}
                type={"button"}
                onClick={() => editProductConfirmModalSignal.value++}
                className={`bg-red-500 w-32 h-11  flex justify-center items-center text-white outline-none rounded-md duration-200 ease-out active:scale-95`}
            >
                {sending === true ? <Loader size={"sm"} color={"#ffffff"}/> : "Видалити"}
            </button>
            <EditProductConfirmModal {...props}/>
        </div>
    )
}