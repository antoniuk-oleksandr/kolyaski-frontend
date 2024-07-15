import {signal} from "@preact/signals-react";
import {CartItem} from "@/types/CartItem";

const productsSignal = signal<null | CartItem>(null);