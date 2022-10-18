import { styled, KFadeInRight } from "../theme";

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
  background: "rgba(0, 0, 0, 0.8)",
  cursor: "pointer",
});
