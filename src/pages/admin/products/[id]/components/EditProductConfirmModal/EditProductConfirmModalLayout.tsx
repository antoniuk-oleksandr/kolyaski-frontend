import {LayoutProps} from "@/types/LayoutProps";
import {Modal} from "@mantine/core";

type EditProductConfirmModalLayoutProps = LayoutProps & {
    close: () => void,
    opened: boolean,
}

const EditProductConfirmModalLayout = (props: EditProductConfirmModalLayoutProps) => {
    const {children, opened, close} = props;

    return (
        <Modal centered opened={opened} onClose={close} title="Ви впевнені, що хочете видалити цей товар?">
            <div className={"flex justify-end gap-x-3"}>
                {children}
            </div>
        </Modal>
    )
}

export default EditProductConfirmModalLayout;