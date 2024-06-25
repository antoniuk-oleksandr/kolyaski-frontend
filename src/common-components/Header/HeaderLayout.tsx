import {LayoutProps} from "@/types/LayoutProps";

const HeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
}

export default HeaderLayout;