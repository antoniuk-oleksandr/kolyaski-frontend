import { LayoutProps } from "@/types/LayoutProps";
import {Children} from "react";

type CarouselLayoutProps = LayoutProps & {
    index: number,
    className: string,
};

const CarouselLayout = (props: CarouselLayoutProps) => {
    const { children, index, className } = props;

    return (
        <div className={`overflow-hidden w-full ${className}`}>
            <div
                style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: 'transform 0.5s ease',
                }}
                className="flex size-full transition-transform ease-out duration-500"
            >
                {Children.map(children, (child, index) => (
                    <div key={index} className="w-full flex-shrink-0 z-50">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselLayout;
