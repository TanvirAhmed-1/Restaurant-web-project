import { NavLink, Outlet } from "react-router-dom";

const DashboardRoute = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col items-center justify-start p-6">
        {/* Drawer toggle button (visible on small screens) */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mb-4"
        >
          Open Menu
        </label>
        {/* Page content from nested routes */}
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 min-h-full bg-[#D1A054] text-base-content">
          {/* Brand Info */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-black">BISTRO BOSS</h2>
            <p className="text-sm tracking-[4px] font-semibold text-black">
              Restaurant
            </p>
          </div>

          {/* Sidebar Menu */}
          <div className="text-black">
            <li>
              <NavLink to="/dashboard/addProduct">Upload Product</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allProduct">All Product</NavLink>
            </li>
          </div>
          <hr></hr>
          <div className="text-black">
          <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/orderHistory">Order History</NavLink>
            </li>
          </div>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default DashboardRoute;
