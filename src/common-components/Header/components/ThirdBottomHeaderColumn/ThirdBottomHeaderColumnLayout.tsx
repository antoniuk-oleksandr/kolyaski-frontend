import {LayoutProps} from "@/types/LayoutProps";

const ThirdBottomHeaderColumnLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full h-full flex items-center justify-center gap-x-4 font-medium phone:gap-x-2 "}>
            {children}
        </div>
    )
}

export default ThirdBottomHeaderColumnLayout;