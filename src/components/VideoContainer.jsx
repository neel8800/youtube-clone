import { useEffect, useState } from "react";
import { MOST_POPULAR_VIDEOS_API_URL } from "../constants/apiURLs";
import VideoCard from "./VideoCard";

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
    <div className="flex flex-wrap">
      {mostPopularVideos.map((video) => {
        return <VideoCard key={video.id} videoInfo={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
