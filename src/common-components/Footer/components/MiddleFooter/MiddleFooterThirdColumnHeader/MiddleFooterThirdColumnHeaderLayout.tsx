import {LayoutProps} from "@/types/LayoutProps";

const MiddleFooterThirdColumnHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-4 text-lg items-center text-white min-h-7.5"}>
            {children}
        </div>
    )
}

export default MiddleFooterThirdColumnHeaderLayout;