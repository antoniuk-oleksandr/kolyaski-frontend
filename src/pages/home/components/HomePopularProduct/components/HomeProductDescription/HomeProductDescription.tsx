import HomeProductDescriptionLayout from "./HomeProductDescriptionLayout";
import {NumberFormatter} from "@mantine/core";
import {HomeDataElement} from "@/types/HomeDataElement";

type HomeProductDescriptionProps = HomeDataElement;

const HomeProductDescription = (props: HomeProductDescriptionProps) => {
    const {name, price} = props;

    return (
        <HomeProductDescriptionLayout>
            <p className="line-clamp-2 h-10">{name}</p>
            <NumberFormatter
                className={"text-lg text-primary font-medium"}
                value={price}
                suffix={" грн."}
                security={","}
            />
        </HomeProductDescriptionLayout>
    )
}

export default HomeProductDescription;