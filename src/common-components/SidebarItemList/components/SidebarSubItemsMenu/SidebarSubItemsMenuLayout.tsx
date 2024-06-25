import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

type SidebarSubItemsMenuLayoutProps = LayoutProps & {
    isShown: boolean,
    subMenuStyles?: string,
}

const SidebarSubItemsMenuLayout = (props: SidebarSubItemsMenuLayoutProps) => {
    const {children, isShown, subMenuStyles} = props;

    return (
        <AnimatePresence>
            {isShown && (
                <motion.div
                    className={`bg-white absolute top-0 left-[100%] ${subMenuStyles}`}
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 10}}
                    transition={{duration: 0.3}}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SidebarSubItemsMenuLayout;