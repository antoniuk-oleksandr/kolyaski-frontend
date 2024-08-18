import {rem} from '@mantine/core';
import {IconPhoto} from '@tabler/icons-react';
import {Dropzone, DropzoneProps, IMAGE_MIME_TYPE} from '@mantine/dropzone';
import {Dispatch, SetStateAction} from "react";
import {handleProductImageDrop} from "@/pages/admin/products/[id]/handlers";

type EditProductImageDropZoneProps = Partial<DropzoneProps> & {
    setItems: Dispatch<SetStateAction<string[]>>,
    isErrorPresent: boolean,
}

const EditProductImageDropZone = (props: EditProductImageDropZoneProps) => {
    const {setItems, isErrorPresent} = props;

    return (
        <Dropzone
            onDrop={(files) => handleProductImageDrop(files, setItems)}
            onReject={(files) => console.log('rejected files', files)}
            maxSize={30 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            className={`h-full !outline-none flex rounded-md cursor-pointer ring-1 bg-white m-0.5 p-3 aspect-3x4 w-52 
            ${isErrorPresent ? 'ring-red-500 text-red-500' : 'ring-neutral-200'}`}
        >
            <div className={"flex justify-center flex-col items-center gap-y-3 h-full text-neutral-600"}>
                <IconPhoto
                    style={{width: rem(52), height: rem(52)}}
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