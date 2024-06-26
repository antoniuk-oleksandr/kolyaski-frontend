import {LayoutProps} from "@/types/LayoutProps";

const HomeCarouselSlideInfoLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"absolute w-full h-full px-6 z-10 flex items-center"}>
                {children}
        </div>
    )
}

export default HomeCarouselSlideInfoLayout;