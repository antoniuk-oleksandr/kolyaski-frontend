import {Warehouse} from "@/types/Warehouse";

type NoWarehousesMessageProps = {
    filteredList: Warehouse[] | undefined,
}

const NoWarehousesMessage = (props: NoWarehousesMessageProps) => {
    const {filteredList} = props;

    if (filteredList && filteredList.length > 0) return null;
    return (
        <p
            className={"p-3 text-sm hover:bg-neutral-100 w-full outline-none text-start cursor-pointer"}
        >За вашим запитом нічого не знайдено</p>
    )
}

export default NoWarehousesMessage;