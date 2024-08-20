import PageContentLayout from "@/common-components/PageContentLayout";
import ProductsLeftSide from "./components/ProductsLeftSide/ProductsLeftSide";
import ProductsRightSide from "./components/ProductsRightSide/ProductsRightSide";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {useCatalogSearchParams} from "@/pages/catalog/use-effects/use-catalog-search-params";
import {useRouter} from "next/router";

const ProductsPage = () => {
    const catalogSlice = useSelector((state: ReduxState) => state.catalogSlice);
    const dispatch = useDispatch();
    const router = useRouter();
    useCatalogSearchParams(dispatch, router);

    return (
        <PageContentLayout>
            <ProductsLeftSide catalogSlice={catalogSlice}/>
            <ProductsRightSide catalogSlice={catalogSlice}/>
        </PageContentLayout>
    )
}

export default ProductsPage;
