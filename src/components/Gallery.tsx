import type * as Stitches from "@stitches/react";
import { Card } from "./Card";
import { Img } from "./Img";
import { styled } from "../theme";

const SGallery = styled(Card, {});

const SGridItem = styled("div", {
  overflow: "hidden",
  position: "relative",
  backgroundColor: "$neutral1",
  variants: {
    float: {
      left: {
        float: "left",
      },
      right: {
        float: "right",
      },
    },
    size: {
      vertical: {
        width: "25%",
        paddingTop: "50%",
      },
      horizontal: {
        width: "50%",
        paddingTop: "25%",
      },
      square: {
        width: "25%",
        paddingTop: "25%",
      },
    },
  },
  defaultVariants: {
    float: "left",
  },
});
const SImg = styled(Img, {
  cursor: "pointer",
  position: "absolute",
  top: 0,
  left: 0,
  "&:hover": {
    transform: "scale(1.045)",
  },
});

export type TGalleryProps = {
  images: Array<
    {
      src: string;
      alt: string;
    } & Stitches.VariantProps<typeof SGridItem>
  >;
};

export const Gallery = ({ images }: TGalleryProps) => {
  return (
    <SGallery>
      {images.map(({ size, src, float, ...img }) => (
        <SGridItem size={size} float={float}>
          <SImg
            className="image"
            key={src}
            src={`/images/${src}`}
            title={img.alt}
            {...img}
          />
        </SGridItem>
      ))}
    </SGallery>
  );
};
