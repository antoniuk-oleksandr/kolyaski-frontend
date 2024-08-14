import NewProductButtonsLayout from "./NewProductButtonsLayout";
import CancelProductEditingButton from "@/pages/admin/products/[id]/components/CancelProductEditingButton";
import NewProductSubmitButton from "@/pages/admin/products/new/components/NewProductSubmitButton";

type NewProductButtonsProps = {
    sending: boolean,
}

const NewProductButtons = (props: NewProductButtonsProps) => {
    return (
        <NewProductButtonsLayout>
            <NewProductSubmitButton {...props}/>
            <CancelProductEditingButton/>
        </NewProductButtonsLayout>
    )
}

export default NewProductButtons;