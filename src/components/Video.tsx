import { useState, useEffect, VideoHTMLAttributes, useRef } from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../theme";

const SVideo = styled("video", {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "all 500ms",
});

export type TVideoProps = VideoHTMLAttributes<HTMLVideoElement> &
  Stitches.VariantProps<typeof SVideo>;

export const Video = ({ src, ...rest }: TVideoProps) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <SVideo width="320" height="240" controls {...rest}>
      <source src={src} />
      Your browser does not support the video tag.
    </SVideo>
  );
};
