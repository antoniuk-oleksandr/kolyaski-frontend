import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

type ProductImagesViewPanelLayoutProps = LayoutProps & {
    idle: boolean,
}

const ProductImagesViewPanelLayout = (props: ProductImagesViewPanelLayoutProps) => {
    const {children, idle} = props;

    return (
        <div className={"w-full h-11"}>
            <AnimatePresence>
                {!idle && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}
                        className={"flex justify-between items-center"}>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ProductImagesViewPanelLayout;