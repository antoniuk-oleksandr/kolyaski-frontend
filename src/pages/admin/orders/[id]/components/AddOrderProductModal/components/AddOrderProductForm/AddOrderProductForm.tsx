import MessageFormInput from "@/pages/contacts/components/MessageFormInput/MessageFormInput";
import {useFormContext} from "react-hook-form";
import {useRef, useState} from "react";
import {useAddProductInput} from "@/pages/admin/use-effects/use-add-product-form-input";
import {CancelTokenSource} from "axios";
import {ProductData} from "@/types/ProductData";
import AddOrderProductItem
    from "@/pages/admin/orders/[id]/components/AddOrderProductModal/components/AddOrderProductItem/AddOrderProductItem";
import AddOrderProductItemList
    from "@/pages/admin/orders/[id]/components/AddOrderProductModal/components/AddOrderProductItemList/AddOrderProductItemList";

const AddOrderProductForm = () => {
    const {watch} = useFormContext();
    const {name} = watch();
    const cancelTokenRef = useRef<null | CancelTokenSource>(null);
    const [receivedProducts, setReceivedProducts] = useState<ProductData[] | null>(null);
    useAddProductInput(name, cancelTokenRef, setReceivedProducts);

    return (
        <>
            <MessageFormInput id={"name"} autoFocus={true} label={"Назва товару"}/>
            <AddOrderProductItemList receivedProducts={receivedProducts}/>
        </>
    )
}

export default AddOrderProductForm;