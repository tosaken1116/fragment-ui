import type { spacingKeys } from "./index.type";

export const spacingObject: Record<spacingKeys, string> = {
    small: "4px",
    base: "8px",
    medium: "16px",
    large: "24px",
    extraLarge: "32px",
};

export const spacingRecipe = {
    small: spacingObject.small,
    base: spacingObject.base,
    medium: spacingObject.medium,
    large: spacingObject.large,
    extraLarge: spacingObject.extraLarge,
};
