import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router";
import { GET_VIDEO_BY_ID } from "../constants/apiURLs";
import { closeMenu } from "../utils/store/slices/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchQueryParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoInfo(searchQueryParams.get("v"));
  }, []);

  const fetchVideoInfo = async (videoId) => {
    const data = await fetch(GET_VIDEO_BY_ID(videoId));
    const json = await data.json();

    setVideoInfo(json.items[0]);
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      <div className="col-span-11 w-full">
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={"https://www.youtube.com/embed/" + searchQueryParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4 bg-gray-100">
          <div className="font-bold text-xl p-2">
            {videoInfo?.snippet?.title}
          </div>
          <div className="font-bold text-xl p-2">
            {videoInfo?.snippet?.channelTitle}
          </div>
          <div className="flex p-2 justify-between">
            <div className="flex gap-1">
              <p className="border-2 border-black p-1 rounded-lg">
                Views: {videoInfo?.statistics?.viewCount}
              </p>
              <p className="border-2 border-black p-1 rounded-lg">
                Likes: {videoInfo?.statistics?.likeCount}
              </p>
              <p className="border-2 border-black p-1 rounded-lg">
                Comments: {videoInfo?.statistics?.commentCount}
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <button className="border-2 border-black p-1 rounded-lg cursor-pointer">
                Share
              </button>
              <button className="border-2 border-black p-1 rounded-lg cursor-pointer">
                Download
              </button>
              <button className="border-2 border-black p-1 rounded-lg cursor-pointer">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 bg-gray-100 p-4 w-full">
        <p>Right Side</p>
      </div>
    </div>
  );
};

export default WatchPage;
