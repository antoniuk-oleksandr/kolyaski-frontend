import {signal} from "@preact/signals-react";
import {City} from "@/types/City";

export const citySignal = signal<City | null>(null);