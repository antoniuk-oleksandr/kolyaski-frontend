import {incrementNewProductModalSignal} from "@/pages/admin/products/new/helpers";

const NewProductFileSelectButton = () => {
    return (
        <button
            type={"button"}
            onClick={() => incrementNewProductModalSignal("open")}
            className={"w-52 h-11 phone:h-14 bg-neutral-200 outline-none rounded-md duration-200 ease-out active:scale-95 hover:brightness-105"}
        >Додати товар з файлу
        </button>
    )
}

export default NewProductFileSelectButton;