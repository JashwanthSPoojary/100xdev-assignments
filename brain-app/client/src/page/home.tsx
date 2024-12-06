import Dashboard from "../components/dashboard";
import Sidebar from "../components/sidebar";

const Home = () => {
    return ( 
        <div className='w-screen h-screen flex flex-row gap-2'>
            <Sidebar/>
            <Dashboard/>
        </div>
     );
}
 
export default Home;