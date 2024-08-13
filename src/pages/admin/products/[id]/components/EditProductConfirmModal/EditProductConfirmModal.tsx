import EditProductConfirmModalLayout from "./EditProductConfirmModalLayout";
import {useDisclosure} from "@mantine/hooks";
import {Dispatch, SetStateAction, useEffect} from "react";
import {effect} from "@preact/signals-react";
import {editProductConfirmModalSignal} from "@/pages/admin/signals/edit-product-confirm-modal-signal";
import {Button, Loader} from "@mantine/core";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {TokenInfo} from "@/types/TokenInfo";
import {handleDeleteProductButtonClick} from "@/pages/admin/products/[id]/handlers";

type EditProductConfirmModalProps = {
    setSending: Dispatch<SetStateAction<boolean>>,
    id: number,
    tokenInfo: TokenInfo,
    sending: boolean,
}

const EditProductConfirmModal = (props: EditProductConfirmModalProps) => {
    const {setSending, id, tokenInfo, sending} = props;
    const [opened, {open, close}] = useDisclosure(false);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        editProductConfirmModalSignal.value = 0;

        effect(() => {
            const {value} = editProductConfirmModalSignal;
            if (value === 0) return;
            open();
        })
    }, []);

    return (
        <EditProductConfirmModalLayout close={close} opened={opened}>
            <Button
                loading={sending}
                onClick={() => handleDeleteProductButtonClick(setSending, id, tokenInfo, dispatch, router)}
                className={"!w-16 !flex !justify-center !items-center"}
                color={"green"}
            >Так</Button>
            <Button onClick={close} className={"!w-16"} color={"red"}>Ні</Button>
        </EditProductConfirmModalLayout>
    )
}

export default EditProductConfirmModal;