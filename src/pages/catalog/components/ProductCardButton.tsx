import {FaCartShopping} from "react-icons/fa6";

const ProductCardButton = () => {
    return (
        <button className={"flex w-full justify-center items-center gap-x-2 font-medium bg-primary rounded-md py-3 px-4 text-white mt-6 hover:bg-secondary duration-200 outline-none"} type={"button"}>
            <FaCartShopping className={"text-lg"}/>
            Додати у кошик
        </button>
    )
}

export default ProductCardButton;