import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {ProductData} from "@/types/ProductData";
import {useDispatch} from "react-redux";
import {handleProductBuyFormSubmit} from "@/pages/product/[id]/handlers";

type ProductBuyContainerLayout = LayoutProps & {
    product: ProductData,
};

const ProductBuyContainerLayout = (props: ProductBuyContainerLayout) => {
    const {children, product} = props;
    const methods = useForm();
    const dispatch = useDispatch();

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) =>
                    handleProductBuyFormSubmit(data, dispatch, product))}
                className={"flex gap-x-3 font-medium mt-6"}
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default ProductBuyContainerLayout;