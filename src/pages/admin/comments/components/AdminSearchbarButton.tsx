import ComponentElementIcon from "@/pages/admin/comments/components/ComponentElementIcon";
import {FaSearch} from "react-icons/fa";
import {Tooltip} from "@mantine/core";

const AdminSearchbarButton = () => {
    return (
        <Tooltip className={"!mt-2"} label={"Пошук"} position={"bottom"}>
            <div className={"m-[15px] grid place-items-center"}>
                <ComponentElementIcon
                    type={"submit"}
                    lightOverlay
                    icon={<FaSearch className={"text-lg "}/>}
                />
            </div>
        </Tooltip>
    )
}

export default AdminSearchbarButton;