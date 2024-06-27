import {LayoutProps} from "@/types/LayoutProps";

const MessageFormInputLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col relative"}>
            {children}
        </div>
    )
}

export default MessageFormInputLayout;