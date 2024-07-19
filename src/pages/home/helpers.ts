import {HomeDataElement} from "@/types/HomeDataElement";

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

export const makeChunksOfHomeLists = (array: HomeDataElement[], chunkSize: number) => {
    if (array.length === 0) return [];

    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}