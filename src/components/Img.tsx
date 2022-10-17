import { useState, useEffect, ImgHTMLAttributes, useRef } from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../theme";

const SImg = styled("img", {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "all 500ms",
});

export type TImgProps = ImgHTMLAttributes<HTMLImageElement> &
  Stitches.VariantProps<typeof SImg>;

export const Img = ({ src, ...rest }: TImgProps) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <SImg
      src={src}
      onLoad={() => {
        setTimeout(() => {
          setLoaded(true);
        }, 200);
      }}
      css={{
        opacity: loaded ? "1" : "0",
      }}
      {...rest}
    />
  );
};
