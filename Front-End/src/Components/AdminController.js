import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { InboxesFill} from "react-bootstrap-icons";
function AdminController() {
    const [active, setActive] = useState(window.location.href.split("/")[3])
    return (
        <div className="flex flex-row min-h-screen">
            <div className="w-1/5 min-h-screen bg-[#535C91]">
                <h2 className="text-center main-font bg-[#333C71] text-xl py-4">Administrator Page</h2>
                <div className="w-full mt-8">
                    <Link className={`flex px-4 py-4 items-center gap-4 text-white text-md hover:underline duration-200 ${active === "admin" && "bg-[#737CB1]"}`}
                    onClick={()=>{setActive("admin")}}>
                        <InboxesFill />
                        <h2>Products</h2>
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default AdminController;