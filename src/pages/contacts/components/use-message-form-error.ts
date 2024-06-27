import {useEffect, useState} from "react";

export const useMessageFormError = (error: any) => {
    const [isErrorPresent, setIsErrorPresent] = useState(false);

    useEffect(() => {
        if(error !== undefined) setIsErrorPresent(true);
    }, [error]);

    return {isErrorPresent, setIsErrorPresent};
}