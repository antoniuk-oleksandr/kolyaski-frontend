import { SidebarItemType } from "@/types/SidebarItemType";
import { createProductsUrl } from "@/utils/utils";

export const sidebarItemListText: SidebarItemType[] = [
    {
        text: 'Коляски',
        link: createProductsUrl('коляски'),
        subItems: [
            {text: 'Коляски 2 в 1', link: createProductsUrl('коляски', 'коляски 2 в 1')},
            {text: 'Коляски 3 в 1', link: createProductsUrl('коляски', 'коляски 3 в 1')},
            {text: 'Прогулянкові коляски', link: createProductsUrl('коляски', 'прогулянкові коляски')},
            {text: 'Коляски для двійні', link: createProductsUrl('коляски', 'коляски для двійні')}
        ]
    },
    {text: 'Аксесуари для колясок', link: createProductsUrl('аксесуари для колясок')},
    {text: 'Автокрісла', link: createProductsUrl('автокрісла')},
    {
        text: 'Ліжечка', link: createProductsUrl('ліжечка'),
        subItems: [
            {text: 'Матраси', link: createProductsUrl('ліжечка', 'матраси')},
            {text: 'Постіль', link: createProductsUrl('ліжечка', 'постіль')}
        ]
    },
    {text: 'Заколисуючі центри', link: createProductsUrl('заколисуючі центри')},
    {text: 'Стільчики для годування', link: createProductsUrl('стільчики для годування')},
    {text: 'Манежі', link: createProductsUrl('манежі')},
    {text: 'Ходунки', link: createProductsUrl('ходунки')},
    {text: 'Велосипеди', link: createProductsUrl('велосипеди')}
];
