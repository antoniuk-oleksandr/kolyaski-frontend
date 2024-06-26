import HomeCarouselLayout from "./HomeCarouselLayout";
import {Carousel} from "@mantine/carousel";
import '@mantine/carousel/styles.css';
import {useSlide} from "@/pages/home/components/use-slide";
import {Key} from "react";
import HomeCarouselSlide from "@/pages/home/components/HomeCarouselSlide/HomeCarouselSlide";
import {homeCarouselText} from "../home-carousel-text";

const HomeCarousel = () => {
    const slide = useSlide();

    return (
        <HomeCarouselLayout>
            <Carousel
                loop initialSlide={slide} withIndicators withControls={false} height={435} draggable>
                {homeCarouselText.map((item, index: Key) => (
                    <HomeCarouselSlide {...item} key={index}/>
                ))}
            </Carousel>
        </HomeCarouselLayout>
    )
}

export default HomeCarousel;