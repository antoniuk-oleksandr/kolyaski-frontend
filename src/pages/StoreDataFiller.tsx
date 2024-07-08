import {useDispatch} from "react-redux";
import {useCart} from "@/general-use-effects/use-cart";

const StoreDataFiller = () => {
    const dispatch = useDispatch();
    useCart(dispatch);

    return null;
}

export default StoreDataFiller;