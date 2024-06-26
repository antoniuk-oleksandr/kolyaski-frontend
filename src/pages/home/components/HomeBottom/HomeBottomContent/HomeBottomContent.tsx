import HomeBottomContentLayout from "./HomeBottomContentLayout";
import HomeBottomItem from "@/pages/home/components/HomeBottom/HomeBottomItem/HomeBottomItem";

const HomeBottomContent = () => {
    return (
        <HomeBottomContentLayout>
            <HomeBottomItem
                title={'Коляски'}
                number={229}
                link={''}
                className="row-span-2 phone:row-span-1"
                src="/images/home-bottom1.jpeg"
            />
            <HomeBottomItem
                title={'Заколисуючі центри'}
                number={5}
                link={''}
                className="col-start-2 phone:col-start-1"
                src="/images/home-bottom2.jpg"
            />
            <HomeBottomItem
                title={'Манежі'}
                link={''}
                number={6}
                className="col-start-2 phone:col-start-1"
                src="/images/home-bottom3.jpg"
            />
        </HomeBottomContentLayout>
    );
};

export default HomeBottomContent;
