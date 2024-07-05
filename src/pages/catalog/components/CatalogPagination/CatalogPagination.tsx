import CatalogPaginationLayout from "./CatalogPaginationLayout";
import {Pagination} from "@mantine/core";
import {SearchParams} from "@/types/SearchParams";
import {handlePageItemClick} from "@/pages/catalog/handlers";
import {useRouter} from "next/router";
import {CatalogData} from "@/types/CatalogData";

type CatalogPaginationProps = {
    searchParams: SearchParams,
    catalogData: CatalogData | null,
}

const CatalogPagination = (props: CatalogPaginationProps) => {
    const {searchParams, catalogData} = props;
    const {page} = searchParams;
    const router = useRouter();

    if(!catalogData) return null;
    return (
        <CatalogPaginationLayout>
            <Pagination
                onChange={(value) => handlePageItemClick(searchParams, value, router)}
                value={page}
                total={catalogData.pagesCount}
                color="violet"
                radius="md"
            />
        </CatalogPaginationLayout>
    )
}

export default CatalogPagination;