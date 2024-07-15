import {LayoutProps} from "@/types/LayoutProps";

const Wrapper = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"max-w-300 mx-auto w-full flex flex-col"}>
            {children}
        </div>
    )
}

export default Wrapper;