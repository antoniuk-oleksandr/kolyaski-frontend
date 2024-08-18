import {signal} from "@preact/signals-react";
import {AdminModalSignalType} from "@/types/AdminModalSignalType";

export const newProductModalSignal = signal<AdminModalSignalType>({
    open: 0,
    close: 0,
});