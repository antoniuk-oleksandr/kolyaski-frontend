import {LayoutProps} from "@/types/LayoutProps";

const HomePopularProductListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"p-3 phone:px-0"}>
            <div className={"p-3 bg-white rounded-md"}>
                {children}
            </div>
        </div>
    )
}

export default HomePopularProductListLayout;