import PopularProductsCarouselControllersLayout from "./PopularProductsCarouselControllersLayout";
import {Dispatch, SetStateAction} from "react";
import PopularProductsCarouselCircle
    from "@/pages/home/components/PopularProductLists/components/PopularProductsCarouselCircle/PopularProductsCarouselCircle";

type PopularProductsCarouselControllersProps = {
    carouselIndex: number,
    setCarouselIndex: Dispatch<SetStateAction<number>>,
    numberOfCircles: number,
}

const PopularProductsCarouselControllers = (props: PopularProductsCarouselControllersProps) => {
    const {numberOfCircles, carouselIndex} = props;

    return (
        <PopularProductsCarouselControllersLayout>
            {Array.from({length: numberOfCircles}, (_, index) => (
                <PopularProductsCarouselCircle
                    {...props}
                    selected={carouselIndex === index}
                    key={index}
                    index={index}
                />
            ))}
        </PopularProductsCarouselControllersLayout>
    )
}

export default PopularProductsCarouselControllers;