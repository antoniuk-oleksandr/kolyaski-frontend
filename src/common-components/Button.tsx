import {ReactNode} from "react";

type ButtonProps = {
    className?: string,
    onClick?: () => void,
    children: ReactNode,
}

const Button = (props: ButtonProps) => {
    const {className, onClick, children} = props;

    return (
        <button
            onClick={() => onClick && onClick()}
            className={`bg-primary flex justify-center items-center gap-x-1.5 rounded-md py-3 px-4 text-white bg-primary duration-200 ease-out active:scale-95 outline-none hover:bg-white hover:text-neutral-600 ${className}`}
        >{children}</button>
    )
}

export default Button;