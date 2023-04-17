import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ channelId, channelTitle }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channels", channelId],
    () => youtube.channelImageURL(channelId),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <div>
      {url && <img src={url} alt={channelTitle} />}
      <p>{channelTitle}</p>
    </div>
  );
}
