import { css } from "@/styled-system/css";

export const billingItemsBlock = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  alignItems: "flex-end",
  columnGap: "1.5rem",
  marginBlockStart: "2.5rem",
  marginInline: "3rem",
});
