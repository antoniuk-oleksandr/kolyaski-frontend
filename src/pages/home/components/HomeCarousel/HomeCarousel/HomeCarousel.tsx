import HomeCarouselLayout from "./HomeCarouselLayout";
import '@mantine/carousel/styles.css';
import {useSlide} from "@/pages/home/components/use-slide";
import {Key} from "react";
import HomeCarouselSlide from "@/pages/home/components/HomeCarousel/HomeCarouselSlide/HomeCarouselSlide";
import {homeCarouselText} from "../home-carousel-text";

const HomeCarousel = () => {
    const {selectedSlideIndex, setSelectedSlideIndex} = useSlide();

    return (
        <HomeCarouselLayout setSelectedSlideIndex={setSelectedSlideIndex} selectedSlideIndex={selectedSlideIndex}>
            {homeCarouselText.map((item, index: Key) => (
                <HomeCarouselSlide isSelected={index === selectedSlideIndex} {...item} key={index}/>
            ))}
        </HomeCarouselLayout>
    )
}

export default HomeCarousel;