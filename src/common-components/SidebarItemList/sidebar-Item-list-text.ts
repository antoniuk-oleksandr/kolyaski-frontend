import {SidebarItemType} from "@/types/SidebarItemType";

export const sidebarItemListText: SidebarItemType[] = [
    {
        text: 'Коляски',
        link: '/strollers',
        subItems: [
            {text: 'Коляски 2 в 1', link: '/strollers/2-in-1'},
            {text: 'Коляски 3 в 1', link: '/strollers/3-in-1'},
            {text: 'Прогулянкові коляски', link: '/strollers/strollers'},
            {text: 'Коляски для двійні', link: '/strollers/twin'}
        ]
    },
    {text: 'Аксесуари для колясок', link: '/stroller-accessories'},
    {text: 'Автокрісла', link: '/car-seats'},
    {
        text: 'Ліжечка', link: '/cribs',
        subItems: [
            {text: 'Матраси', link: '/strollers/strollers'},
            {text: 'Постіль', link: '/strollers/twin'}
        ]
    },
    {text: 'Заколисуючі центри', link: '/soothing-centers'},
    {text: 'Стільчики для годування', link: '/high-chairs'},
    {text: 'Манежі', link: '/playpens'},
    {text: 'Ходунки', link: '/walkers'},
    {text: 'Велосипеди', link: '/bicycles'}
];

