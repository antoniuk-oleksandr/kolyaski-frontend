import EditProductButtonsLayout from "./EditProductButtonsLayout";
import {ProductData} from "@/types/ProductData";
import {Dispatch, SetStateAction} from "react";
import {TokenInfo} from "@/types/TokenInfo";
import DeleteProductButton from "@/pages/admin/products/[id]/components/DeleteProductButton";
import CancelProductEditingButton from "@/pages/admin/products/[id]/components/CancelProductEditingButton";
import SubmitProductEditingButton from "@/pages/admin/products/[id]/components/SubmitProductEditingButton";
import {AdminProductsState} from "@/types/AdminProductsState";

type EditProductButtonsProps = {
    sending: boolean,
    initialProductData: ProductData,
    setSending: Dispatch<SetStateAction<boolean>>,
    id: number,
    tokenInfo: TokenInfo,
    adminProductsState: AdminProductsState;
}

const EditProductButtons = (props: EditProductButtonsProps) => {
    return (
        <EditProductButtonsLayout>
            <SubmitProductEditingButton {...props}/>
            <DeleteProductButton {...props}/>
            <CancelProductEditingButton linkType={"all"} {...props}/>
        </EditProductButtonsLayout>
    )
}

export default EditProductButtons;
