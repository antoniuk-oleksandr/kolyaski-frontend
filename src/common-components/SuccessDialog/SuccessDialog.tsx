import {useDisclosure} from '@mantine/hooks';
import {Text} from '@mantine/core';
import {useSuccessDialog} from "@/common-components/SuccessDialog/use-success-dialog";
import {IconCheck, IconX} from '@tabler/icons-react';
import {Notification, rem} from '@mantine/core';
import {AnimatePresence, motion} from "framer-motion";

const SuccessDialog = () => {
    const [opened, {toggle, close}] = useDisclosure(false);
    const {dialogText, success} = useSuccessDialog(toggle);

    const checkIcon = <IconCheck style={{width: rem(20), height: rem(20)}}/>;
    const closeIcon = <IconX style={{width: rem(20), height: rem(20)}}/>;

    return (
        <AnimatePresence>
            {opened && (
                <motion.div
                    initial={{opacity: 0, x: -16}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -16}}
                    transition={{duration: 0.2, easings: "easeOut"}}
                    className={"fixed z-20 bottom-0 left-0 ml-4 mb-4"}>
                    <Notification
                        icon={success ? checkIcon : closeIcon}
                        color={success ? "teal" : "red"}
                        title="Повідомлення"
                        mt="md" onClose={close}>
                        <Text size="md" fw={400}>{dialogText}</Text>
                    </Notification>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SuccessDialog;