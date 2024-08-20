import CatalogPaginationLayout from "./CatalogPaginationLayout";
import {Pagination} from "@mantine/core";
import {SearchParams} from "@/types/SearchParams";
import {handlePageItemClick} from "@/pages/catalog/handlers";
import {useRouter} from "next/router";
import {CatalogData} from "@/types/CatalogData";
import {CatalogSlice} from "@/types/CatalogSlice";
import { useDispatch } from "react-redux";

type CatalogPaginationProps = {
    catalogSlice: CatalogSlice,
}

const CatalogPagination = (props: CatalogPaginationProps) => {
    const {catalogSlice} = props;
    const {page, pagesCount} = catalogSlice;
    const router = useRouter();

    if (!page || !pagesCount) return null;
    return (
        <CatalogPaginationLayout>
            <Pagination
                siblings={2}
                onChange={(value) => handlePageItemClick(catalogSlice, value, router)}
                value={parseInt(page as string)}
                total={pagesCount}
                color="violet"
                radius="md"
            />
        </CatalogPaginationLayout>
    )
}

export default CatalogPagination;