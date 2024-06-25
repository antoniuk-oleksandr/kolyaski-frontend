import {LayoutProps} from "@/types/LayoutProps";

const FirstBottomHeaderColumnLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full flex flex-col gap-y-2 phone:items-center"}>
            {children}
        </div>
    )
}

export default FirstBottomHeaderColumnLayout;