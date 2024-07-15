import {LayoutProps} from "@/types/LayoutProps";

const SuccessfulOrderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"size-full grid place-items-center flex-1"}>
            {children}
        </div>
    )
}

export default SuccessfulOrderLayout;