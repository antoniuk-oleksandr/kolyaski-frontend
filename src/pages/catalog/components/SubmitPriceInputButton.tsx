import {InvalidPrice} from "@/types/InvalidPrice";
import { useFormContext } from "react-hook-form";

type SubmitPriceInputButtonProps = {
    priceData: [number, number],
}

const SubmitPriceInputButton = (props: SubmitPriceInputButtonProps) => {
    const {errors} = useFormContext().formState;

    return (
        <button
            // disabled={Object.entries(errors).map(([key, value]) => item.message) !== InvalidPrice.Nothing}
            type={"submit"}
            className={` duration-200 ease-out  outline-none rounded-md px-4  font-medium flex items-center ml-2 h-8
            ${InvalidPrice.Nothing === InvalidPrice.Nothing ? 'bg-primary hover:bg-white hover:text-neutral-600 text-white active:scale-95' : 'bg-neutral-300'}`}
        >OK
        </button>
    )
}

export default SubmitPriceInputButton;