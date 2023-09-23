import { createTheme } from "@vanilla-extract/css";

import { breakpointsObject } from "../constants/breakpoints";
import { colorsObject } from "../constants/colors";
import { fontSizeObject } from "../constants/fontSize";
import { roundedObject } from "../constants/rounded";
import { shadowObject } from "../constants/shadow";
import { spacingObject } from "../constants/spacing";

const [themeClass, theme] = createTheme({
    colors: colorsObject,
    fontSize: fontSizeObject,
    spacing: spacingObject,
    shadow: shadowObject,
    rounded: roundedObject,
    breakpoints: breakpointsObject,
});

export { theme, themeClass };
