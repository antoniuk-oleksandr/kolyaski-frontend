import {LayoutProps} from "@/types/LayoutProps";

const EditProductSelectLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"text-sm relative"}>
            {children}
        </div>
    )
}

export default EditProductSelectLayout;