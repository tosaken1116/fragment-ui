import { style } from "@vanilla-extract/css";

import { theme } from "../../libs/createTheme.css";

import type { roundedKeys } from "./index.type";

export const roundedRecipe: Record<roundedKeys, string> = {
    none: style({
        borderRadius: `${theme.rounded.none}`,
    }),
    small: style({
        borderRadius: `${theme.rounded.small}`,
    }),
    medium: style({
        borderRadius: `${theme.rounded.medium}`,
    }),
    large: style({
        borderRadius: `${theme.rounded.large}`,
    }),
    full: style({
        borderRadius: `${theme.rounded.full}`,
    }),
};
