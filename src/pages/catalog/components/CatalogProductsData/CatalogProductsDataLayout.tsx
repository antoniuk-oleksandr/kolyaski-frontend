import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

type CatalogProductsDataLayoutProps = LayoutProps & {
    isShown: boolean | null,
}

const CatalogProductsDataLayout = (props: CatalogProductsDataLayoutProps) => {
    const {children, isShown} = props;

    return (
        <AnimatePresence>
            {isShown && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                    className={""}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CatalogProductsDataLayout;