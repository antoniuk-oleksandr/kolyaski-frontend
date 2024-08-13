import {rem} from '@mantine/core';
import {IconPhoto} from '@tabler/icons-react';
import {Dropzone, DropzoneProps, IMAGE_MIME_TYPE} from '@mantine/dropzone';
import {Dispatch, SetStateAction} from "react";
import {handleProductImageDrop} from "@/pages/admin/products/[id]/handlers";

type EditProductImageDropZoneProps = Partial<DropzoneProps> & {
    setItems: Dispatch<SetStateAction<string[]>>,
}

const EditProductImageDropZone = (props: EditProductImageDropZoneProps) => {
    const {setItems} = props;

    return (
        <Dropzone
            onDrop={(files) => handleProductImageDrop(files, setItems)}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            className={"h-full !outline-none flex rounded-md cursor-pointer ring-1 ring-neutral-200 bg-white m-0.5 p-3 w-52"}
        >
            <div className={"flex justify-center flex-col items-center gap-y-3 h-full"}>
                <IconPhoto
                    style={{width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)'}}
                    stroke={1.5}
                />
                <p className={"text-center font-medium text-xl"}>
                    Додати зображення
                </p>
            </div>
        </Dropzone>
    )
}

export default EditProductImageDropZone;