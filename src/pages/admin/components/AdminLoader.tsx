import LoaderElement from "@/common-components/LoaderElement";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const AdminLoader = () => {
    const useAdminLoader = () => {
        const [isLoading, setIsLoading] = useState<boolean>(false);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setIsLoading(true);
            }, 1000);

            return () => clearTimeout(timeout);
        }, []);

        return {isLoading};
    }

    const {isLoading} = useAdminLoader();

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}
                    className={"h-adminLoader w-full flex justify-center items-center"}>
                    <LoaderElement/>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default AdminLoader;