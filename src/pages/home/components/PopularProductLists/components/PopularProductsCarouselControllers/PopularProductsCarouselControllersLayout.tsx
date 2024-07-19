import {LayoutProps} from "@/types/LayoutProps";

const PopularProductsCarouselControllersLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"pt-6 flex justify-center gap-x-3"}>
            {children}
        </div>
    )
}

export default PopularProductsCarouselControllersLayout;