import {Text} from '@mantine/core';
import {Dropzone} from '@mantine/dropzone';
import '@mantine/dropzone/styles.css';
import {useFormContext} from "react-hook-form";
import MessageFormError from "@/pages/contacts/components/MessageFormError";
import {useViewportSize} from "@mantine/hooks";
import {handleProductFileUpload} from "@/pages/admin/products/new/handlers";
import {useDispatch, useSelector} from "react-redux";
import {FaFile} from 'react-icons/fa6';
import {ReduxState} from "@/types/ReduxState";
import {useRouter} from "next/router";
import {Dispatch, SetStateAction} from "react";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";

type NewProductFileDropzoneProps = {
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    selectOptions: string[],
}

export const NewProductFileDropzone = (props: NewProductFileDropzoneProps) => {
    const {setSelectedCategories, selectOptions} = props;
    const {setValue} = useFormContext();
    const {tokenInfo} = useSelector((state: ReduxState) => state.token);
    const dispatch = useDispatch();
    const router = useRouter();
    const error = useFormContext().formState.errors.files;
    const {width} = useViewportSize();
    const isMobile = width < 960;
    const message = isMobile ? "Натисніть, щоб вибрати файл" : "Перетягніть файл сюди або натисніть, щоб вибрати файл";

    return (
        <div className={"relative"}>
            <Dropzone
                className={"!outline-none mb-1"}
                onDrop={(files) =>
                    handleProductFileUpload(
                        router, files, tokenInfo, dispatch,
                        setSelectedCategories, setValue, selectOptions[0]
                    )}
                onReject={(files) => console.log('rejected files', files)}
                maxSize={30 * 1024 ** 2}
                accept={[]}
            >
                <div
                    className={"h-52 relative text-neutral-600 gap-y-3 flex flex-col items-center justify-center text-center "}>
                    <FaFile
                        className={"size-14"}
                    />
                    <div>
                        <Text size="xl" inline>{message}</Text>
                        <Text size="sm" c="dimmed" inline mt={7}>
                            Файл повинен не перевищувати 30 Мб
                        </Text>
                    </div>
                </div>
            </Dropzone>
            <MessageFormError error={error}/>
        </div>
    )
}

export default NewProductFileDropzone;