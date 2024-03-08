import { css } from "@/styled-system/css";

export const headerBlock = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBlock: "1.5rem",
  paddingInline: "1rem",
  bgColor: "purple.100",
});

export const menuBlock = css({
  display: "flex",
  alignItems: "center",
});

export const menuNavBlock = css({
  display: "flex",
  gap: "1.5rem",
  marginInlineEnd: "1.5rem",
});

export const navItem = css({
  color: "textTertiary",
});
