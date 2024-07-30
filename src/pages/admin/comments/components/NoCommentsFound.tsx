import {FaSearch} from "react-icons/fa";

const NoCommentsFound = () => {
    return (
        <div className={"py-3 flex justify-center items-center text-sm gap-x-1"}>
            <FaSearch/>
            <p>Немає повідомлень, що відповідають вашому запиту</p>
        </div>
    )
}

export default NoCommentsFound;