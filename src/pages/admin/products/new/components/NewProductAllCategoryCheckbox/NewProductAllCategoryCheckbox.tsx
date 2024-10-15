import NewProductAllCategoryCheckboxLayout from "./NewProductAllCategoryCheckboxLayout";
import {Checkbox} from "@mantine/core";
import {getCommentCheckboxStyles} from "@/pages/admin/comments/components/comment-checkbox-styles";

type NewProductAllCategoryCheckboxProps = {
    isSelected: boolean,
}

const NewProductAllCategoryCheckbox = (props: NewProductAllCategoryCheckboxProps) => {
    const {isSelected} = props;

    return (
        <NewProductAllCategoryCheckboxLayout isSelected={isSelected}>
            <Checkbox
                className={`duration-200 ease-out hover:bg-gray-300 hover:ring-[8px] rounded-full ring-gray-300`}
                onChange={() => null}
                variant="outline"
                styles={getCommentCheckboxStyles(isSelected)}
                checked={isSelected}
                onClick={() => null}
            />
        </NewProductAllCategoryCheckboxLayout>
    )
}

export default NewProductAllCategoryCheckbox;