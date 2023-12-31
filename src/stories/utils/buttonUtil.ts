import { ModeType, VariantType } from "../../types/types";

export const containedStyle = {
    primary: "bg-indigo-700",
    secondary: "bg-blue-900",
    neutral: "bg-neutral-400",
};
export const outlinedStyle = {
    primary: "border bg-white border-indigo-700 text-indigo-700",
    secondary: "bg-slate-200 border border-blue-900 text-blue-900",
    neutral: "bg-neutral-200 border border-slate-400  text-slate-400",
};

export const textStyle = {
    primary: "text-indigo-700",
    secondary: "bg-slate-200 text-blue-900",
    neutral: "text-slate-400",
};

export const linkStyle = {
    primary: "h-4 text-indigo-700",
    secondary: "h-5 text-blue-900 underline",
    neutral: "h6 text-slate-400",
};
export const getBtnStyle = (variant: VariantType, mode: ModeType) => {
    switch (variant) {
        case "contained":
            return `text-white ${containedStyle[mode]}`;

        case "outlined":
            return outlinedStyle[mode];
        case "text":
            return textStyle[mode];
        case "link":
            return linkStyle[mode];
        default:
            break;
    }
};
export const getSize = {
    sm: "btn--sm",
    md: "btn--md",
    lg: "btn--lg",
};

export const getIconSize = {
    sm: "w-7 h-7 p-1.5 rounded-2xl",
    md: " w-9 h-9 p2 rounded-3xl",
    lg: "w-11 h-11 p-2.5 rounded-3xl",
}