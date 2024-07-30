import {useFormContext} from "react-hook-form";
import {handleCommentSearchInputChange} from "@/pages/admin/comments/[id]/handlers";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {Dispatch, SetStateAction} from "react";

type CommentSearchElementProps = {
    inputValue: string,
    setInputValue: Dispatch<SetStateAction<string>>
}

const CommentSearchElement = (props: CommentSearchElementProps) => {
    const {inputValue, setInputValue} = props;
    const {register} = useFormContext();
    const {onChange: formOnChange, ...rest} = register("search");

    return (
        <input
            spellCheck={false}
            autoComplete={"off"}
            value={inputValue}
            {...register("search")}
            onChange={(e) => handleCommentSearchInputChange(e, formOnChange, setInputValue)}
            type="text"
            className={"w-full outline-none h-fit bg-transparent"}
            {...rest}
        />
    )
}

export default CommentSearchElement;