import {signal} from "@preact/signals-react";
import {Warehouse} from "@/types/Warehouse";

export const warehouseSignal = signal<null | Warehouse>(null);