import {NextRouter} from "next/router";

export const handleAdminSidebarItemClick = async (
    router: NextRouter,
    link: string,
    clickAction?: () => void,
) => {
    await router.push(link);
    clickAction && clickAction();
}