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
                onClick={() => !isLast && router.push(link)}
                className={`hover:${isLast ? '' : 'text-primary cursor-pointer hover:text-primary'}  duration-200 ease-out first-letter:capitalize text-nowrap`}
            >{name}</span>
            {!isLast && <span>/</span>}
        </>
    )
}

export default BreadcrumbsItem;