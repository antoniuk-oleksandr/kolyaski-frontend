import {LayoutProps} from "@/types/LayoutProps";

const MobileOrdersListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col gap-y-3"}>
            {children}
        </div>
    )
}

export default MobileOrdersListLayout;