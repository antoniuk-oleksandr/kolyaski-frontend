export const getCommentCheckboxStyles = (isSelected: boolean,) => {
    return {
        input: {
            borderColor : isSelected ? "white" : "",
            cursor: "pointer",
            transitionDuration: "200ms",
            transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
            outline: "none",
        },
        icon: {
            color: isSelected ? "white" : "",
        }
    }
}