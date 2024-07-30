import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

type CommentElementHoverItemsLayoutProps = LayoutProps & {
    commentHovered: boolean,
    isSelected: boolean,
}

const CommentElementHoverItemsLayout = (props: CommentElementHoverItemsLayoutProps) => {
    const {children, commentHovered, isSelected} = props;

    return (
        <AnimatePresence>
            {commentHovered && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                    className={`absolute right-6 flex items-center justify-end gap-x-5 text-base w-18 
                    ${isSelected ? 'bg-blue-500' : 'bg-comments'}`}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CommentElementHoverItemsLayout;