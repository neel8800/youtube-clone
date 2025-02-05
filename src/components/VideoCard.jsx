/* eslint-disable react/prop-types */
const VideoCard = (props) => {
  const { snippet, statistics } = props.videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-50 shadow rounded-lg cursor-pointer">
      <img src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
