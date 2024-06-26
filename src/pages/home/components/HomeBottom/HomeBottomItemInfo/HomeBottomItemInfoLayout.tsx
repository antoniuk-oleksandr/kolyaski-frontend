import {LayoutProps} from "@/types/LayoutProps";
import {Children, useState} from "react";
import {useRouter} from "next/router";

type HomeBottomItemInfoLayoutProps = LayoutProps & {
    link: string,
}

const HomeBottomItemInfoLayout = (props: HomeBottomItemInfoLayoutProps) => {
    const {children, link} = props;
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(link)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={"w-full absolute top-0 left-0 text-2xl uppercase text-secondary flex justify-between font-medium h-full cursor-pointer"}>
            {Children.map(children, (child, index: number) => (
                <>
                    {index === 0 ? (
                            <div className={"p-7 pr-24 bg-primary rounded-rt-md w-fit h-fit"}>
                                {child}
                            </div>
                        ) :
                        <div
                            className={`rounded-full top-0 m-7 bg-primary text-base px-4 py-1 grid place-items-center h-fit  
                            ${isHovered && 'bg-secondary text-white'}`}>
                            {child}
                        </div>
                    }
                </>
            ))}
        </div>
    )
}

export default HomeBottomItemInfoLayout;