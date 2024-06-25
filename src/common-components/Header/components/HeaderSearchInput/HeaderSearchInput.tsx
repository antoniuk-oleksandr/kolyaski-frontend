import SearchButton from "@/common-components/Header/components/SearchButton/SearchButton";
import {useForm} from "react-hook-form";
import HeaderSearchInputLayout from "@/common-components/Header/components/HeaderSearchInput/HeaderSearchInputLayout";
import HeaderSearchInputElement from "@/common-components/Header/components/HeaderSearchInput/HeaderSearchInputElement";

const HeaderSearchInput = () => {
    const methods = useForm();

    return (
        <HeaderSearchInputLayout {...methods}>
            <HeaderSearchInputElement {...methods}/>
            <SearchButton/>
        </HeaderSearchInputLayout>
    )
}

export default HeaderSearchInput;