import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/router";

type PopularProductTypeItemLayoutProps= LayoutProps & {
    link: string,
}

const PopularProductTypeItemLayout = (props: PopularProductTypeItemLayoutProps) => {
    const {children, link} = props;
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(link)}
            className={"flex items-center p-3 bg-white rounded-md text-base flex-col cursor-pointer gap-y-3 text-center border ring-neutral-200"}>
            {children}
        </div>
    )
}

export default PopularProductTypeItemLayout;