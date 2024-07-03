import {FaCartShopping} from "react-icons/fa6";

const ProductInfoBuyButton = () => {
    return (
        <button
            type={"submit"}
            className={"text-white flex items-center gap-x-2 bg-primary rounded px-4 py-3 font-medium outline-none active:scale-95 duration-200 ease-out hover:bg-secondary"}>
            <FaCartShopping/>
            <p>Додати у кошик</p>
        </button>
    )
}

export default ProductInfoBuyButton;