import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/router";

type HomePopularProductLayoutProps = LayoutProps & {
    id: number,
    border?: boolean,
}

const HomePopularProductLayout = (props: HomePopularProductLayoutProps) => {
    const {children, id, border} = props;
    const router = useRouter();

    return (
        <div
            className={`rounded-md bg-white p-3 cursor-pointer 
            ${border === false ? '' : 'border border-neutral-200'}`}
            onClick={() => router.push(`/product/${id}`)}>
            {children}
        </div>
    )
}

export default HomePopularProductLayout;