import { ArrowLeft, ArrowLeftIcon, ArrowRightIcon, Calendar } from "lucide-react";

const Home = () => {
    return ( 
        <div className="col-span-6 h-screen">
            <div className="w-full h-1/6 bg-blue-500"></div>
            <div className="w-full h-full grid grid-cols-8">
                <div className="col-span-2 h-full "></div>
                <div className="col-span-6 h-full grid-rows-6">
                    <div className="w-full mt-4">
                        <p className="text-gray-900 leading-8">Monday 1st October</p>
                        <h2 className="text-3xl">Good morning, Prasad</h2>
                    </div>
                    <div className="w-full h-full flex flex-row ">
                        <div className="border p-6 w-[340px]">
                            <div className="flex justify-between">
                                <div className="flex flex-row gap-2 ">
                                <Calendar/>
                                <p>Monday 1st October</p>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <ArrowLeftIcon/>
                                    <ArrowRightIcon/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Home;