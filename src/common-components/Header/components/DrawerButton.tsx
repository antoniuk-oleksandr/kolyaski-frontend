import {IoMenu} from "react-icons/io5";

type DrawerButtonProps = {
    open: () => void,
}

const DrawerButton = (props: DrawerButtonProps) => {
    const {open} = props;

    return (
        <button
            onClick={open}
            className={"size-10 text-2xl grid place-items-center text-white bg-secondary outline-none"}
        >
            <IoMenu/>
        </button>
    )
}

export default DrawerButton;