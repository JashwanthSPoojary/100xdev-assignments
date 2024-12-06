import { Plus, Share2 } from "lucide-react";
import Button from "./button";
import Card from "./card";


const Dashboard = () => {
    return ( 
        <div className="flex flex-col w-full overflow-y-auto">
            <div className="flex justify-between py-6 px-4 items-center pb-16">
                <h1 className="text-2xl font-semibold ">Notes</h1>
                <div className="flex gap-5">
                    <Button color="bg-blue-400" Icon={Share2} title="Share Brain" />
                    <Button color="bg-blue-700" Icon={Plus} title="Add Content" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-y-7 xl:px-16">
                <Card title="Add todo" description="Hello world, this is my day" date="10-1-2024"/>
                <Card title="Add todo" description="Hello world, this is my day" date="10-1-2024"/>
                <Card title="Add todo" description="Hello world, this is my day" date="10-1-2024"/>
                <Card title="Add todo" description="Hello world, this is my day" date="10-1-2024"/>
                <Card title="Add todo" description="Hello world, this is my day" date="10-1-2024"/>
                <Card title="Add todo" description="Hello world, this is my day" date="10-1-2024"/>

            </div>

        </div>
     );
}
 
export default Dashboard;