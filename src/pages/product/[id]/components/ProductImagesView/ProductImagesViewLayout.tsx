import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

type ProductImagesViewLayoutProps = LayoutProps & {
    isViewShown: boolean,
}

const ProductImagesViewLayout = (props: ProductImagesViewLayoutProps) => {
    const {children, isViewShown} = props;

    return (
        <AnimatePresence>
            {isViewShown && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                    className={"fixed w-full left-0 top-0 h-svh bg-black bg-opacity-90 z-20"}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ProductImagesViewLayout;