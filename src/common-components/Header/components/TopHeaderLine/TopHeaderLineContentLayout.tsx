import {LayoutProps} from "@/types/LayoutProps";

const TopHeaderLineContentLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full h-7 flex items-end justify-end text-xl text-babyCarriage phone:justify-center phone:items-center phone:h-11 phone:text-3xl"}>
            {children}
        </div>
    )
}

export default TopHeaderLineContentLayout;