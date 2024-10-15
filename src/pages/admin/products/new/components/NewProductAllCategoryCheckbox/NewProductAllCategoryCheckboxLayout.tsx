import {LayoutProps} from "@/types/LayoutProps";
import {Tooltip} from "@mantine/core";
import React from "react";

type NewProductAllCategoryCheckboxLayoutProps = LayoutProps & {
    isSelected: boolean,
}

const NewProductAllCategoryCheckboxLayout = (
    props: NewProductAllCategoryCheckboxLayoutProps
) => {
    const {children, isSelected} = props;

    return (
        <Tooltip
            className={"mt-1"} position={"bottom"}
            label={!isSelected ? 'Вибрати всі' : 'Вибрати жоден'}
        >
            <div className={"items-center"}>
                {children}
            </div>
        </Tooltip>
    )
}

export default NewProductAllCategoryCheckboxLayout;