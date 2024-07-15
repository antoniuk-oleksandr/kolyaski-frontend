import {Dispatch, MutableRefObject, SetStateAction, useRef} from "react";
import {handleWarehouseInputChange} from "@/pages/checkout/handlers";

type WareHouseSelectorElementInputProps = {
    setInputValue: Dispatch<SetStateAction<string>>,
    inputValue: string,
    inputRef: MutableRefObject<HTMLInputElement | null>,
}

const WareHouseSelectorElementInput = (props: WareHouseSelectorElementInputProps) => {
    const {inputValue, setInputValue, inputRef} = props;

    return (
        <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => handleWarehouseInputChange(e, setInputValue)}
            placeholder={"Введіть адресу або номер відділення"}
            className={"px-3 rounded-md py-2 bg-white w-full ring-1 ring-neutral-200 hover:ring-primary focus:ring-primary outline-none text-sm duration-200 ease-out focus::ring-primary"}
            type="text"
        />
    )
}

export default WareHouseSelectorElementInput;