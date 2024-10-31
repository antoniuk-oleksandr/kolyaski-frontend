import {LayoutProps} from "@/types/LayoutProps";
import Link from "next/link";
import {Children} from "react";

type HomeRightSideProductLayoutProps = LayoutProps & {
    id: number,
}

const HomeRightSideProductLayout = (props: HomeRightSideProductLayoutProps) => {
    const {children, id} = props;
    const childrenArr = Children.toArray(children);

    return (
        <Link
            href={`/product/${id}`}
            className={"flex gap-x-3 text-sm items-center"}
        >
            {childrenArr[0]}
            <div className={"flex flex-1 flex-col gap-y-1"}>
                {childrenArr.slice(1, 3)}
            </div>
        </Link>
    )
}

export default HomeRightSideProductLayout;