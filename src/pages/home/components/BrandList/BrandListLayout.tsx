import {LayoutProps} from "@/types/LayoutProps";

const BrandListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"rounded-md w-full grid grid-cols-8 place-items-center bg-white border p-3 m-3 phone:m-0 phone:my-3 phone:grid-cols-2"}>
            {children}
        </div>
    )
}

export default BrandListLayout;