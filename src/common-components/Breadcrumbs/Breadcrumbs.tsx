import BreadcrumbsLayout from "./BreadcrumbsLayout";
import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import BreadcrumbsItem from "@/common-components/Breadcrumbs/components/BreadcrumbsItem";

type BreadcrumbsProps = {
    items: BreadcrumbsItemType[],
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
    const {items} = props;

    return (
        <BreadcrumbsLayout>
            {items.map((item, index) => (
                <BreadcrumbsItem key={index} {...item} isLast={index === items.length - 1}/>
            ))}
        </BreadcrumbsLayout>
    )
}

export default Breadcrumbs;