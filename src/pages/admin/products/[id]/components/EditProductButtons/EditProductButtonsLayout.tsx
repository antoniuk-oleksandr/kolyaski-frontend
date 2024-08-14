import {LayoutProps} from "@/types/LayoutProps";

const EditProductButtonsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex justify-end gap-3 phone:justify-between phone:grid phone:grid-cols-2">
            {children}
        </div>
    )
}

export default EditProductButtonsLayout;