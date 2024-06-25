import HomeCarouselLayout from "./HomeCarouselLayout";
import {Carousel} from "@mantine/carousel";

const HomeCarousel = () => {
    return (
        <HomeCarouselLayout>
            <Carousel>
                <Carousel.Slide>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
            </Carousel>
        </HomeCarouselLayout>
    )
}

export default HomeCarousel;