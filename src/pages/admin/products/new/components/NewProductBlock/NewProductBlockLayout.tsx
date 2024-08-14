import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {newProductFormScheme} from "@/pages/admin/products/new/helpers";
import {handleNewProductButtonSubmit} from "@/pages/admin/products/new/handlers";
import {Dispatch, SetStateAction} from "react";
import {useRouter} from "next/router";
import {ProductData} from "@/types/ProductData";

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
    const router = useRouter();
    const methods = useForm({
        defaultValues: defaultValues as unknown as ProductData,
        resolver: zodResolver(newProductFormScheme)
    },);

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    handleNewProductButtonSubmit(setSending, router, data))}
                className={"bg-white rounded-md p-4"}>
                {children}
            </form>
        </FormProvider>
    )
}

export default NewProductBlockLayout;