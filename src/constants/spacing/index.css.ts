import { style } from "@vanilla-extract/css";

import { theme } from "../../libs/createTheme.css";

export const gapRecipe = {
    small: style({ gap: theme.spacing.small }),
    base: style({ gap: theme.spacing.base }),
    medium: style({ gap: theme.spacing.medium }),
    large: style({ gap: theme.spacing.large }),
    extraLarge: style({ gap: theme.spacing.extraLarge }),
};

export const paddingRecipe = {
    small: style({ padding: theme.spacing.small }),
    base: style({ padding: theme.spacing.base }),
    medium: style({ padding: theme.spacing.medium }),
    large: style({ padding: theme.spacing.large }),
    extraLarge: style({ padding: theme.spacing.extraLarge }),
};

export const marginRecipe = {
    small: style({ margin: theme.spacing.small }),
    base: style({ margin: theme.spacing.base }),
    medium: style({ margin: theme.spacing.medium }),
    large: style({ margin: theme.spacing.large }),
    extraLarge: style({ margin: theme.spacing.extraLarge }),
};
