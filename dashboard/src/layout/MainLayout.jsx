import React, { lazy } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(()=>import("./Header"))
const Sidebar = lazy(()=>import("./Sidebar"))

const MainLayout = () => {
  return (
    <div className="bg-[#A435F0] min-h-screen">
      <Header/>
      <Sidebar/>
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
