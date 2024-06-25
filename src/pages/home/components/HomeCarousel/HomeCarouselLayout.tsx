import {LayoutProps} from "@/types/LayoutProps";

const CarouselLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
}

export default CarouselLayout;