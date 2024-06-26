import AboutImageListLayout from "./AboutImageListLayout";
import Image from "next/image";

const AboutImageList = () => {
    return (
        <AboutImageListLayout>
            {Array.from({length: 3}).map((_, index) => (
                <div key={index} className={"p-3"}>
                    <Image
                        priority
                        width={700}
                        height={500}
                        className={"size-full object-center object-cover"}
                        src={`/images/about${index + 1}.jpg`}
                        alt={`about${index + 1}`}
                    />
                </div>
            ))}
        </AboutImageListLayout>
    )
}

export default AboutImageList;