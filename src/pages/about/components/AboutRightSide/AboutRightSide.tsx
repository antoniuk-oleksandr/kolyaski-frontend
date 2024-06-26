import AboutRightSideLayout from "./AboutRightSideLayout";
import PageTitle from "@/common-components/PageTitle";
import AboutTextLayout from "@/pages/about/components/AboutTextLayout";
import AboutImageList from "@/pages/about/components/AboutImageList/AboutImageList";

const AboutRightSide = () => {
    return (
        <AboutRightSideLayout>
            <PageTitle text={'Про нас'}/>
            <AboutTextLayout>
                <p>Раді вітати Вас на сайті дитячого магазину kolyaski.in.ua.</p>
                <p>В нашому магазині Ви можете придбати коляски для новонароджених, прогулянкові коляски,
                    автокрісла, стільчики для годування, ліжечка та гойдалки.
                    Ми з радістю допоможемо підібрати потрібний для Вас товар, врахувавши всі побажання.</p>
                <p>Ми працюємо тільки з перевіреними постачальниками та обираємо найкращий товар.</p>
                <p>Ви можете відвідати наш магазин за адресою: місто Черкаси, вулиця Сергія Амброса 173 (раніше
                    Орджонікідзе).
                    А якщо Ви з іншого міста, то ми вишлемо товар службою доставки, при цьому перед відправкою можемо
                    зробити відеоогляд.</p>
            </AboutTextLayout>
            <AboutImageList/>
        </AboutRightSideLayout>
    )
}

export default AboutRightSide;