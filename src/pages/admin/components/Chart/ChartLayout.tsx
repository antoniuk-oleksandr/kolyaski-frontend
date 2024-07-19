import {LayoutProps} from "@/types/LayoutProps";

const ChartLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"bg-white p-6 rounded-md overflow-hidden"}>
            {children}
        </div>
    )
}

export default ChartLayout;