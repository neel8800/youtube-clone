import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <ButtonList />
      </div>
      <div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
