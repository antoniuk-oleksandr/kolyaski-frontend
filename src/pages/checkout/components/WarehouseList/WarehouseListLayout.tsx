import {LayoutProps} from "@/types/LayoutProps";
import {Warehouse} from "@/types/Warehouse";
import {AnimatePresence, motion} from "framer-motion";
import {Children, Dispatch, SetStateAction} from "react";

type WarehouseListLayoutProps = LayoutProps & {
    warehouseList: undefined | Warehouse[],
    isMenuShown: boolean,
    setWarehouseListElement: Dispatch<SetStateAction<HTMLDivElement | null>>,
}

const WarehouseListLayout = (props: WarehouseListLayoutProps) => {
    const {children, warehouseList, isMenuShown, setWarehouseListElement} = props;
    const childrenArr = Children.toArray(children);

    return (
        <AnimatePresence>
            {isMenuShown && warehouseList && warehouseList.length > 0 && (
                <motion.div
                    ref={(ref) => setWarehouseListElement(ref)}
                    className={"absolute top-13 shadow z-10 left-0 w-full bg-white rounded-md"}
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: -10}}
                    exit={{opacity: 0, y: -10}}
                >
                    {childrenArr[0]}
                    <div className={"max-h-44 overflow-y-auto"}>
                        {childrenArr.slice(1, childrenArr.length)}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default WarehouseListLayout;