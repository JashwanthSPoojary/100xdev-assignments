import { Badge, Contact, House, ListOrdered, LogOut } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
    // const [collapssed,setCollapsed] = useState(false);
    return ( 
        <div className="flex flex-col col-span-2 h-screen border p-8 gap-8">
            <div className="flex flex-row justify-between ">
                <button className="bg-blue-700 rounded-lg px-7 text-blue-50 hidden md:inline">Webinar</button>
                <img className="w-12 rounded-md" src="https://imgs.search.brave.com/xFkz2rHVRFxHB3pOHKPh-9VUyP9DKszbVpTUzIP9HvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc"/>
            </div>
            <div className="">
                <div className="flex flex-row justify-between hover:bg-slate-400 p-4 rounded-lg">
                    <p className="hidden md:inline">Home</p>
                    <House />
                </div>
                <div className="flex flex-row justify-between hover:bg-slate-400 p-4 rounded-lg">
                    <p className="hidden md:inline">Purchase</p>
                    <Badge />
                </div>
                <div className="flex flex-row justify-between hover:bg-slate-400 p-4 rounded-lg">
                    <p className="hidden md:inline">Customer</p>
                    <Contact />
                </div>
                <div className="flex flex-row justify-between hover:bg-slate-400 p-4 rounded-lg">
                    <p className="hidden md:inline">Orders</p>
                    <ListOrdered />
                </div>
                <div className="flex flex-row justify-between hover:bg-slate-400 p-4 rounded-lg">
                    <p className="collapse md:visible">Log out</p>
                    <LogOut />
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;