import {LayoutProps} from "@/types/LayoutProps";

const SoldOutOverlayLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {children}
        </div>
    )
}

export default SoldOutOverlayLayout;