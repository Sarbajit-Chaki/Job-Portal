import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Dashboard() {
    return (
        <>
            <div className="relative flex h-[calc(100vh-3.8rem)] overflow-y-hidden">
                <Sidebar />
                <div className=" overflow-scroll overflow-x-hidden">
                    <div className='mx-auto py-10'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}