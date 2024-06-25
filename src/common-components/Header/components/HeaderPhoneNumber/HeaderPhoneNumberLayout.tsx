import {LayoutProps} from "@/types/LayoutProps";

const HeaderPhoneNumberLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex text-secondary items-center gap-x-1 text-sm font-medium phone:hidden"}>
            {children}
        </div>
    )
}

export default HeaderPhoneNumberLayout;