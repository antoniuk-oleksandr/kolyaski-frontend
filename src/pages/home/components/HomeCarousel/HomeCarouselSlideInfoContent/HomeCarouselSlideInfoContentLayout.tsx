import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";

type HomeCarouselSlideInfoContentLayoutProps = LayoutProps & {
    isSelected: boolean,
}

const HomeCarouselSlideInfoContentLayout = (props: HomeCarouselSlideInfoContentLayoutProps) => {
    const {children, isSelected} = props;

    return (
        <AnimatePresence>
            {isSelected && (
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 50}}
                    transition={{duration: 0.8}}
                    className={"size-72 phone:h-67.5 phone:w-67.5 bg-secondary p-6 rounded-md relative"}>
                    {children}
                    <div className={"absolute bg-secondary w-full h-full left-0 opacity-50 -z-10"}></div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default HomeCarouselSlideInfoContentLayout;