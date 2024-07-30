import {LayoutProps} from "@/types/LayoutProps";
import {MutableRefObject, useRef} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useCommentsMenu} from "@/pages/admin/use-effects/use-comments-menu";

type CommentsSelectMenuLayoutProps = LayoutProps & {
    menuButtonRef: MutableRefObject<HTMLDivElement | null>,
}

const CommentsSelectMenuLayout = (props: CommentsSelectMenuLayoutProps) => {
    const {children, menuButtonRef} = props;
    const menuRef = useRef<HTMLDivElement | null>(null);
    const {isMenuOpen} = useCommentsMenu(menuRef, menuButtonRef);

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -10}}
                    transition={{duration: 0.2}}
                    ref={menuRef}
                    className={"absolute left-0 top-6 shadow-lg z-10 bg-white rounded-md  overflow-hidden"}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CommentsSelectMenuLayout;