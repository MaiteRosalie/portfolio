import { styled, KFadeInRight } from "../theme";
import { Card } from "./Card";

export const SWrapper = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: `${KFadeInRight} 200ms forwards`,
});
export const SOverlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(25, 25, 25, 0.8)",
  cursor: "pointer",
});
export const SCard = styled(Card, {
  padding: "$2",
  position: "relative",
});
