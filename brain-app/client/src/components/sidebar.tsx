import { Badge, Contact, House, ListOrdered, LogOut } from "lucide-react";

const Sidebar = () => {
    return ( 
        <aside className="flex flex-col col-span-1 h-screen border p-2 xl:px-4 gap-8 w-20 xl:w-80 top-0 sticky py-8">
            <div className="flex flex-row justify-between ">
                <div className="bg-blue-600 text-white px-7 py-3 rounded-lg hidden xl:inline">Brainly</div>
                <img className="w-12 rounded-md" src="https://imgs.search.brave.com/xFkz2rHVRFxHB3pOHKPh-9VUyP9DKszbVpTUzIP9HvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc"/>
            </div>
            <div className="">
                <div className="flex flex-row justify-between hover:bg-slate-400 p-4 rounded-lg">
                    <p className="hidden md:hidden xl:inline ">Home</p>
                    <House />
                </div>
                <div className="flex flex-row justify-between hover:bg-slate-400 p-4 rounded-lg">
                    <p className="hidden md:hidden xl:inline">Purchase</p>
                    <Badge />
                </div>
                <div className="flex flex-row justify-between hover:bg-slate-400 p-4 rounded-lg">
                    <p className="hidden md:hidden xl:inline">Customer</p>
                    <Contact />
                </div>
                <div className="flex flex-row justify-between hover:bg-slate-400 p-4 rounded-lg">
                    <p className="hidden md:hidden xl:inline">Orders</p>
                    <ListOrdered />
                </div>
                <div className="flex flex-row justify-between hover:bg-slate-400 p-4 rounded-lg">
                    <p className="hidden md:hidden xl:inline">Log out</p>
                    <LogOut />
                </div>
            </div>
        </aside>
     );
}
 
export default Sidebar;