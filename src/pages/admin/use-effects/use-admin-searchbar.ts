import {useEffect, useState} from "react";

export const useAdminSearchbar = (value: string,) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, []);

    return {inputValue, setInputValue}
}