import {Dispatch, SetStateAction} from "react";

type PopularProductsCarouselCircleProps = {
    selected: boolean,
    setCarouselIndex: Dispatch<SetStateAction<number>>,
    index: number,
}

const PopularProductsCarouselCircle = (props: PopularProductsCarouselCircleProps) => {
    const {selected, setCarouselIndex, index} = props;

    return (
        <div
            onClick={() => setCarouselIndex(index)}
            className={`rounded-full cursor-pointer size-3 duration-200 ease-out ${selected ? 'bg-neutral-800' : 'bg-neutral-300 hover:bg-neutral-400'}`}
        />
    )
}

export default PopularProductsCarouselCircle;