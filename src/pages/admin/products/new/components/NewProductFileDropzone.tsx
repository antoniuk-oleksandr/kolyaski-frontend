import {Text} from '@mantine/core';
import {IconPhoto} from '@tabler/icons-react';
import {Dropzone} from '@mantine/dropzone';
import '@mantine/dropzone/styles.css';
import {useFormContext} from "react-hook-form";
import MessageFormError from "@/pages/contacts/components/MessageFormError";
import {useViewportSize} from "@mantine/hooks";

export const NewProductFileDropzone = () => {
    const {setValue} = useFormContext();
    const error = useFormContext().formState.errors.files;
    const {width} = useViewportSize();
    const isMobile = width < 960;
    const message = isMobile ? "Натисніть, щоб вибрати файли" : "Перетягніть зображення сюди або натисніть, щоб вибрати файли";

    return (
        <div className={"relative"}>
            <Dropzone
                className={"!outline-none mb-1"}
                onDrop={(files) => setValue('files', files)}
                onReject={(files) => console.log('rejected files', files)}
                maxSize={30 * 1024 ** 2}
                accept={[]}
            >
                <div
                    className={"h-52 relative text-neutral-600 gap-y-3 flex flex-col items-center justify-center text-center "}>
                    <IconPhoto
                        className={"size-14"}
                        stroke={1.5}
                    />
                    <div>
                        <Text size="xl" inline>{message}</Text>
                        <Text size="sm" c="dimmed" inline mt={7}>
                            Додайте скільки завгодно файлів, кожен файл не повинен перевищувати 30 Мб
                        </Text>
                    </div>
                </div>
            </Dropzone>
            <MessageFormError error={error}/>
        </div>
    )
}

export default NewProductFileDropzone;