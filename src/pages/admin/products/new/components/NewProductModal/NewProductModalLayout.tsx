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
import {clearNewProductModal, newProductFilesScheme} from "@/pages/admin/products/new/helpers";
import {zodResolver} from "@hookform/resolvers/zod";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";

type NewProductModalLayoutProps = LayoutProps & {
    prevModalValue: MutableRefObject<AdminModalSignalType>,
    selectedCategories: CategoryCheckboxMap | null,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
}

const NewProductModalLayout = (props: NewProductModalLayoutProps) => {
    const {children, prevModalValue, selectedCategories, setSelectedCategories} = props;
    const {tokenInfo} = useSelector((state: ReduxState) => state.token);
    const dispatch = useDispatch();
    const router = useRouter();
    const methods = useForm({
        // resolver: zodResolver(newProductFilesScheme),
        defaultValues: {file: null} as { file: File | null },
    });
    const [opened, {open, close}] = useDisclosure(false);
    useNewProductModal(open, close, prevModalValue);
    const {width} = useViewportSize();
    const isMobile = width < 960;

    return (
        <FormProvider {...methods}>
            <Modal.Root
                fullScreen={isMobile}
                size={"xl"}
                className={"outline-none"}
                centered
                opened={opened}
                onClose={close}
            >
                <Modal.Overlay/>
                <Modal.Content>
                    <Modal.Header className={"!px-6"}>
                        <Modal.Title>Додати товар з файлу</Modal.Title>
                        <Modal.CloseButton
                            onClick={() =>
                                clearNewProductModal(setSelectedCategories, methods.reset)
                            }
                            className={"!absolute top-4 right-4"}
                        />
                    </Modal.Header>
                    <Modal.Body className={"!px-0"}>
                        <form
                            onSubmit={methods.handleSubmit((data) =>
                                handleNewProductModalSubmit(
                                    router, data.file, tokenInfo,
                                    dispatch, setSelectedCategories, selectedCategories
                                )
                            )}
                        >
                            {children}
                        </form>
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>

        </FormProvider>
    )
}

export default NewProductModalLayout;