import ThirdBottomHeaderColumn from "../ThirdBottomHeaderColumn/ThirdBottomHeaderColumn";
import BottomHeaderLineLayout from "./BottomHeaderLineLayout";
import FirstBottomHeaderColumn
    from "@/common-components/Header/components/FirstBottomHeaderColumn/FirstBottomHeaderColumn";
import SecondBottomHeaderColumn
    from "@/common-components/Header/components/SecondBottomHeaderColumn/SecondBottomHeaderColumn";

const BottomHeaderLine = () => {
    return (
        <BottomHeaderLineLayout>
            <FirstBottomHeaderColumn/>
            <SecondBottomHeaderColumn/>
            <ThirdBottomHeaderColumn/>
        </BottomHeaderLineLayout>
    )
}

export default BottomHeaderLine;