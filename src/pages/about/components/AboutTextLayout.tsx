import {LayoutProps} from "@/types/LayoutProps";

const AboutTextLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col gap-y-3 text-justify mb-9"}>
            {children}
        </div>
    )
}

export default AboutTextLayout;