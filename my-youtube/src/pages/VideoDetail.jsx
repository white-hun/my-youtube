import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <>
      <section>
        <article>
          <iframe
            id="player"
            type="text/html"
            width="640"
            height="360"
            src={`http://www.youtube.com/embed/${video.id}`}
            title={title}
            frameborder="0"
          ></iframe>
          <h2>{title}</h2>
          <ChannelInfo channelId={channelId} channleTitle={channelTitle} />
          <pre>{description}</pre>
        </article>
      </section>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </>
  );
}
