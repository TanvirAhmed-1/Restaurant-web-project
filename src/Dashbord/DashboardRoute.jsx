import { NavLink, Outlet } from "react-router-dom";

const DashboardRoute = () => {
  return (
    <div className="drawer drawer-mobile lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col p-4 md:p-6">
        {/* Drawer toggle button (for mobile only) */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mb-4 w-max"
        >
          Open Menu
        </label>

        {/* Nested Routes Content */}
        <div className="w-full">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        {/* Click outside to close drawer (on mobile) */}
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-64 min-h-full bg-[#D1A054] text-black space-y-2">
          {/* Brand */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold">Mamma Mia</h2>
            <p className="text-xs tracking-widest font-semibold">Restaurant</p>
          </div>

          {/* Dashboard Links */}
          <li>
            <NavLink
              to="/dashboard/addProduct"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold bg-primary rounded-md p-2"
                  : "hover:bg-yellow-400 rounded-md p-2"
              }
            >
              Upload Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/allProduct"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold bg-primary rounded-md p-2"
                  : "hover:bg-yellow-400 rounded-md p-2"
              }
            >
              All Product
            </NavLink>
          </li>

          <hr className="my-4 border-black" />

          {/* Main Site Links */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold bg-primary rounded-md p-2"
                  : "hover:bg-yellow-400 rounded-md p-2"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/orderHistory"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold bg-primary rounded-md p-2"
                  : "hover:bg-yellow-400 rounded-md p-2"
              }
            >
              Order History
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardRoute;
