import {LayoutProps} from "@/types/LayoutProps";

const ContactsLeftSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col gap-y-8"}>
            {children}
        </div>
    )
}

export default ContactsLeftSideLayout;