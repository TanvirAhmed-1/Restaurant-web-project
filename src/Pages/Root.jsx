import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <section>
        <Navbar></Navbar>
      </section>
      <Outlet></Outlet>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Root;
