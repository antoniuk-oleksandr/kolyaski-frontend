import {LayoutProps} from "@/types/LayoutProps";

const HomePopularProductImageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"aspect-3x4 grid place-items-center"}>
            {children}
        </div>
    )
}

export default HomePopularProductImageLayout;