import type * as Stitches from "@stitches/react";
import { HTMLAttributes } from "react";
import { styled } from "../theme";

const SButton = styled("button", {
  textAlign: "center",
  display: "flex",
  marginTop: "$2",
  justifyContent: "center",
});

export type TButtonProps = HTMLAttributes<HTMLImageElement> &
  Stitches.VariantProps<typeof SButton>;

export const Button = ({ children }: TButtonProps) => {
  return <SButton>{children}</SButton>;
};
