export type CSSVarFunction =
    | `var(--${string})`
    | `var(--${string}, ${string | number})`;
