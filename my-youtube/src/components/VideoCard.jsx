import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const { thumbnails, title, channelTitle, publishedAt } = video?.snippet;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  return (
    <li onClick={handleClick}>
      <img src={thumbnails?.high?.url} alt={title} />
      <p>{title}</p>
      <p>{channelTitle}</p>
      <p>{formatAgo(publishedAt)}</p>
    </li>
  );
}
