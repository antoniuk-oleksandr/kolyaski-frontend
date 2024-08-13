import {FaTrash} from "react-icons/fa6";
import React, {Dispatch, SetStateAction} from "react";

type EditProductDeleteImageButtonProps = {
    index: number,
    setItems: Dispatch<SetStateAction<string[]>>,
}

const EditProductDeleteImageButton = (props: EditProductDeleteImageButtonProps) => {
    const {index, setItems} = props;

    return (
        <button
            onClick={() => setItems((items) => items.filter((_, i) => i !== index))}
            className={"absolute outline-none top-3 right-3 cursor-pointer hover:bg-neutral-200 duration-200 ease-out rounded-full hover:ring-neutral-200 hover:ring-8"}
        >
            <FaTrash className={""}/>
        </button>
    )
}

export default EditProductDeleteImageButton;