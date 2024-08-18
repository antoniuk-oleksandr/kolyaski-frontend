import {LayoutProps} from "@/types/LayoutProps";

const NewProductTopLineLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex justify-between items-center gap-x-3 phone:mb-2"}>
            {children}
        </div>
    )
}

export default NewProductTopLineLayout;