import NewProductModalLayout from "./NewProductModalLayout";
import NewProductFileDropzone from "@/pages/admin/products/new/components/NewProductFileDropzone";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {AdminModalSignalType} from "@/types/AdminModalSignalType";
import NewProductModalButtons
    from "@/pages/admin/products/new/components/NewProductModalButtons/NewProductModalButtons";

type NewProductModalProps = {
    prevModalValue: MutableRefObject<AdminModalSignalType>,
    sending: boolean,
    setSending: Dispatch<SetStateAction<boolean>>,
}

const NewProductModal = (props: NewProductModalProps) => {
    return (
        <NewProductModalLayout {...props}>
            <NewProductFileDropzone/>
            <NewProductModalButtons {...props}/>
        </NewProductModalLayout>
    )
}

export default NewProductModal;