import Home from "./components/home";
import Sidebar from "./components/sidebar";

const App = () => {
  return ( 
    <div className="w-screen h-screen grid grid-cols-8">
      <Sidebar/>
      <Home/>
    </div>
   );
}
 
export default App;