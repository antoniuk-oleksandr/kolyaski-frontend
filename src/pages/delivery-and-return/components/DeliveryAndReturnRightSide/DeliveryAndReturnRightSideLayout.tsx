import {LayoutProps} from "@/types/LayoutProps";

const DeliveryAndReturnRightSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col p-3 phone:px-0 w-full"}>
            {children}
        </div>
    )
}

export default DeliveryAndReturnRightSideLayout;