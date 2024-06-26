import {LayoutProps} from "@/types/LayoutProps";
import {motion} from "framer-motion";

const HomeCarouselSlideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"relative rounded-md overflow-hidden flex w-full flex-shrink-0"}>
            <motion.div
                className={"flex-shrink-0 flex w-full"}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 1}}
                transition={{duration: 2}}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default HomeCarouselSlideLayout;