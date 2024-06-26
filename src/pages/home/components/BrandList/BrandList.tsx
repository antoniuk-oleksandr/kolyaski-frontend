import BrandListLayout from "./BrandListLayout";
import Image from "next/image";

const BrandList = () => {
    return (
        <BrandListLayout>
            {Array.from({length: 8}).map((_, index: number) => (
                <Image
                    priority
                    className={"size-full object-center object-contain p-3"}
                    alt={`brand${index + 1}`}
                    src={`/images/brand${index + 1}.jpg`}
                    width={150}
                    height={100}
                    key={index}
                />
            ))}
        </BrandListLayout>
    )
}

export default BrandList;