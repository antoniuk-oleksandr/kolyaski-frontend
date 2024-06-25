import {LayoutProps} from "@/types/LayoutProps";

const FooterSocialMediaButtonsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-3 text-xl text-secondary"}>
            {children}
        </div>
    )
}

export default FooterSocialMediaButtonsLayout;