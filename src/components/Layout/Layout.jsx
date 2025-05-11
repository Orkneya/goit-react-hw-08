import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
// import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
