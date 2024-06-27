import {LayoutProps} from "@/types/LayoutProps";

type HomeContentLayout = LayoutProps & {
    reverse?: boolean,
}

const PageContentLayout = (props: HomeContentLayout) => {
    const {children, reverse} = props;

    return (
        <div className={`flex phone:flex-col ${reverse && 'phone:flex-col-reverse'}`}>
            {children}
        </div>
    )
}

export default PageContentLayout;