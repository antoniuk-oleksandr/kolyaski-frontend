import {LayoutProps} from "@/types/LayoutProps";

const FooterLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
}

export default FooterLayout;