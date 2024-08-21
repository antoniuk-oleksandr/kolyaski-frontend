import {useDisclosure} from "@mantine/hooks";
import {useOrderModal} from "@/pages/admin/use-effects/use-order-modal";
import {Modal} from "@mantine/core";
import MessageFormInput from "@/pages/contacts/components/MessageFormInput/MessageFormInput";
import AddOrderProductFormLayout
    from "@/pages/admin/orders/[id]/components/AddOrderProductModal/components/AddOrderProductForm/AddOrderProductFormLayout";
import AddOrderProductForm
    from "@/pages/admin/orders/[id]/components/AddOrderProductModal/components/AddOrderProductForm/AddOrderProductForm";
import {MutableRefObject} from "react";
import {AdminModalSignalType} from "@/types/AdminModalSignalType";

type AddOrderProductModalProps = {
    prevModalValue: MutableRefObject<AdminModalSignalType>;
}

const AddOrderProductModal = (props: AddOrderProductModalProps) => {
    const {prevModalValue} = props;
    const [opened, {toggle, close}] = useDisclosure(false);
    useOrderModal(toggle, close, prevModalValue);

    return (
        <Modal.Root className={"z-30"} radius={"md"} size={"xl"} centered opened={opened} onClose={close}>
            <Modal.Overlay/>
            <Modal.Content>
                <Modal.Header>
                    <Modal.Title>Додати товар</Modal.Title>
                    <Modal.CloseButton className={"!outline-none"}/>
                </Modal.Header>
                <Modal.Body>
                    <AddOrderProductFormLayout>
                        <AddOrderProductForm/>
                    </AddOrderProductFormLayout>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    )
}

export default AddOrderProductModal;