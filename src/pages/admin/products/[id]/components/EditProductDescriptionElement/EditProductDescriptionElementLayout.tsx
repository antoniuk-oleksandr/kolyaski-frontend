import {LayoutProps} from "@/types/LayoutProps";

const EditProductDescriptionElementLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"mb-5 pb-1 relative"}>
            {children}
        </div>
    )
}

export default EditProductDescriptionElementLayout;