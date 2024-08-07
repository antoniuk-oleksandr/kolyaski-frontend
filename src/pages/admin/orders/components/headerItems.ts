import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";

export const headerItems = [
    {
        text: "ID",
        id: OrdersSortByEnum.ID,
    },
    {
        text: "Дата",
        id: OrdersSortByEnum.DATE,
    },
    {
        text: "Ім'я",
        id: OrdersSortByEnum.FIRSTNAME,
    },
    {
        text: "Прізвище",
        id: OrdersSortByEnum.SURNAME,
    },
    {
        text: "Загальна сума",
        id: OrdersSortByEnum.TOTAL_PRICE,
    },
    {
        text: "Статус",
        id: OrdersSortByEnum.STATUS,
    }
];