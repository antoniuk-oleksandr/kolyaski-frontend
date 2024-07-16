import {LayoutProps} from "@/types/LayoutProps";
import {Warehouse} from "@/types/Warehouse";
import {AnimatePresence, motion} from "framer-motion";

type WarehouseWorkTimeLayoutProps = LayoutProps & {
    warehouse: Warehouse | undefined,

}

const WarehouseWorkTimeLayout = (props: WarehouseWorkTimeLayoutProps) => {
    const {children, warehouse} = props;

    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}
                className={"mt-3 text-xs grid flx flex-col gap-y-1"}
            >
                {warehouse && (
                    <>
                        {children}
                    </>
                )}
            </motion.div>
        </AnimatePresence>
    )
}

export default WarehouseWorkTimeLayout;