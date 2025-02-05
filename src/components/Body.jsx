import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
