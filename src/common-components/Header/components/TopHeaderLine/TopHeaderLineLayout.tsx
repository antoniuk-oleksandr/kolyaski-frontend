import {LayoutProps} from "@/types/LayoutProps";

const TopHeaderLineLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full bg-white"}>
            {children}
        </div>
    )
}

export default TopHeaderLineLayout;