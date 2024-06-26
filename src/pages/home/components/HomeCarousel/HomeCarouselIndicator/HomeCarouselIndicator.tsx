import {Dispatch, SetStateAction} from "react";

type HomeCarouselIndicatorProps = {
    selected: boolean,
    setSelectedSlideIndex: Dispatch<SetStateAction<number>>,
    index: number,
}

const HomeCarouselIndicator = (props: HomeCarouselIndicatorProps) => {
    const {selected, setSelectedSlideIndex, index} = props;

    return (
        <div
            onClick={() => setSelectedSlideIndex(index)}
            className={`size-3 opacity-85 rounded-full hover:bg-neutral-900 cursor-pointer duration-200 ease-out ${selected ? 'bg-neutral-900' : 'bg-white'}`}
        ></div>
    )
}

export default HomeCarouselIndicator;