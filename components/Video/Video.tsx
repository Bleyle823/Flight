import { useEffect, useRef } from "react";

interface Props {
  track: MediaStreamTrack;
}

const Video: React.FC<Props> = ({ track }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const getStream = (track: MediaStreamTrack) => {
    const stream = new MediaStream();
    stream.addTrack(track);
    return stream;
  };

  useEffect(() => {
    const videoObj = videoRef.current;
    if (videoObj) {
      videoObj.srcObject = getStream(track);
      videoObj.onloadedmetadata = async () => {
        try {
          await videoObj.play();
        } catch (error) {
          console.log({ error });
        }
      };

      videoObj.onerror = () => {
        console.log("error");
      };
    }
  }, [track]);

  return <video ref={videoRef} autoPlay className="object-cover w-full" />;
};

export default Video;
