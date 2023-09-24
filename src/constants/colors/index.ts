import type { SpecificColorObjectsType } from "./index.type";

export const colorsObject: SpecificColorObjectsType = {
    primary: {
        main: "#0077B6",
        light: "#00A8E8",
        dark: "#005086",
        contrastText: "#D1E8E2",
        transparent: "#0077B680",
    },
    secondary: {
        main: "#30BCED",
        light: "#89CFF0",
        dark: "#007AA5",
        contrastText: "#FFFFFF",
        transparent: "#30BCED80",
    },
    base: {
        main: "#D1E8E2",
        light: "#E9F2F9",
        dark: "#B0C4B1",
        contrastText: "#0077B6",
        transparent: "#D1E8E280",
    },
    grey: {
        100: "#F0F0F0",
        200: "#E0E0E0",
        300: "#D0D0D0",
        400: "#B0B0B0",
        500: "#A0A0A0",
        600: "#909090",
        700: "#808080",
        800: "#707070",
        900: "#606060",
        1000: "#505050",
    },
    success: {
        main: "#4CAF50",
        dark: "#388E3C",
        light: "#81C784",
        transparent: "#4CAF5080", // 50%透明度
        contrastText: "#303030", // グレー
    },
    warning: {
        main: "#FFC107",
        dark: "#FFA000",
        light: "#FFECB3",
        transparent: "#FFC10780", // 50%透明度
        contrastText: "#303030", // グレー
    },
    error: {
        main: "#F44336",
        dark: "#D32F2F",
        light: "#E57373",
        transparent: "#F4433680", // 50%透明度
        contrastText: "#303030", // グレー
    },
    info: {
        main: "#2196F3",
        dark: "#1976D2",
        light: "#64B5F6",
        transparent: "#2196F380", // 50%透明度
        contrastText: "#303030", // グレー
    },
};
