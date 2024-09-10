import {RestrictedProduct} from "@/types/RestrictedProduct";
import {HomeData} from "@/types/HomeData";

export const getPopularProductListTitle = (value: string) => {
    switch (value) {
        case "strollers" :
            return "Коляски";
        case "carSeats" :
            return "Автокрісла";
        case "feedingChairs" :
            return "Стільчики для годування";
        case "cots" :
            return "Ліжечка";
        case "recommendedProducts":
            return "Рекомендовані товари";
        case "specialOffers" :
            return "Спеціальні пропозиції";
        default:
            return "null";
    }
}

export const makeChunksOfHomeLists = (array: RestrictedProduct[], chunkSize: number) => {
    if (array.length === 0) return [];

    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

export const removeProductsWithNullImages = (
    homeData: HomeData
) : HomeData => {
    const copy = {...homeData};

    for (let copyKey in copy) {
        copy[copyKey as keyof HomeData] = copy[copyKey as keyof HomeData]
            .filter((item) => item.image !== null && item.image !== "");
    }
    return copy;
}