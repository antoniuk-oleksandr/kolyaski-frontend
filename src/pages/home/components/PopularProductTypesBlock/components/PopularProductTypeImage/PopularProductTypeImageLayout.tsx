import {LayoutProps} from "@/types/LayoutProps";

const PopularProductTypeImageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"aspect-1x1"}>
            {children}
        </div>
    )
}

export default PopularProductTypeImageLayout;