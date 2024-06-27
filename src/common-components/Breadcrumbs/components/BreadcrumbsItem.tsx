import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import {useRouter} from "next/router";

type BreadcrumbsItemProps = BreadcrumbsItemType & {
    isLast: boolean,
}

const BreadcrumbsItem = (props: BreadcrumbsItemProps) => {
    const {isLast, name, link} = props
    const router = useRouter();

    return (
        <>
            <span
                onClick={() => router.push(link)}
                className={"hover:text-primary cursor-pointer duration-200 ease-out first-letter:capitalize"}>{name}</span>
            {!isLast && <span>/</span>}
        </>
    )
}

export default BreadcrumbsItem;