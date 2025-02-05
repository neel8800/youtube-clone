import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="h-screen overflow-y-auto bg-white custom-scrollbar shadow-lg">
      <div className="py-5">
        <div>Home</div>
        <div>Shorts</div>
        <div>Subscriptions</div>
      </div>
      <hr />
      <div className="py-5">
        <div>You</div>
        <div>History</div>
        <div>Playlist</div>
        <div>Your videos</div>
        <div>Your courses</div>
        <div>Watch later</div>
        <div>Liked videos</div>
      </div>
      <hr />
      <div className="py-5">
        <div>Subscriptions</div>
        <div>Music</div>
        <div>Sports</div>
        <div>Gaming</div>
        <div>Movies</div>
      </div>
      <hr />
      <div className="py-5">
        <div>Explore</div>
        <div>Shopping</div>
        <div>Music</div>
        <div>Gaming</div>
        <div>Live</div>
        <div>Movies</div>
        <div>News</div>
        <div>Sports</div>
        <div>Courses</div>
        <div>Fashion & Beuty</div>
        <div>Podcasts</div>
      </div>
      <hr />
      <div className="py-5">
        <div>Settings</div>
        <div>Report history</div>
        <div>Help</div>
        <div>Feedback</div>
      </div>
    </div>
  );
};

export default SideBar;
