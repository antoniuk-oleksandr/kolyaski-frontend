import {handleOrderModalToggle} from "@/pages/admin/orders/[id]/handlers";

const AddOrderProductButton = () => {
    return (
        <button
            onClick={handleOrderModalToggle}
            type="button"
            className={"bg-neutral-200 h-11 w-32 grid place-items-center  mt-3 outline-none rounded-md duration-200 ease-out active:scale-95 hover:brightness-105"}
        >
            Додати товар
        </button>
    )
}

export default AddOrderProductButton;