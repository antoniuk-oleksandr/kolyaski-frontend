import {LayoutProps} from "@/types/LayoutProps";

const EditProductDescriptionElementLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"mb-6"}>
            {children}
        </div>
    )
}

export default EditProductDescriptionElementLayout;