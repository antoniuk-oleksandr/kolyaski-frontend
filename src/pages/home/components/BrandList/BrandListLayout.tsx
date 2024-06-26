import {LayoutProps} from "@/types/LayoutProps";

const BrandListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"p-3 phone:p-0"}>
            <div
                className={"rounded-md w-full grid grid-cols-8 place-items-center bg-white p-3 phone:m-0 phone:my-3 phone:grid-cols-2"}>
                {children}
            </div>
        </div>
    )
}

export default BrandListLayout;