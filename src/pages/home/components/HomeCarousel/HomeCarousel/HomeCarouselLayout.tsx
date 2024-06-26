import {LayoutProps} from "@/types/LayoutProps";
import HomeCarouselIndicatorList from "@/pages/home/components/HomeCarousel/HomeCarouselIndicatorList/HomeCarouselIndicatorList";
import {Dispatch, SetStateAction} from "react";

type CarouselLayoutProps = LayoutProps & {
    selectedSlideIndex: number,
    setSelectedSlideIndex: Dispatch<SetStateAction<number>>
}

const CarouselLayout = (props: CarouselLayoutProps) => {
    const {children, selectedSlideIndex} = props;

    return (
        <div className={"m-3 phone:m-0 flex-1 overflow-hidden relative h-fit"}>
            <HomeCarouselIndicatorList {...props}/>
            <div
                style={{
                    transform: `translateX(-${selectedSlideIndex * 100}%)`,
                    transition: 'transform 0.5s ease'
                }}
                className="flex w-full h-108 phone:h-116 relative transition-transform ease-out duration-500">
                {children}
            </div>
        </div>
    )
}

export default CarouselLayout;