import {LayoutProps} from "@/types/LayoutProps";

const WishlistImageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"grid place-items-center w-full mb-12"}>
            {children}
        </div>
    )
}

export default WishlistImageLayout;