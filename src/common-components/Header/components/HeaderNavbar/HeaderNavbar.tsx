import HeaderNavbarLayout from "./HeaderNavbarLayout";
import HeaderNavbarItem from "@/common-components/Header/components/HeaderNavbarItem/HeaderNavbarItem";
import {useCurrentPage} from "@/common-components/Header/use-current-page";
import {headerNavbarItemList} from "../HeaderNavbarItemList";
import {Key} from "react";

const HeaderNavbar = () => {
    const {currentPage} = useCurrentPage();

    return (
        <HeaderNavbarLayout>
            {headerNavbarItemList.map((item, index: Key) => (
                <HeaderNavbarItem
                    key={index}
                    text={item.text}
                    isSelected={item.link === currentPage}
                    link={item.link}
                />
            ))}
        </HeaderNavbarLayout>
    )
}

export default HeaderNavbar;