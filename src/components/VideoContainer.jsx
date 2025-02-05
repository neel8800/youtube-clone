import { useEffect, useState } from "react";
import { MOST_POPULAR_VIDEOS_API_URL } from "../constants/apiURLs";
import VideoCard from "./VideoCard";
import { Link } from "react-router";

const VideoContainer = () => {
  const [mostPopularVideos, setMostPopularVideos] = useState([]);

  useEffect(() => {
    fetchMostPopularYTVideos();
  }, []);

  const fetchMostPopularYTVideos = async () => {
    const data = await fetch(MOST_POPULAR_VIDEOS_API_URL);
    const json = await data.json();
    setMostPopularVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-between">
      {mostPopularVideos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
