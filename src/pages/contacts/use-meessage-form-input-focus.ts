import {MutableRefObject, useEffect} from "react";

export const useMessageFormInputFocus = (
    autoFocus: boolean | undefined,
    inputRef: MutableRefObject<HTMLElement | null>,
) => {
    useEffect(() => {
        if (autoFocus && inputRef.current)
            setTimeout(() => inputRef.current?.focus(), 1);

    }, [inputRef.current]);
}