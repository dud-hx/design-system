"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIconSize = exports.getSize = exports.getBtnStyle = exports.linkStyle = exports.textStyle = exports.outlinedStyle = exports.containedStyle = void 0;
exports.containedStyle = {
    primary: "bg-indigo-700",
    secondary: "bg-blue-900",
    neutral: "bg-neutral-400",
};
exports.outlinedStyle = {
    primary: "border bg-white border-indigo-700 text-indigo-700",
    secondary: "bg-slate-200 border border-blue-900 text-blue-900",
    neutral: "bg-neutral-200 border border-slate-400  text-slate-400",
};
exports.textStyle = {
    primary: "text-indigo-700",
    secondary: "bg-slate-200 text-blue-900",
    neutral: "text-slate-400",
};
exports.linkStyle = {
    primary: "h-4 text-indigo-700",
    secondary: "h-5 text-blue-900 underline",
    neutral: "h6 text-slate-400",
};
var getBtnStyle = function (variant, mode) {
    switch (variant) {
        case "contained":
            return "text-white ".concat(exports.containedStyle[mode]);
        case "outlined":
            return exports.outlinedStyle[mode];
        case "text":
            return exports.textStyle[mode];
        case "link":
            return exports.linkStyle[mode];
        default:
            break;
    }
};
exports.getBtnStyle = getBtnStyle;
exports.getSize = {
    sm: "btn--sm",
    md: "btn--md",
    lg: "btn--lg",
};
exports.getIconSize = {
    sm: "w-7 h-7 p-1.5 rounded-2xl",
    md: " w-9 h-9 p2 rounded-3xl",
    lg: "w-11 h-11 p-2.5 rounded-3xl",
};
