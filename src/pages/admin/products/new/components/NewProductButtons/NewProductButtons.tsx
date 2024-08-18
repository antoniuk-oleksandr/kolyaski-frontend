import NewProductButtonsLayout from "./NewProductButtonsLayout";
import CancelProductEditingButton from "@/pages/admin/products/[id]/components/CancelProductEditingButton";
import NewProductSubmitButton from "@/pages/admin/products/new/components/NewProductSubmitButton";
import {AdminProductsState} from "@/types/AdminProductsState";

type NewProductButtonsProps = {
    sending: boolean,
    adminProductsState: AdminProductsState,
}

const NewProductButtons = (props: NewProductButtonsProps) => {
    return (
        <NewProductButtonsLayout>
            <NewProductSubmitButton {...props}/>
            <CancelProductEditingButton {...props} linkType={"all"}/>
        </NewProductButtonsLayout>
    )
}

export default NewProductButtons;