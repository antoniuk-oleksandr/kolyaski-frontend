import {LayoutProps} from "@/types/LayoutProps";

const HeaderDrawerLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"hidden phone:flex phone:justify-end phone:px-3 phone:w-full"}>
            {children}
        </div>
    )
}

export default HeaderDrawerLayout;