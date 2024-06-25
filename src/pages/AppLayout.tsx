import {LayoutProps} from "@/types/LayoutProps";
import dynamic from "next/dynamic";
import {motion} from "framer-motion";

const MantineProvider = dynamic(() => import("@mantine/core").then(mod => mod.MantineProvider), {ssr: false});

const AppLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <MantineProvider>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, easings: "easeOut"}}
            >
                {children}
            </motion.div>
        </MantineProvider>
    );
};

export default AppLayout;
