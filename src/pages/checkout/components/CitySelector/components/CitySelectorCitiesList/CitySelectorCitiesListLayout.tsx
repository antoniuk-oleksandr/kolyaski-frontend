import {LayoutProps} from "@/types/LayoutProps";
import {City} from "@/types/City";
import {AnimatePresence, motion} from "framer-motion";

type CitySelectorCitiesListLayoutProps = LayoutProps & {
    responseCities: City[] | undefined,
    isDropdownOpen: boolean,
}

const CitySelectorCitiesListLayout = (props: CitySelectorCitiesListLayoutProps) => {
    const {children, responseCities, isDropdownOpen} = props;

    return (
        <AnimatePresence>
            {isDropdownOpen && responseCities && responseCities.length > 0 && (
                <motion.div
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -10}}
                    transition={{duration: 0.2}}
                    className={"absolute rounded-md top-16 shadow bg-white left-0 w-full max-h-44 overflow-y-auto"}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CitySelectorCitiesListLayout;