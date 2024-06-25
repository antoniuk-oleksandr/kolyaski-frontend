import {LayoutProps} from "@/types/LayoutProps";

const MiddleFooterTextLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex items-center gap-x-2 text-secondary"}>
            {children}
        </div>
    )
}

export default MiddleFooterTextLayout;