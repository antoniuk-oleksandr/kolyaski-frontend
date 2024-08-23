import HomeBottomContentLayout from "./HomeBottomContentLayout";
import HomeBottomItem from "@/pages/home/components/HomeBottom/HomeBottomItem/HomeBottomItem";

const HomeBottomContent = () => {
    return (
        <HomeBottomContentLayout>
            <HomeBottomItem
                title={'Коляски'}
                link={'/catalog?type=коляски'}
                className="row-span-2 phone:row-span-1"
                src="/images/home-bottom1.jpeg"
            />
            <HomeBottomItem
                title={'Заколисуючі центри'}
                link={'/catalog?type=заколисуючі центри'}
                className="col-start-2 phone:col-start-1"
                src="/images/home-bottom2.jpg"
            />
            <HomeBottomItem
                title={'Манежі'}
                link={'/catalog?type=манежі'}
                className="col-start-2 phone:col-start-1"
                src="/images/home-bottom3.jpg"
            />
        </HomeBottomContentLayout>
    );
};

export default HomeBottomContent;
