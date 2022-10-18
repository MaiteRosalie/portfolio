import { styled } from "../theme";
import { Img } from "./Img";
import { Video } from "./Video";

export const SGridItemImage = styled(Img, {
  position: "absolute",
  top: 0,
  left: 0,
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.045)",
  },
});
export const SGridItem = styled("div", {
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

export const SModalImage = styled(Img, {
  position: "relative",
  maxWidth: "60vw",
  maxHeight: "80vh",
  width: "auto",
  height: "auto",
});
export const SModalVideo = styled(Video, {
  position: "relative",
  width: "56vw",
  height: "calc(56vw * 0.56)",
  "@bp1": {
    width: "90vw",
  },
});
