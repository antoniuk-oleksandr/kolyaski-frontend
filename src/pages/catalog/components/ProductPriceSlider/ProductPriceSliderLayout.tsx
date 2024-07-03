import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/router";
import {FormProvider, useForm} from "react-hook-form";
import {handlePriceFormSubmit} from "@/pages/catalog/handlers";
import {SearchParams} from "@/types/SearchParams";
import {z} from "zod";
import {InvalidPrice} from "@/types/InvalidPrice";
import {zodResolver} from "@hookform/resolvers/zod";
import {MutableRefObject, useEffect} from "react";
import {priceRangeSchema} from "@/pages/catalog/helpers";
import {PriceData} from "@/types/PriceData";

type ProductPriceSliderLayoutProps = LayoutProps & {
    priceData: PriceData,
    searchParams: SearchParams,
};

const ProductPriceSliderLayout = (props: ProductPriceSliderLayoutProps) => {
    const {children, priceData, searchParams} = props;
    const router = useRouter();
    const methods = useForm({
        resolver: zodResolver(priceRangeSchema),
        defaultValues: {sliderValue: priceData.sliderValue},
    });
    const {handleSubmit, setValue} = methods;

    useEffect(() => {
        setValue("sliderValue", priceData.sliderValue);
    }, [priceData]);

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit((data) => handlePriceFormSubmit(data.sliderValue, searchParams, router))}
                className={"p-3 phone:px-0 flex flex-col"}
            >
                {children}
            </form>
        </FormProvider>
    );
};

export default ProductPriceSliderLayout;
