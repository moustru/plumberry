import { blackVariant } from "./styles";
import type { Variant } from "./types";

export const setVariant = (variant: Variant) => {
  switch (variant) {
    case "white":
    default:
      return "";
    case "black":
      return blackVariant;
  }
};
