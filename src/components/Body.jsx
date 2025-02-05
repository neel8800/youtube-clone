import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import { Outlet } from "react-router";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="grid grid-cols-12 gap-4">
      {isMenuOpen && (
        <div className="col-span-2">
          <SideBar />
        </div>
      )}
      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
