import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/router";

type HomePopularProductLayoutProps = LayoutProps & {
    id: number,
}

const HomePopularProductLayout = (props: HomePopularProductLayoutProps) => {
    const {children, id} = props;
    const router = useRouter();

    return (
        <div
            className={"rounded-md bg-white p-3 cursor-pointer border border-neutral-200"}
            onClick={() => router.push(`/product/${id}`)}>
            {children}
        </div>
    )
}

export default HomePopularProductLayout;