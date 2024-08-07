import {LayoutProps} from "@/types/LayoutProps";
import {handleAddOrderProductItemClick} from "@/pages/admin/orders/[id]/handlers";
import {ProductData} from "@/types/ProductData";
import {useDispatch} from "react-redux";

type AddOrderProductItemLayoutProps = LayoutProps & {
    item: ProductData,
}


const AddOrderProductItemLayout = (props: AddOrderProductItemLayoutProps) => {
    const {children, item} = props;
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => handleAddOrderProductItemClick(item, dispatch)}
            className={"flex p-3 text-sm items-center gap-x-3 duration-200 ease-out hover:bg-comments cursor-pointer rounded-md"}>
            {children}
        </div>
    )
}

export default AddOrderProductItemLayout;