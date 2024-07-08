import {LayoutProps} from "@/types/LayoutProps";
import {AnimatePresence, motion} from "framer-motion";
import {useViewportSize} from "@mantine/hooks";

type CartHoverMenuLayoutProps = LayoutProps & {
    isShown: boolean,
}

const CartHoverMenuLayout = (props: CartHoverMenuLayoutProps) => {
    const {children, isShown} = props;
    const {width} = useViewportSize();
    const isMobile = width <= 960;

    return (
        <AnimatePresence>
            {isShown && !isMobile && (
                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 10}}
                    transition={{duration: 0.2}}
                    className={"absolute overflow-y-auto max-h-96 font-normal z-10 flex flex-col gap-y-3 right-0 bottom-0-0 bg-white rounded-md shadow-xl p-6 w-80 text-sm"}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CartHoverMenuLayout;