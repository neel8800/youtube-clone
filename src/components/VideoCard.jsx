/* eslint-disable react/prop-types */
const VideoCard = (props) => {
  const { snippet, statistics } = props.videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-4 m-4 w-72 shadow-lg rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200">
      <img src={thumbnails.medium.url} className="rounded-lg w-full" />
      <ul className="mt-3">
        <li className="font-semibold">{title}</li>
        <li className="text-sm text-gray-500">{channelTitle}</li>
        <li className="text-sm text-gray-400">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
