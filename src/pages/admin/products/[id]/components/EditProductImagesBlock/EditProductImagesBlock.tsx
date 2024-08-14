import EditProductImagesBlockLayout from "./EditProductImagesBlockLayout";
import {useLocalStorage, useViewportSize} from "@mantine/hooks";
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {FaTrash} from "react-icons/fa6";
import {Reorder} from "framer-motion";
import {useRouter} from "next/router";
import {Html} from "next/document";
import EditProductImageList from "@/pages/admin/products/[id]/components/EditProductImageList/EditProdudctImageList";
import {ProductData} from "@/types/ProductData";
import MessageFormError from "@/pages/contacts/components/MessageFormError";
import {useFormContext} from "react-hook-form";

type EditProductImagesBlockProps = {
    images: string[],
}

const EditProductImagesBlock = (props: EditProductImagesBlockProps) => {
    const error = useFormContext().formState.errors.images;

    return (
        <EditProductImagesBlockLayout>
            <h2 className="text-xl font-semibold col-span-2">Зображення</h2>
            <EditProductImageList isErrorPresent={!!error} {...props}/>
            <MessageFormError error={error}/>
        </EditProductImagesBlockLayout>
    )
}

export default EditProductImagesBlock;
