import {LayoutProps} from "@/types/LayoutProps";

const HeaderNavbarLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"text-white flex items-center gap-x-3 flex-wrap phone:hidden"}>
            {children}
        </div>
    )
}

export default HeaderNavbarLayout;