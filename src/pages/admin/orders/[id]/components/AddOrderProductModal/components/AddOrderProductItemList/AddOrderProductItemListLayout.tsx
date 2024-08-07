import {LayoutProps} from "@/types/LayoutProps";
import {ProductData} from "@/types/ProductData";
import {AnimatePresence, motion} from "framer-motion";

type AddOrderProductItemListLayoutProps = LayoutProps & {
    receivedProducts: ProductData[] | null,
}

const AddOrderProductItemListLayout = (props: AddOrderProductItemListLayoutProps) => {
    const {children, receivedProducts} = props;

    return (
        <AnimatePresence>
            {receivedProducts && receivedProducts.length > 0 && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                    className={"max-h-[600px] overflow-y-auto"}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default AddOrderProductItemListLayout;