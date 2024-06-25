import {LayoutProps} from "@/types/LayoutProps";

const SecondBottomHeaderColumnLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full mx-auto h-full flex items-center justify-center flex-col gap-y-2 phone:px-3 phone:row-start-3 "}>
            {children}
        </div>
    )
}

export default SecondBottomHeaderColumnLayout;