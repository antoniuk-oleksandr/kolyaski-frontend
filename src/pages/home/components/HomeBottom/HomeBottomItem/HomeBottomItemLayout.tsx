import {LayoutProps} from "@/types/LayoutProps";

type HomeBottomItemLayoutProps = LayoutProps & {
    className?: string;
}

const HomeBottomItemLayout = (props: HomeBottomItemLayoutProps) => {
    const {children, className} = props;

    return (
        <div className={`bg-white rounded-md overflow-hidden ${className} grid place-items-center relative`}>
            {children}
        </div>
    )
}

export default HomeBottomItemLayout;