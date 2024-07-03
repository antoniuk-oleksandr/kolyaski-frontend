import CarouselLayout from "./CarouselLayout";
import {LayoutProps} from "@/types/LayoutProps";

type CarouselProps = LayoutProps & {
    index: number,
    className?: string,
};

const Carousel = (props: CarouselProps) => {
    const {children} = props;

    return (
        <CarouselLayout {...props}>
            {children}
        </CarouselLayout>
    )
}

export default Carousel;