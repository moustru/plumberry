import { css } from "@/styled-system/css";

export const billingItemBlock = css({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  height: "fit-content",
  padding: "2.5rem",
  borderRadius: "24px",
  boxShadow: "0 2px 12px rgba(20, 20, 43, .08)",
});

export const blackVariant = css({
  bgColor: "#000",
});

export const textWhite = css({
  color: "#fff",
});

export const textPurple = css({
  color: "purple.200",
});

export const billingItemPrice = css({
  display: "flex",
  alignItems: "center",
  gap: ".25rem",
});

export const billingItemList = css({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
});
