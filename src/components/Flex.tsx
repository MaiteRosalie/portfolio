import { styled } from "../theme";

export const Flex = styled("div", {
  display: "flex",
  variants: {
    alignCenter: {
      true: {
        alignItems: "center",
      },
    },
    justifyBetween: {
      true: {
        justifyContent: "space-between",
      },
    },
  },
});
