import { css } from "@/styled-system/css";

export const bannerBlock = css({
  position: "relative",
  height: "710px",
  bgGradient: "to-b",
  gradientFrom: "purple.100",
  gradientTo: "#183EC2",
});

export const bannerContent = css({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  width: "511px",
  paddingBlockStart: "7rem",
  paddingBlockEnd: "10rem",
  marginInlineStart: "3rem",
});

export const vurtelStyles = css({
  position: "absolute",
  top: 0,
  right: 0,
});

export const cylinderStyles = css({
  position: "absolute",
  top: 0,
  right: "550px",
});

export const halfTorusStyles = css({
  position: "absolute",
  bottom: "-15%",
  right: 0,
});
