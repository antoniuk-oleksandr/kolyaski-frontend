import {RestrictedProduct} from "@/types/RestrictedProduct";

export type HomeData = {
    "strollers": RestrictedProduct[],
    "carSeats": RestrictedProduct[],
    "cots": RestrictedProduct[],
    "feedingChairs": RestrictedProduct[],
    "recommendedProducts": RestrictedProduct[],
    "specialOffers": RestrictedProduct[],
}