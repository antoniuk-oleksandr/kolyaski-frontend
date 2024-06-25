import {LayoutProps} from "@/types/LayoutProps";

const TopFooterColumnHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-4 text-lg items-center text-white"}>
            {children}
        </div>
    )
}

export default TopFooterColumnHeaderLayout;