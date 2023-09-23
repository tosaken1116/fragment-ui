import type { ReactNode } from "react";

import { label } from "./index.css";

import type { roundedKeys } from "../../constants/rounded/index.type";

type Props = {
    children: ReactNode;
    color?: "primary" | "secondary";
    variant?: "outlined" | "contained";
    rounded?: roundedKeys;
};

/**
 * @function
 * A Label component that displays content with optional styling variants.
 *
 * @param children - The content to be displayed inside the label.
 * @param color - The color scheme for the label. Defaults to "primary".
 * @param variant - The visual style of the label. Defaults to "contained".
 * @param rounded - The border-radius style for the label. Defaults to "full".
 * @returns The rendered Label component.
 */

export const Label: React.FC<Props> = ({
    children,
    color = "primary",
    variant = "contained",
    rounded = "full",
}) => <div className={label({ variant, color, rounded })}>{children}</div>;
