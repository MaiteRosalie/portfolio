import { styled } from "../theme";

export const SGridItem = styled("div", {
  overflow: "hidden",
  position: "relative",
  backgroundColor: "$neutral1",
  img: {
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    "&:hover": {
      transform: "scale(1.045)",
    },
  },
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

export const SelectedImg = styled("div", {
  width: "70vw",
  height: "70vh",
  overflow: "hidden",
  position: "relative",
  "@bp1": {
    width: "90vw",
    height: "40vh",
  },
});
