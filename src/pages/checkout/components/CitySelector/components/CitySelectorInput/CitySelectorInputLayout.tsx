import {LayoutProps} from "@/types/LayoutProps";

const CitySelectorInputLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"relative flex flex-col gap-y-1 my-6"}>
            {children}
        </div>
    )
}

export default CitySelectorInputLayout;