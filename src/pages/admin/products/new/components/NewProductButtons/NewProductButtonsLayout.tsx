import {LayoutProps} from "@/types/LayoutProps";

const NewProductButtonsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex justify-end gap-x-3 phone:justify-between"}>
            {children}
        </div>
    )
}

export default NewProductButtonsLayout;