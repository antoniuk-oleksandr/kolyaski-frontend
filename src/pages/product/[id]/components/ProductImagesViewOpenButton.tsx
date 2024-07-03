import {AnimatePresence, motion} from "framer-motion";
import {FaSearch} from "react-icons/fa";
import {Dispatch, SetStateAction} from "react";

type ProductImagesViewOpenButton = {
    isHovered: boolean,
    setIsHovered: Dispatch<SetStateAction<boolean>>,
    setIsViewShown: Dispatch<SetStateAction<boolean>>,
}

const ProductImagesViewOpenButton = (types: ProductImagesViewOpenButton) => {
    const {isHovered, setIsHovered, setIsViewShown} = types;

    return (
        <AnimatePresence>
            {isHovered && (
                <motion.button
                    onClick={() => {
                        setIsViewShown(true)
                        setIsHovered(false)
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                    className={"absolute top-3 right-3 text-sm p-2 bg-white hover:text-white hover:bg-neutral-800 bg-opacity-40 rounded-full grid place-items-center outline-none active:scale-95"}
                    type={"button"}
                >
                    <FaSearch/>
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default ProductImagesViewOpenButton;