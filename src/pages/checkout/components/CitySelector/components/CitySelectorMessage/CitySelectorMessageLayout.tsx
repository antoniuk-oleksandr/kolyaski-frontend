import {LayoutProps} from "@/types/LayoutProps";

const CitySelectorMessageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex items-center mb-6 gap-x-2 text-neutral-400"}>
            {children}
        </div>
    )
}

export default CitySelectorMessageLayout;