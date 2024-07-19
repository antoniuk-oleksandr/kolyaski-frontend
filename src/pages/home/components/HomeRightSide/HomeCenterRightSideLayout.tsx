import {LayoutProps} from "@/types/LayoutProps";

const HomeCenterRightSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={""}>
            {children}
        </div>
    )
}

export default HomeCenterRightSideLayout;