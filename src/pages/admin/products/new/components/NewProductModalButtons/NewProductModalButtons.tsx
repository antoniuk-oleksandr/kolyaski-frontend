import { NewProductModalCancelButton } from "../NewProductModalCancelButton";
import NewProductModalButtonsLayout from "./NewProductModalButtonsLayout";
import NewProductModalSubmitButton from "@/pages/admin/products/new/components/NewProductModalSubmitButton";
import {Dispatch, SetStateAction} from "react";
import {useFormContext} from "react-hook-form";

const NewProductModalButtons = () => {
    return (
        <NewProductModalButtonsLayout>
            <NewProductModalCancelButton/>
        </NewProductModalButtonsLayout>
    )
}

export default NewProductModalButtons;