import {AnimatePresence, motion} from "framer-motion";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";
import {Dispatch, SetStateAction} from "react";
import {handleImagesViewControlClick} from "@/pages/product/[id]/handlers";

type ProductImagesViewCarouselButtonProps = {
    direction: 'right' | 'left',
    idle: boolean,
    setSelectedSlideIndex: Dispatch<SetStateAction<number>>,
    numberOfSlides: number,
}

const ProductImagesViewCarouselButton = (props: ProductImagesViewCarouselButtonProps) => {
    const {idle, direction, setSelectedSlideIndex, numberOfSlides} = props;

    return (
        <div className={`m-3 fixed top-[calc(100%/2-36px)] flex items-center mx-12 z-20 ${direction ==='right' ? 'right-0' : 'left-0'}`}>
        <AnimatePresence>
            {!idle && (
                <motion.div
                    className={"grid text-white place-items-center text-2xl active:scale-95 outline-none hover:text-primary duration-200 ease-out size-fit cursor-pointer"}>
                    {direction === 'right'
                        ? <FaArrowRight
                            onClick={() =>
                                handleImagesViewControlClick(setSelectedSlideIndex, numberOfSlides, 1)}
                        />
                        : <FaArrowLeft
                            onClick={() =>
                                handleImagesViewControlClick(setSelectedSlideIndex, numberOfSlides, -1)}
                        />
                    }
                </motion.div>
            )}
        </AnimatePresence>
        </div>
    )
}

export default ProductImagesViewCarouselButton;