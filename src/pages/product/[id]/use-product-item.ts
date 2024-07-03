import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ProductData} from "@/types/ProductData";

export const useProductItem = () => {
    const [productItem, setProductItem] = useState<null | ProductData>(null);
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;

        setProductItem({
            id: 1,
            images: Array.from(({length: 10})).map(_ => "/images/card-image.jpg"),
            name: "Прогулянкова коляска CARRELLO Forte CRL-8502 Frost Beige",
            price: 4200,
            type: 'коляски',
            subType: 'коляски 3 в 1',
            description: '<![CDATA[ <p><img src="https://detopt.com.ua/content/rich/kolyaski/adamex-porto-light/adamex-porto-light-1.jpg" style="max-width: 500px"></p> <p><img src="https://detopt.com.ua/content/rich/kolyaski/adamex-porto-light/adamex-porto-light-2.jpg" style="max-width: 500px"></p> <p><img src="https://detopt.com.ua/content/rich/kolyaski/adamex-porto-light/adamex-porto-light-3.jpg" style="max-width: 500px"></p> <p><img src="https://detopt.com.ua/content/rich/kolyaski/adamex-porto-light/adamex-porto-light-4.jpg" style="max-width: 500px"></p> <p><img src="https://detopt.com.ua/content/rich/kolyaski/adamex-porto-light/adamex-porto-light-5.jpg" style="max-width: 500px"></p> <p><img src="https://detopt.com.ua/content/rich/kolyaski/adamex-porto-light/adamex-porto-light-6.jpg" style="max-width: 500px"></p><p><iframe allowfullscreen="allowfullscreen" height="315" src="//www.youtube.com/embed/oZai_QSZefA?rel=0&amp;loop=0&amp;autoplay=0&amp;controls=1&amp;showinfo=1&amp;disablekb=0&amp;modestbranding=0" width="560"></iframe></p><p>Коляска Adamex Porto Light - має модульний набір 2 в 1 на алюмінієвому шасі лаконічної форми, включає в себе люльку для новонародженого і прогулянковий блок. Легкість, зручність і безпека - ці три якості завжди поєднуються один з одним у візках Adamex, модель Porto Light розрахована на тривале використання з народження до 36 місяців.</p><p>Раму коляски можна використовувати як систему для подорожей, разом з автокріслом групи 0+ (від народження до року), встановлюється за допомогою спеціальних адаптерів (купуються окремо).</p><p>Коляска підлаштується під будь-який зріст. Ручку можна регулювати по висоті, натиснувши на дві кнопки з боків. Коляскою легко керувати по будь-якій місцевості, завдяки пружинній амортизації і міцним непробивним колесам. Передні полегшують маневрування коляскою, тому що крутяться навколо своєї осі на 360 градусів. Для подолання, наприклад, засніжених ділянок дороги заблокуйте колеса в прямому положенні.</p><p>Містка корзина під сидінням має зручний доступ і закривається на блискавку. Поряд з кошиком ззаду знаходиться гальма. Велика зручна педаль, яка не бруднить взуття при використанні. Полегшена рама легко і компактно складається по типу «книжка», займає мало місця в передпокої або багажнику автомобіля.</p><p><strong>Люлька для новонародженого</strong><br>Люлька моделі Porto Light має можливість компактно складатися вдвічі, що значно заощадити місце для її зберігання та перевезення. Така особливість люльки не вплинула на її основні переваги, а лише доповнила їх. Містка люлька для немовляти має чохол-накидку з відворотом для холодної і вітряної погоди, а вентильований капюшон і дно люльки - створять комфортну температуру в спекотні дні.</p><p><strong>Прогулянкова коляска до 3-х років</strong><br>Реверсивне сидіння коляски за пару рухів встановлюється по ходу або проти ходу руху. Спинка опускається в горизонтальне положення за допомогою важеля, утворюючи разом з регульованою підніжкою зручне спальне місце. Виробник передбачив великий щільний капюшон, який відкривається до самого бампера. Накидка на ніжки разом з капюшоном відмінно захистять дитину від поганої погоди. Для теплих деньків у капюшоні є велика вентиляційна секція і додатковий козирок.</p><p><strong>Вага коляски:</strong><br>З люлькою: 12.2 кг<br>З прогулянковим сидінням: 13 кг</p><p><strong>Габарити коляски:</strong><br>В розкладеному вигляді з прогулянковим блоком (ДхШхВ): 120х57х102 см.<br>В складеному вигляді (ДхШхВ): 72х58х58 см.</p><p>Ширина шасі — 57 см.<br>Внутрішній розмір люльки (ДхШхВ) — 77х35х22 см.<br>Спальне місце прогулянкового блоку (ДхШ) — 90х34 см.<br>Діаметр коліс передні 25 см., задні 30 см.</p> ]]>'
        });
    }, [router]);

    return {productItem};
}