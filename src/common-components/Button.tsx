import {ReactNode} from "react";

type ButtonProps = {
    className?: string,
    onClick?: () => void,
    children: ReactNode,
    disabled?: boolean,
    type?: "button" | "submit" | "reset",
}

const Button = (props: ButtonProps) => {
    const {className, onClick, children, disabled, type} = props;

    return (
        <button
            type={type ? type : "button"}
            disabled={disabled}
            onClick={() => onClick && onClick()}
            className={`bg-primary select-none flex justify-center items-center gap-x-1.5 rounded-md py-3 px-4 text-white duration-200 ease-out outline-none hover:bg-white hover:text-neutral-600 
            ${disabled === true ? '!bg-gray-200 !text-neutral-400' : 'active:scale-95'}
            ${className}`}
        >{children}</button>
    )
}

export default Button;