import {LayoutProps} from "@/types/LayoutProps";

const BreadcrumbsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-1 text-sm flex-wrap"}>
            {children}
        </div>
    )
}

export default BreadcrumbsLayout;