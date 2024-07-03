import { SidebarItemType } from "@/types/SidebarItemType";
import { createCatalogUrl } from "@/utils/utils";

export const sidebarItemListText: SidebarItemType[] = [
    {
        text: 'Коляски',
        link: createCatalogUrl('коляски'),
        subItems: [
            {text: 'Коляски 2 в 1', link: createCatalogUrl('коляски', 'коляски 2 в 1')},
            {text: 'Коляски 3 в 1', link: createCatalogUrl('коляски', 'коляски 3 в 1')},
            {text: 'Прогулянкові коляски', link: createCatalogUrl('коляски', 'прогулянкові коляски')},
            {text: 'Коляски для двійні', link: createCatalogUrl('коляски', 'коляски для двійні')}
        ]
    },
    {text: 'Аксесуари для колясок', link: createCatalogUrl('аксесуари для колясок')},
    {text: 'Автокрісла', link: createCatalogUrl('автокрісла')},
    {
        text: 'Ліжечка', link: createCatalogUrl('ліжечка'),
        subItems: [
            {text: 'Матраси', link: createCatalogUrl('ліжечка', 'матраси')},
            {text: 'Постіль', link: createCatalogUrl('ліжечка', 'постіль')}
        ]
    },
    {text: 'Заколисуючі центри', link: createCatalogUrl('заколисуючі центри')},
    {text: 'Стільчики для годування', link: createCatalogUrl('стільчики для годування')},
    {text: 'Манежі', link: createCatalogUrl('манежі')},
    {text: 'Ходунки', link: createCatalogUrl('ходунки')},
    {text: 'Велосипеди', link: createCatalogUrl('велосипеди')}
];
