import HomeCarouselIndicatorListLayout from "./HomeCarouselIndicatorListLayout";
import HomeCarouselIndicator from "@/pages/home/components/HomeCarousel/HomeCarouselIndicator/HomeCarouselIndicator";
import {Dispatch, SetStateAction} from "react";

type HomeCarouselIndicatorList = {
    selectedSlideIndex: number,
    setSelectedSlideIndex: Dispatch<SetStateAction<number>>
}

const HomeCarouselIndicatorList = (props: HomeCarouselIndicatorList) => {
    const {selectedSlideIndex} = props;

    return (
        <HomeCarouselIndicatorListLayout>
            {Array.from({length: 3}).map((_, index) => (
                <HomeCarouselIndicator
                    {...props}
                    index={index}
                    key={index}
                    selected={index === selectedSlideIndex}
                />
            ))}
        </HomeCarouselIndicatorListLayout>
    )
}

export default HomeCarouselIndicatorList;