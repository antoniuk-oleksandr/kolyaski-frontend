import {LayoutProps} from "@/types/LayoutProps";

const ErrorBoundaryLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"h-svh w-svw grid place-items-center"}>
            {children}
        </div>
    )
}

export default ErrorBoundaryLayout;