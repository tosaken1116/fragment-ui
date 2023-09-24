export type colorsKeys =
    | "primary"
    | "secondary"
    | "base"
    | "grey"
    | "success"
    | "error"
    | "info"
    | "warning";
export type colorObjectKeys =
    | "main"
    | "light"
    | "dark"
    | "contrastText"
    | "transparent";
export type colorEnumObjectKeys =
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 1000;

export type colorObjectsType = Record<colorObjectKeys, string> &
    Partial<Record<colorEnumObjectKeys, string>>;
export type SpecificColorObjectsType = {
    [key in colorsKeys]: key extends "grey"
        ? Record<colorEnumObjectKeys, string>
        : Record<colorObjectKeys, string>;
};
