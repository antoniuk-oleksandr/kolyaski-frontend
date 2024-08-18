import {FaSearch} from "react-icons/fa";

type NoDataFoundProps = {
    type: "comments" | "products" | "orders"
}

const NoDataFound = (props: NoDataFoundProps) => {
    const {type} = props;
    const word = type === "comments" ? "коментарів" : type === "products" ? "товарів" : "замовлень";

    return (
        <div className={"py-3 flex justify-center items-center text-sm gap-x-1"}>
            <FaSearch/>
            <p>Немає {word}, що відповідають вашому запиту</p>
        </div>
    )
}

export default NoDataFound;