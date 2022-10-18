import { VideoHTMLAttributes } from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../theme";

const SVideo = styled("video", {
  width: "100%",
  height: "100%",
});

export type TVideoProps = VideoHTMLAttributes<HTMLVideoElement> &
  Stitches.VariantProps<typeof SVideo>;

export const Video = ({ src, ...rest }: TVideoProps) => {
  return (
    <SVideo width="320" height="240" controls {...rest}>
      <source src={src} />
      Your browser does not support the video tag.
    </SVideo>
  );
};
