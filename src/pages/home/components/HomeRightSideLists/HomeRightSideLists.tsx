import HomeRightSideListsLayout from "./HomeRightSideListsLayout";
import {HomeData} from "@/types/HomeData";
import HomeRightSideListElement from "@/pages/home/components/HomeRightSideListElement/HomeRightSideListElement";

type HomeRightSideListsProps = {
    homeData: HomeData,
}

const HomeRightSideLists = (props: HomeRightSideListsProps) => {
    const {homeData} = props;
    const homeDataKeys = Object.keys(homeData);

    return (
        <HomeRightSideListsLayout>
            {/*{homeDataKeys.map((homeDataKey, index) => (*/}
            {homeDataKeys.slice(homeDataKeys.length - 2, homeDataKeys.length).map((homeDataKey, index) => (
                <HomeRightSideListElement homeDataKey={homeDataKey} {...props} key={index}/>
            ))}
        </HomeRightSideListsLayout>
    )
}

export default HomeRightSideLists;