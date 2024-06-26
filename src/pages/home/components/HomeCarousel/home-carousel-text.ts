type HomeCarouselItemType = {
    firstLineText: string,
    secondLineText: string,
    thirdLineText: string,
    imageSrc: string,
    link: string,
}

export const homeCarouselText: HomeCarouselItemType[] = [
    {
        firstLineText: 'останні моделі колясок',
        secondLineText: 'Продукція найкращих виробників',
        thirdLineText: 'Аксесуари до колясок',
        imageSrc: '/images/home-carousel1.jpg',
        link: '/',
    },
    {
        firstLineText: 'дитячі автокрісла',
        secondLineText: 'Гарантована безпека',
        thirdLineText: 'Асортимент для різних вікових категорій',
        imageSrc: '/images/home-carousel2.jpg',
        link: '/',
    },
    {
        firstLineText: 'дитячі ліжечка',
        secondLineText: 'Екологічні матеріали',
        thirdLineText: 'Найкращі ціни!',
        imageSrc: '/images/home-carousel3.jpg',
        link: '/',
    },
]