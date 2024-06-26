import { LayoutProps } from "@/types/LayoutProps";

const HomeBottomContentLayout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="grid grid-cols-homeBottomContent gap-6 phone:gap-3 phone:grid-cols-1 p-3 phone:px-0 phone:py-3">
            {children}
        </div>
    );
};

export default HomeBottomContentLayout;
