import { useNavigate } from "react-router-dom";
import {sidebarLinks} from "../data/sidebar-links";
import SidebarLink from "./SidebarLink";
import { VscSignOut } from "react-icons/vsc";

export default function Sidebar() {
    const navigate = useNavigate();
    const user = { // dummy data
        accountType: 'hr'
    }

    return (
        <>
            <div className="flex px-5 items-center gap-y-10 min-w-[180px] justify-center flex-col border-r-[1px] py-10">
                <div className="flex flex-col items-center gap-y-10">
                    {sidebarLinks.map((link) => {
                        if(link.type && user.accountType !== link.type) return null;
                        return <SidebarLink key={link.id} link={link} iconName={link.icon} />
                    })}
                </div>
                <div className="flex flex-col items-center gap-y-10">
                    <SidebarLink 
                        link={{name: "Settings", path: "/settings"}} 
                        iconName="VscSettingsGear" 
                    />
                    <button className="flex flex-col items-center text-[#42464d]">
                        <VscSignOut className="text-4xl" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}