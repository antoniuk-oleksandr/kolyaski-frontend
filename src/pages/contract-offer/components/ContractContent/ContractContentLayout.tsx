import {LayoutProps} from "@/types/LayoutProps";

const ContractContentLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex text-base flex-col gap-y-4 text-justify p-3 phone:p-0"}>
            {children}
        </div>
    )
}

export default ContractContentLayout;