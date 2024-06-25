import {FaBabyCarriage} from "react-icons/fa";
import Wrapper from "@/common-components/Wrapper";
import TopHeaderLineLayout from "@/common-components/Header/components/TopHeaderLine/TopHeaderLineLayout";
import TopHeaderLineContentLayout from "@/common-components/Header/components/TopHeaderLine/TopHeaderLineContentLayout";

const TopHeaderLine = () => {
    return (
        <TopHeaderLineLayout>
            <Wrapper>
                <TopHeaderLineContentLayout>
                    <FaBabyCarriage/>
                </TopHeaderLineContentLayout>
            </Wrapper>
        </TopHeaderLineLayout>
    )
}

export default TopHeaderLine;