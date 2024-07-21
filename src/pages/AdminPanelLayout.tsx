import {LayoutProps} from "@/types/LayoutProps";
import AdminSidebar from "@/pages/admin/components/AdminSidebar/AdminSidebar";
import AdminHeader from "@/pages/admin/components/AdminHeader/AdminHeader";
import {motion} from "framer-motion";
import {useTokenInfo} from "@/pages/admin/use-effects/use-token-info";
import AdminSignIn from "@/pages/admin/components/AdminSignIn/AdminSignIn";
import AdminLoader from "@/pages/admin/components/AdminLoader";
import {useDispatch, useSelector} from "react-redux";

const AdminPanelLayout = (props: LayoutProps) => {
    const {children} = props;
    const {tokenInfo} = useSelector((state: any) => state.token);
    const dispatch = useDispatch();
    useTokenInfo(dispatch);

    if (tokenInfo === undefined) return <AdminLoader/>
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, easings: "easeOut"}}
        >
            <AdminHeader hide={tokenInfo === null}/>
            <div className={"w-full flex"}>
                <AdminSidebar hide={tokenInfo === null}/>
                {tokenInfo === null ? <AdminSignIn/> :
                    (
                        <div className={"flex-1 p-3"}>
                            {children}
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}

export default AdminPanelLayout;