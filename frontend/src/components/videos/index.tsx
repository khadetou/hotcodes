import { FC } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const Video: FC<{ play?: boolean; setPlay?: () => void }> = ({
  play,
  setPlay,
}) => {
  const onPlyaerReady: YouTubeProps["onReady"] = (e: any) => {
    e.target.playVideo();
  };
  const opts: YouTubeProps["opts"] = {
    height: "680",
    width: "1080",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //   autoPlay: 1,
      play: !play ? 1 : 0,
    },
  };
  return (
    <YouTube
      className={`fixed top-1/2 -translate-y-1/2 z-60 left-1/2 transition-all ease-linear duration-500 -translate-x-1/2 border-8 rounded-md border-white ${
        !play ? "!opacity-0 !invisible !translate-y-[100%]" : "visible"
      }`}
      videoId="4Xhb30vroXE"
      opts={opts}
      onReady={onPlyaerReady}
    />
  );
};

export default Video;
