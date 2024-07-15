import {Warehouse} from "@/types/Warehouse";
import {FaChevronDown} from "react-icons/fa6";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import WarehouseSelectedElementLayout
    from "@/pages/checkout/components/WarehouseSelectedElement/WarehouseSelectedElementLayout";
import {useFormContext} from "react-hook-form";
import {Box, LoadingOverlay} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

type WarehouseSelectedElementProps = {
    warehouse: Warehouse | undefined,
    setIsMenuShown: Dispatch<SetStateAction<boolean>>,
    setWarehouseElement: Dispatch<SetStateAction<HTMLDivElement | null>>,
    isWarehouseRequestSending: boolean,
}

const WarehouseSelectedElement = (props: WarehouseSelectedElementProps) => {
    const {warehouse} = props
    const {formState: {errors}} = useFormContext();
    const isErrorPresent = Object.keys(errors).includes('warehouse');

    return (
            <WarehouseSelectedElementLayout isErrorPresent={isErrorPresent} {...props}>
                <span>{warehouse ? warehouse.warehouse : 'Виберіть відповідне відділення'}</span>
                <FaChevronDown/>
                {isErrorPresent && (
                    <p className={"absolute top-9 left-0"}>Відділення Нової Пошти є обов'язковим</p>
                )}
            </WarehouseSelectedElementLayout>
    )
}

export default WarehouseSelectedElement;