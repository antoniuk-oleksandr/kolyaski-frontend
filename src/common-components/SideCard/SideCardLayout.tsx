import {LayoutProps} from "@/types/LayoutProps";

type SideCardLayoutProps = LayoutProps & {
    bgColor: string,

}

const SideCardLayout = (props: SideCardLayoutProps) => {
    const {children, bgColor} = props;

    return (
        <div className={"p-3 phone:px-0 w-72 phone:w-full"}>
            <div className={`rounded-md text-white ${bgColor}`}>
                {children}
            </div>
        </div>
    )
}

export default SideCardLayout;