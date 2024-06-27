import {useDisclosure} from '@mantine/hooks';
import {Dialog, Text} from '@mantine/core';
import {useSuccessDialog} from "@/common-components/SuccessDialog/use-success-dialog";

const SuccessDialog = () => {
    const [opened, {toggle, close}] = useDisclosure(false);
    useSuccessDialog(toggle);

    return (
        <Dialog position={{bottom: 12, left: 12}} opened={opened} withCloseButton onClose={close} size="xl" radius="md">
            <Text size="md" fw={400}>Ваше повідомлення було успішно відправлено.</Text>
        </Dialog>
    )
}

export default SuccessDialog;