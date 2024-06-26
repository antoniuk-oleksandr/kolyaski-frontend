import {useEffect, useRef, useState} from "react";

export const useSlide = () => {
    const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
    const slideRef = useRef<any>(null);

    useEffect(() => {
        if (slideRef.current !== null) clearTimeout(slideRef.current);


        slideRef.current = setTimeout(() => {
            setSelectedSlideIndex((prev) => (prev + 1) % 3);
        }, 5000)


        document.title = 'Головна - Купити коляски в дитячому інтернет-магазині';

        return () => clearTimeout(slideRef.current);
    }, [selectedSlideIndex]);

    return {selectedSlideIndex, setSelectedSlideIndex};
}