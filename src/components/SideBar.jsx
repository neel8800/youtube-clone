import { Link } from "react-router";

const SideBar = () => {
  return (
    <div className="h-screen overflow-y-auto bg-white shadow-lg custom-scrollbar">
      <div className="py-5">
        <Link
          to={"/"}
          className="block text-lg font-semibold hover:text-blue-600"
        >
          Home
        </Link>
        <div className="py-2 hover:text-blue-600 cursor-pointer">Shorts</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">
          Subscriptions
        </div>
      </div>
      <hr />
      <div className="py-5">
        <div className="py-2 hover:text-blue-600 cursor-pointer">History</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">Playlist</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">
          Your videos
        </div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">
          Your courses
        </div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">
          Watch later
        </div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">
          Liked videos
        </div>
      </div>
      <hr />
      <div className="py-5">
        <div className="py-2 hover:text-blue-600 cursor-pointer">Music</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">Sports</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">Gaming</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">Movies</div>
      </div>
      <hr />
      <div className="py-5">
        <div className="py-2 hover:text-blue-600 cursor-pointer">Explore</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">Shopping</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">Live</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">News</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">Sports</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">
          Fashion & Beauty
        </div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">Podcasts</div>
      </div>
      <hr />
      <div className="py-5">
        <div className="py-2 hover:text-blue-600 cursor-pointer">Settings</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">
          Report history
        </div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">Help</div>
        <div className="py-2 hover:text-blue-600 cursor-pointer">Feedback</div>
      </div>
    </div>
  );
};

export default SideBar;
