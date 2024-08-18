import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {newProductFormScheme} from "@/pages/admin/products/new/helpers";
import {handleNewProductButtonSubmit} from "@/pages/admin/products/new/handlers";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {useRouter} from "next/router";
import {ProductData} from "@/types/ProductData";
import { TokenInfo } from "@/types/TokenInfo";
import {useDispatch, useSelector } from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {AdminModalSignalType} from "@/types/AdminModalSignalType";

const defaultValues = {
    name: "",
    price: 0,
    description: "",
    images: [],
    type: "",
    subType: "",
    quantity: 0,
};

type NewProductBlockLayoutProps = LayoutProps & {
    setSending: Dispatch<SetStateAction<boolean>>,
}

const NewProductBlockLayout = (props: NewProductBlockLayoutProps) => {
    const {children, setSending} = props;
    const {tokenInfo} = useSelector((state: ReduxState) => state.token);
    const router = useRouter();
    const dispatch = useDispatch();
    const methods = useForm({
        defaultValues: defaultValues as unknown as ProductData,
        resolver: zodResolver(newProductFormScheme)
    });

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    handleNewProductButtonSubmit(setSending, router, data, tokenInfo, dispatch))}
                className={"bg-white rounded-md p-4"}>
                {children}
            </form>
        </FormProvider>
    )
}

export default NewProductBlockLayout;