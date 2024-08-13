// AdminMobileProductListElementLayout.tsx

import { LayoutProps } from "@/types/LayoutProps";

const AdminMobileProductListElementLayout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="flex flex-col gap-y-3 bg-white first:rounded-t-none p-3 rounded-md">
            {children}
        </div>
    );
}

export default AdminMobileProductListElementLayout;
