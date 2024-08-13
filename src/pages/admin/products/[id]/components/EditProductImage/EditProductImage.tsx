import React, {Dispatch, SetStateAction} from "react";
import EditProductImageLayout from "@/pages/admin/products/[id]/components/EditProductImage/EditProductImageLayout";
import EditProductDeleteImageButton
    from "@/pages/admin/products/[id]/components/EditProductDeleteImageButton/EditProductDeleteImageButton";

type EditProductImageProps = {
    src: string,
    dragging: boolean,
    index: number,
    setItems: Dispatch<SetStateAction<string[]>>,
}

const EditProductImage = (props: EditProductImageProps) => {
    const {src} = props;

    return (
        <EditProductImageLayout {...props}>
            <img
                draggable={false}
                alt="img" className="object-center h-full object-contain rounded-md" src={src}
            />
            <EditProductDeleteImageButton {...props}/>
        </EditProductImageLayout>
    )
}

export default EditProductImage;