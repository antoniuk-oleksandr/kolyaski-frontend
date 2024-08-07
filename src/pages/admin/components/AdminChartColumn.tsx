import {LayoutProps} from "@/types/LayoutProps";

const AdminChartColumn = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"grid grid-cols-2 gap-x-6 mb-6 phone:grid-cols-1 phone:gap-y-6"}>
            {children}
        </div>
    )
}

export default AdminChartColumn;