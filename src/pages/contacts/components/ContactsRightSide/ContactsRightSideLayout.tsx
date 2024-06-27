import {LayoutProps} from "@/types/LayoutProps";

const ContactsRightSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"p-3 phone:px-0 flex-1 text-justify"}>
            {children}
        </div>
    )
}

export default ContactsRightSideLayout;