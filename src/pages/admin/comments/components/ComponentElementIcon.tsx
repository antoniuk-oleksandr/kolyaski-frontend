import {forwardRef, HTMLAttributes, ReactNode} from 'react';

type ComponentElementIconLayoutProps = HTMLAttributes<HTMLButtonElement> & {
    icon: ReactNode,
    action?: () => void,
    isDisabled?: boolean,
    isSelected?: boolean,
    lightOverlay?: boolean,
    type?: 'button' | 'submit' | 'reset',
}

const ComponentElementIcon = forwardRef<HTMLButtonElement, ComponentElementIconLayoutProps>
(({icon, action, children, isSelected, isDisabled, type, lightOverlay, ...props}, ref) => (
    <button
        type={type === undefined ? 'button' : type}
        className={`duration-200 ease-out hover:ring-[8px] outline-none  rounded-full 
        ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} 
        ${isSelected === true ? 'hover:bg-opacity-30 ring-opacity-30' : ''} 
        ${lightOverlay === true ? 'ring-neutral-200 hover:bg-neutral-200' : 'ring-gray-300 hover:bg-gray-300'}`}
        disabled={isDisabled}
        onClick={action}
        ref={ref} {...props}>
        {icon}
        {children}
    </button>
));

export default ComponentElementIcon;