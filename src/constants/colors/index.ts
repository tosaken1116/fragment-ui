import type { colorObjectsType, colorsKeys } from "./index.type";

export const colorsObject: Record<colorsKeys, colorObjectsType> = {
    primary: {
        main: "#0077B6",
        light: "#00A8E8",
        dark: "#005086",
        contrastText: "#D1E8E2",
    },
    secondary: {
        main: "#30BCED",
        light: "#89CFF0",
        dark: "#007AA5",
        contrastText: "#FFFFFF",
    },
    base: {
        main: "#D1E8E2",
        light: "#E9F2F9",
        dark: "#B0C4B1",
        contrastText: "#0077B6",
    },
};
