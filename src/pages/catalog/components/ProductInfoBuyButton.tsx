import {FaCartShopping} from "react-icons/fa6";

type ProductInfoBuyButtonProps = {
    inCart: boolean,
    notAvailable: boolean,
}

const ProductInfoBuyButton = (props: ProductInfoBuyButtonProps) => {
    const {inCart, notAvailable} = props;

    return (
        <button
            disabled={inCart || notAvailable}
            type={"submit"}
            className={` flex items-center gap-x-2 w-52 justify-center rounded px-4 py-3 font-medium outline-none  duration-200 ease-out  
            ${inCart || notAvailable ? 'text-primary bg-neutral-200' : 'text-white bg-primary hover:bg-secondary active:scale-95'}`}>
            <FaCartShopping/>
            <p>{notAvailable ? 'Немає в наявності' : inCart ? 'В кошику' : 'Додати до кошика'}</p>
        </button>
    )
}

export default ProductInfoBuyButton;