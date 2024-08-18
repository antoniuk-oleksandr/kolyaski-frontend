import {LayoutProps} from "@/types/LayoutProps";
import {Modal} from "@mantine/core";
import {useDisclosure, useViewportSize} from "@mantine/hooks";
import {useNewProductModal} from "@/pages/admin/use-effects/use-new-product-modal";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {AdminModalSignalType} from "@/types/AdminModalSignalType";
import {handleNewProductModalSubmit} from "@/pages/admin/products/new/handlers";
import {FormProvider, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {useRouter} from "next/router";
import {newProductFilesScheme} from "@/pages/admin/products/new/helpers";
import {zodResolver} from "@hookform/resolvers/zod";

type NewProductModalLayoutProps = LayoutProps & {
    prevModalValue: MutableRefObject<AdminModalSignalType>,
    setSending: Dispatch<SetStateAction<boolean>>,
}

const NewProductModalLayout = (props: NewProductModalLayoutProps) => {
    const {children, prevModalValue, setSending} = props;
    const {tokenInfo} = useSelector((state: ReduxState) => state.token);
    const dispatch = useDispatch();
    const router = useRouter();
    const methods = useForm({
        resolver: zodResolver(newProductFilesScheme),
        defaultValues: {files: []}
    });
    const [opened, {open, close}] = useDisclosure(false);
    useNewProductModal(open, close, prevModalValue);
    const {width} = useViewportSize();
    const isMobile = width < 960;

    return (
        <FormProvider {...methods}>
            <Modal
                fullScreen={isMobile}
                size={"xl"}
                className={"outline-none"}
                centered
                opened={opened}
                onClose={close}
                title="Додати товар з файлу"
            >
                <form
                    onSubmit={methods.handleSubmit((data) =>
                        handleNewProductModalSubmit(setSending, router, data.files as File[], tokenInfo, dispatch))}
                    className={"flex flex-col gap-y-6 phone:mt-[calc(50%)]"}
                >
                    {children}
                </form>
            </Modal>
        </FormProvider>
    )
}

export default NewProductModalLayout;