import CatalogPaginationLayout from "./CatalogPaginationLayout";
import {Pagination} from "@mantine/core";
import {SearchParams} from "@/types/SearchParams";
import {handlePageItemClick} from "@/pages/catalog/handlers";
import {useRouter} from "next/router";

type CatalogPaginationProps = {
    totalPages: number,
    searchParams: SearchParams,
}

const CatalogPagination = (props: CatalogPaginationProps) => {
    const {totalPages, searchParams} = props;
    const {page} = searchParams;
    const router = useRouter();


    return (
        <CatalogPaginationLayout>
            <Pagination
                onChange={(value) => handlePageItemClick(searchParams, value, router)}
                value={page}
                total={totalPages}
                color="violet"
                radius="md"
            />
        </CatalogPaginationLayout>
    )
}

export default CatalogPagination;