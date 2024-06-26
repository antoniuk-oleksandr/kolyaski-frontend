import {LayoutProps} from "@/types/LayoutProps";

const CarouselLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"p-3 flex-1"}>
            {children}
        </div>
    )
}

export default CarouselLayout;