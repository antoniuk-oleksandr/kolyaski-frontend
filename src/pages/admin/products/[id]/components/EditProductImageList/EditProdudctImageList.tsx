import EditProductImageListLayout from "./EditProductImageListLayout";
import {Reorder} from "framer-motion";
import {FaTrash} from "react-icons/fa6";
import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import EditProductDeleteImageButton
    from "@/pages/admin/products/[id]/components/EditProductDeleteImageButton/EditProductDeleteImageButton";
import EditProductImage from "@/pages/admin/products/[id]/components/EditProductImage/EditProductImage";
import {ProductData} from "@/types/ProductData";
import {useFormContext} from "react-hook-form";
import {Dropzone} from "@mantine/dropzone";
import EditProductImageDropZone
    from "@/pages/admin/products/[id]/components/EditProductImageDropZone/EditProductImageDropZone";

type EditProductImageListProps = {
    product: ProductData
}

const EditProductImageList = (props: EditProductImageListProps) => {
    const {product} = props;
    const [items, setItems] = useState(product.images);
    const [dragging, setDragging] = useState(false);
    const {setValue} = useFormContext();

    useEffect(() => {
        setValue("images", items);
    }, [items]);

    return (
        <EditProductImageListLayout items={items} setItems={setItems}>
            <EditProductImageDropZone setItems={setItems}/>
            {items.map((item, index) => (
                <Reorder.Item
                    onDragStart={() => setDragging(true)}
                    onDragEnd={() => setDragging(false)}
                    value={item} key={item}
                >
                    <EditProductImage setItems={setItems} dragging={dragging} src={item} index={index}/>
                </Reorder.Item>
            ))}
        </EditProductImageListLayout>
    )
}

export default EditProductImageList;