import {LayoutProps} from "@/types/LayoutProps";

const AboutImageListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"grid grid-cols-3 bg-white rounded-md phone:flex phone:flex-col"}>
            {children}
        </div>
    )
}

export default AboutImageListLayout;