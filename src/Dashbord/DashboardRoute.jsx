import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Pages/Footer";


const DashboardRoute = () => {
    return (
        <div>
           <Navbar></Navbar>
           <section>
            <div className="h-40 w-full "></div>
           </section>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default DashboardRoute;