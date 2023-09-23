import { style } from "@vanilla-extract/css";

import { theme } from "../../libs/createTheme.css";

import type { fontSizeKeys } from "./index.type";

export const fontSizeRecipe: Record<fontSizeKeys, string> = {
    tiny: style({ fontSize: theme.fontSize.tiny }),
    small: style({ fontSize: theme.fontSize.small }),
    base: style({ fontSize: theme.fontSize.base }),
    large: style({ fontSize: theme.fontSize.large }),
    extraLarge: style({ fontSize: theme.fontSize.extraLarge }),
};
