import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

type CommentsMainMarkButtonLayoutProps = LayoutProps & {
    checked: boolean,
}

const CommentsMainMarkButtonLayout = (props: CommentsMainMarkButtonLayoutProps) => {
    const {children, checked} = props;

    return (
        <AnimatePresence>
            {checked && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                    className={"flex grid place-items-center"}>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CommentsMainMarkButtonLayout;