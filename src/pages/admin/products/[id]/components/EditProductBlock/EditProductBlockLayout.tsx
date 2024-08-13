import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {ProductData} from "@/types/ProductData";
import {ScrollArea} from '@mantine/core';
import {Dispatch, SetStateAction} from "react";
import {handleEditProductProduct} from "@/pages/admin/products/[id]/handlers";
import {TokenInfo} from "@/types/TokenInfo";
import {useDispatch} from "react-redux";

type EditProductBlockLayoutProps = LayoutProps & {
    product: ProductData,
    setSending: Dispatch<SetStateAction<boolean>>,
    initialProductData: ProductData,
    tokenInfo: TokenInfo,
}

const EditProductBlockLayout = (props: EditProductBlockLayoutProps) => {
    const {children, product, setSending, initialProductData, tokenInfo} = props;
    const methods = useForm({defaultValues: product});
    const dispatch = useDispatch();

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    handleEditProductProduct(data, setSending, initialProductData, tokenInfo, dispatch))}
                className={"rounded-md bg-white p-4"}
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default EditProductBlockLayout;