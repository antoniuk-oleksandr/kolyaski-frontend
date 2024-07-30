import {LayoutProps} from "@/types/LayoutProps";

const ChartTooltipLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"bg-white rounded-md min-w-44 shadow-lg p-4 ring-1 ring-neutral-200 text-sm font-medium"}>
            {children}
        </div>
    )
}

export default ChartTooltipLayout;