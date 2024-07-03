import {PriceData} from "@/types/PriceData";
import {InvalidPrice} from "@/types/InvalidPrice";

type SubmitPriceInputButtonProps = {
    priceData: PriceData,
}

const SubmitPriceInputButton = (props: SubmitPriceInputButtonProps) => {
    const {error} = props.priceData;

    return (
        <button
            disabled={error !== InvalidPrice.Nothing}
            type={"submit"}
            className={` duration-200 ease-out  outline-none rounded-md px-4  font-medium flex items-center ml-2 h-8
            ${error === InvalidPrice.Nothing ? 'bg-primary hover:bg-white hover:text-neutral-600 text-white active:scale-95' : 'bg-neutral-300'}`}
        >OK
        </button>
    )
}

export default SubmitPriceInputButton;