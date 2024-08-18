import { NewProductModalCancelButton } from "../NewProductModalCancelButton";
import NewProductModalButtonsLayout from "./NewProductModalButtonsLayout";
import NewProductModalSubmitButton from "@/pages/admin/products/new/components/NewProductModalSubmitButton";
import {Dispatch, SetStateAction} from "react";
import {useFormContext} from "react-hook-form";

type NewProductModalButtonsProps = {
    sending: boolean,
    setSending: Dispatch<SetStateAction<boolean>>,
}

const NewProductModalButtons = (props: NewProductModalButtonsProps) => {
    return (
        <NewProductModalButtonsLayout>
            <NewProductModalSubmitButton {...props}/>
            <NewProductModalCancelButton/>
        </NewProductModalButtonsLayout>
    )
}

export default NewProductModalButtons;