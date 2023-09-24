import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { roundedRecipe } from "../../constants/rounded/index.css";
import { theme } from "../../libs/createTheme.css";

const containerBase = style({
    padding: "6px 12px",
    fontSize: "14px",
    fontWeight: "bold",
});

const primary = style({
    border: `2px solid ${theme.colors.primary.light}`,
    backgroundColor: `${theme.colors.primary.main}`,
    color: `${theme.colors.primary.contrastText}`,
});

const secondary = style({
    border: `2px solid ${theme.colors.secondary.light}`,
    backgroundColor: `${theme.colors.secondary.main}`,
    color: `${theme.colors.secondary.contrastText}`,
});

const outlined = style({
    backgroundColor: "transparent",
    color: `${theme.colors.primary.main}`,
});

const contained = style({});

export const label = recipe({
    base: containerBase,
    variants: {
        color: {
            primary: primary,
            secondary: secondary,
        },
        variant: {
            outlined: outlined,
            contained: contained,
        },
        rounded: roundedRecipe,
    },
});
