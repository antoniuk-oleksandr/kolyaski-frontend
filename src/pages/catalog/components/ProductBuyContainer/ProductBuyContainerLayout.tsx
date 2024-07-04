import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {handleProductBuyFormSubmit} from "@/pages/catalog/handlers";

const ProductBuyContainerLayout = (props: LayoutProps) => {
    const {children} = props;
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(handleProductBuyFormSubmit)}
                className={"flex gap-x-3 font-medium mt-6"}
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default ProductBuyContainerLayout;