import type { FC, ReactNode } from "react";

import { themeClass } from "./createTheme.css";

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => <div className={themeClass}>{children}</div>;
