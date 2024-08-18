import {useRouter} from "next/router";
import {AdminProductsState} from "@/types/AdminProductsState";
import {makeProductsLink} from "@/pages/admin/products/helpers";

type AdminProductPageHeadButtonProps = {
    state: AdminProductsState,
}

const AdminProductPageHeadButton = (props: AdminProductPageHeadButtonProps) => {
    const {state} = props;
    const router = useRouter();

    return (
        <button
            onClick={() => router.push(makeProductsLink(state, undefined, "new"))}
            className={"h-11 phone:h-14 px-4 bg-neutral-200 rounded-md outline-none active:scale-95 duration-200 ease-out hover:brightness-110"}
        >Додати товар</button>
    )
}

export default AdminProductPageHeadButton;