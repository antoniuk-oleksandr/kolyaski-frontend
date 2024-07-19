import {LayoutProps} from "@/types/LayoutProps";

const HomeRightSideProductImageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"aspect-1x1  place-items-center size-12 phone:size-16 flex justify-center items-center"}>
            {children}
        </div>
    )
}

export default HomeRightSideProductImageLayout;