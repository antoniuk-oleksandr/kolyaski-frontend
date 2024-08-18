import {incrementNewProductModalSignal} from "@/pages/admin/products/new/helpers";

export const NewProductModalCancelButton = () => {
    return (
        <button
            type={"button"}
            onClick={() => incrementNewProductModalSignal("close")}
            className={"w-36 h-11 bg-neutral-200 outline-none rounded-md duration-200 ease-out active:scale-95 hover:brightness-105"}
        >Відмінити
        </button>
    )
}

export default NewProductModalCancelButton;