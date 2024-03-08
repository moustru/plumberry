import { css, cx } from "@/styled-system/css";

const Inter = css({
  fontFamily: "Inter, sans-serif",
});

const DMSans = css({
  fontFamily: "DM Sans, sans-serif",
});

const font400 = css({
  fontWeight: 400,
});

const font500 = css({
  fontWeight: 500,
});

const font700 = css({
  fontWeight: 700,
});

const Inter400 = cx(Inter, font400);

const Inter500 = cx(Inter, font500);

const Inter700 = cx(Inter, font700);

const DMSans700 = cx(DMSans, font700);

const setFont = (fontSize: number, lineHeight: number, letterSpacing = 0) => ({
  fontSize: `${fontSize}px`,
  lineHeight: `${lineHeight}px`,
  letterSpacing: `${letterSpacing}px`,
  color: "textPrimary",
});

export const H1 = cx(DMSans700, css(setFont(90, 90, -2)));

export const H2 = cx(DMSans700, css(setFont(54, 60, -1.24)));

export const H4 = cx(DMSans700, css(setFont(26, 60, -1.24)));

export const H5 = cx(DMSans700, css(setFont(18, 24, -0.55)));

export const textLarge = cx(Inter400, css(setFont(22, 31, -0.77)));

export const textMedium = cx(Inter400, css(setFont(16, 23, -0.16)));

export const textSmall = cx(Inter400, css(setFont(14, 17)));

export const textSmallBold = cx(Inter700, css(setFont(14, 17)));

export const textBold = cx(Inter500, css(setFont(16, 20, -0.32)));

export const textTag = cx(Inter500, css(setFont(13, 31, -0.32)));
