import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";
import {useViewportSize} from "@mantine/hooks";

type SidebarSubItemsMenuLayoutProps = LayoutProps & {
    isShown: boolean,
    subMenuStyles?: string,
}

const SidebarSubItemsMenuLayout = (props: SidebarSubItemsMenuLayoutProps) => {
    const {children, isShown, subMenuStyles} = props;
    const {width} = useViewportSize();
    const isMobile = width < 960;

    return (
        <AnimatePresence>
            {isShown && (
                <motion.div
                    className={`bg-white absolute phone:static phone:left-0 phone:top-[100%] top-0 left-[100%] ${subMenuStyles}`}
                    initial={{opacity: 0, y: isMobile ? 0 : 10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: isMobile ? 0 : 10}}
                    transition={{duration: isMobile ? 0 : 0.3}}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SidebarSubItemsMenuLayout;