import {LayoutProps} from "@/types/LayoutProps";

const EditProductButtonsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="flex justify-end space-x-3 h-11">
            {children}
        </div>
    )
}

export default EditProductButtonsLayout;