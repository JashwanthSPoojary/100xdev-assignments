// import Home from './components/home';
// import Sidebar from './components/sidebar'
import { Routes,Route } from "react-router-dom";

import Auth from "./page/auth";
import Home from "./page/home";

const App = () => {
  return ( 
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>}/>
    </Routes>
   );
}
 
export default App;