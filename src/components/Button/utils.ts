import { blackVariant, transparentVariant, whiteVariant } from "./styles";
import type { ButtonVariant } from "./types";

export const setVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "black":
    default:
      return blackVariant;
    case "white":
      return whiteVariant;
    case "transparent":
      return transparentVariant;
  }
};
