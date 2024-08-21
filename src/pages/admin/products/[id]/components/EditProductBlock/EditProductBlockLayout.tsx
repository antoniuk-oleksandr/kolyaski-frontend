import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {ProductData} from "@/types/ProductData";
import {Dispatch, SetStateAction} from "react";
import {handleEditProductProduct} from "@/pages/admin/products/[id]/handlers";
import {TokenInfo} from "@/types/TokenInfo";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {AdminProductsState} from "@/types/AdminProductsState";
import { zodResolver } from "@hookform/resolvers/zod";
import {newProductFormScheme} from "@/pages/admin/products/new/helpers";

type EditProductBlockLayoutProps = LayoutProps & {
    product: ProductData,
    setSending: Dispatch<SetStateAction<boolean>>,
    initialProductData: ProductData,
    tokenInfo: TokenInfo,
    adminProductsState: AdminProductsState,
}

const EditProductBlockLayout = (props: EditProductBlockLayoutProps) => {
    const {children, product, setSending, initialProductData, tokenInfo, adminProductsState} = props;
    const methods = useForm({
        defaultValues: product,
        resolver: zodResolver(newProductFormScheme)
    });
    const dispatch = useDispatch();
    const router = useRouter();
    const {id} = adminProductsState;

    if (!id) return null;
    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    handleEditProductProduct(data, setSending, initialProductData, tokenInfo, dispatch, id, router, adminProductsState))}
                className={"rounded-md bg-white p-4"}
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default EditProductBlockLayout;