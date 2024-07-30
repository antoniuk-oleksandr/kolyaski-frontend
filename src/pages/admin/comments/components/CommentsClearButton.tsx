import ComponentElementIcon from "@/pages/admin/comments/components/ComponentElementIcon";
import {MdClose} from "react-icons/md";
import {Tooltip} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {AnimatePresence, motion} from "framer-motion";
import {setCommentsSearchValue} from "@/redux/comments-slice";
import {Dispatch, SetStateAction} from "react";

type CommentsClearButtonProps = {
    inputValue: string,
    setInputValue: Dispatch<SetStateAction<string>>,
}

const CommentsClearButton = (props: CommentsClearButtonProps) => {
    const {inputValue, setInputValue} = props;

    return (
        <AnimatePresence>
            {inputValue.length > 0 && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                >
                    <Tooltip className={"!mt-2"} label={"Cтерти"} position={"bottom"}>
                        <div className={"m-[13px] grid place-items-center"}>
                            <ComponentElementIcon
                                action={() => setInputValue("")}
                                lightOverlay
                                icon={<MdClose className={"text-xl"}/>}
                            />
                        </div>
                    </Tooltip>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CommentsClearButton;