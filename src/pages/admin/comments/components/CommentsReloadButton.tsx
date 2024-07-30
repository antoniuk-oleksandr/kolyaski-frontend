import ComponentElementIcon from "@/pages/admin/comments/components/ComponentElementIcon";
import {IoReload} from "react-icons/io5";
import {Tooltip} from "@mantine/core";
import {handleCommentsReloadButtonClick} from "@/pages/admin/comments/handlers";

const CommentsReloadButton = () => {
    return (
        <>
            <Tooltip className={"mt-1"} position={"bottom"}  label={'Оновити'}>
            <div
                onClick={handleCommentsReloadButtonClick}
                className={"cursor-pointer grid place-items-center rounded-full duration-200 ease-out outline-none"}
            >
                <ComponentElementIcon icon={
                    <IoReload
                        className={""}
                    />
                }/>
            </div>
        </Tooltip>
        </>
    )
}

export default CommentsReloadButton;