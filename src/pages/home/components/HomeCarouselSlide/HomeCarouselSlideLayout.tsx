import {LayoutProps} from "@/types/LayoutProps";
import {Carousel} from "@mantine/carousel";
import {motion} from "framer-motion";

const HomeCarouselSlideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        // <div className={""}>
        <Carousel.Slide className={"relative rounded-md overflow-hidden"}>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 1}}
                transition={{duration: 2}}
            >
                {children}
            </motion.div>
        </Carousel.Slide>
        // </div>
    )
}

export default HomeCarouselSlideLayout;