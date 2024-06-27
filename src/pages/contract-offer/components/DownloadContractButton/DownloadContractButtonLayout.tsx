import {LayoutProps} from "@/types/LayoutProps";

const DownloadContractButtonLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full grid place-items-center p-3 phone:px-0"}>
            {children}
        </div>
    )
}

export default DownloadContractButtonLayout;