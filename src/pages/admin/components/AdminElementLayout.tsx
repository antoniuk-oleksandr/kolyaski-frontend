import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

const AdminElementLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                className={"p-3 phone:px-0 flex flex-col flex-grow"}>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default AdminElementLayout;