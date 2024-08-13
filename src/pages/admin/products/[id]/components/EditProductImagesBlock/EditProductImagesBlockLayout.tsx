import {LayoutProps} from "@/types/LayoutProps";

const EditProductImagesBlockLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full flex flex-col mb-6"}>
            {children}
        </div>
    )
}

export default EditProductImagesBlockLayout;