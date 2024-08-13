import {LayoutProps} from "@/types/LayoutProps";
import {Reorder} from "framer-motion";
import {FaTrash} from "react-icons/fa6";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useViewportSize} from "@mantine/hooks";
import {ScrollArea} from "@mantine/core";

type EditProductImageListLayoutProps = LayoutProps & {
    items: string[],
    setItems: Dispatch<SetStateAction<string[]>>
}

const EditProductImageListLayout = (props: EditProductImageListLayoutProps) => {
    const {children, items, setItems} = props;
    const {width} = useViewportSize();
    const isMobile = width < 960;
    const blockWidth = isMobile ? -16 * 2 - 12 * 2 : -208 - 12 * 4 - 16 * 2;
    return (
        <ScrollArea maw={`calc(100vw + ${blockWidth}px)`}>
            <div
                className="flex w-full overflow-x-auto product-images py-1.5 gap-x-3">
                <Reorder.Group
                    className={"flex gap-x-3"} as={"ul"} axis={"x"}
                    onReorder={setItems}
                    values={items}
                >
                    {children}
                </Reorder.Group>
            </div>
        </ScrollArea>
    )
}

export default EditProductImageListLayout;