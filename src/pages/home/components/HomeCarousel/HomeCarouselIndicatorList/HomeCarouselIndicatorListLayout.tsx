import {LayoutProps} from "@/types/LayoutProps";

const HomeCarouselIndicatorListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"absolute bottom-4 right-4 flex items-center gap-x-4 z-10"}>
            {children}
        </div>
    )
}

export default HomeCarouselIndicatorListLayout;