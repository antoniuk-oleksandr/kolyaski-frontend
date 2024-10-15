import {LayoutProps} from "@/types/LayoutProps";
import {ScrollArea} from "@mantine/core";
import {useViewportSize} from "@mantine/hooks";

const NewProductCategoryListLayout = (props: LayoutProps) => {
    const {children} = props;
    const {height, width} = useViewportSize()
    const isMobile = width < 960;

    return (
        <ScrollArea className={"w-full"} h={isMobile ? height - 208 : height - 291.3}>
            {children}
        </ScrollArea>
    )
}

export default NewProductCategoryListLayout;