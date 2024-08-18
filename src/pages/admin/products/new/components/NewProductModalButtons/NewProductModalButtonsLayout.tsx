import {LayoutProps} from "@/types/LayoutProps";

const NewProductModalButtonsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-3 justify-end items-center phone:justify-between"}>
            {children}
        </div>
    )
}

export default NewProductModalButtonsLayout;