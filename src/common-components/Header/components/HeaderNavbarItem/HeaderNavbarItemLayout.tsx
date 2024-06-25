import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/router";

type HeaderNavbarItemLayoutProps = LayoutProps & {
    isSelected: boolean,
    link: string,
    clickAction?: () => void,
    className?: string,
}

const HeaderNavbarItemLayout = (props: HeaderNavbarItemLayoutProps) => {
    const {children, link, isSelected, clickAction, className} = props;
    const router = useRouter();

    return (
        <a
            onClick={() => {
                router.push(link)
                clickAction && clickAction()
            }}
            className={`text-sm cursor-pointer font-medium hover:text-secondary duration-200 ease-out active:scale-95 outline-none ${className}  
            ${isSelected && "text-secondary"}`}
        >
            {children}
        </a>
    )
}

export default HeaderNavbarItemLayout;