import {LayoutProps} from "@/types/LayoutProps";

const HomeRightSideListElementLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"p-3 phone:px-0"}>
            <div className={"p-3 bg-white rounded-md flex flex-col"}>
                {children}
            </div>
        </div>
    )
}

export default HomeRightSideListElementLayout;