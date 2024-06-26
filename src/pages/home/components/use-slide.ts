import {useEffect, useRef, useState} from "react";

export const useSlide = () => {
    const [slide, setSlide] = useState(0);
    const slideRef = useRef<any>(null);

    useEffect(() => {
        slideRef.current = setInterval(() => {
            setSlide((prev) => (prev + 1) % 3);
        }, 5000);

        return () => clearInterval(slideRef.current);
    }, []);

    return slide;
}