import PopularProductTypesBlock from "@/pages/home/components/PopularProductTypesBlock/PopularProductTypesBlock";
import PopularProductLists from "@/pages/home/components/PopularProductLists/PopularProductLists";
import {HomeData} from "@/types/HomeData";
import HomeCenterLeftSideLayout from "@/pages/home/components/HomeLeftSide/HomeCenterLeftSideLayout";

type HomeCenterLeftSideProps = {
    homeData: HomeData,
}

const HomeCenterLeftSide = (props: HomeCenterLeftSideProps) => {
    return (
        <HomeCenterLeftSideLayout>
            <PopularProductTypesBlock/>
            <PopularProductLists {...props}/>
        </HomeCenterLeftSideLayout>
    )
}

export default HomeCenterLeftSide;