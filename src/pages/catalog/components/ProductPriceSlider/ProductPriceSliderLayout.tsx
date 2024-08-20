import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/router";
import {FormProvider, useForm} from "react-hook-form";
import {handlePriceFormSubmit} from "@/pages/catalog/handlers";
import {zodResolver} from "@hookform/resolvers/zod";
import {useEffect} from "react";
import {CatalogSlice} from "@/types/CatalogSlice";
import { getPriceRangeSchema } from "../../helpers";

type ProductPriceSliderLayoutProps = LayoutProps & {
    catalogSlice: CatalogSlice,
    priceData: [number, number],
    initialValues: [number, number],
};

const ProductPriceSliderLayout = (props: ProductPriceSliderLayoutProps) => {
    const {children, priceData, catalogSlice, initialValues} = props;
    const router = useRouter();
    const methods = useForm({
        resolver: zodResolver(getPriceRangeSchema(initialValues)),
        defaultValues: {sliderValue: initialValues},
    });
    const {handleSubmit, setValue} = methods;

    useEffect(() => {
        setValue("sliderValue", priceData);
    }, [priceData]);

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit((data) =>
                    handlePriceFormSubmit(data.sliderValue, catalogSlice, router))}
                className={"p-3 phone:px-0 flex flex-col"}
            >
                {children}
            </form>
        </FormProvider>
    );
};

export default ProductPriceSliderLayout;
