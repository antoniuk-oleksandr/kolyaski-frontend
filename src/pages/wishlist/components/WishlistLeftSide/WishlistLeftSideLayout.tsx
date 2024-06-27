import {LayoutProps} from "@/types/LayoutProps";

const WishlistLeftSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex-1 p-3 phone:px-0 "}>
            {children}
        </div>
    )
}

export default WishlistLeftSideLayout;