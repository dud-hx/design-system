"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Avatar = function (_a) {
    var content = _a.content, _b = _a.type, type = _b === void 0 ? "initial" : _b, _c = _a.size, size = _c === void 0 ? "sm" : _c, _d = _a.mode, mode = _d === void 0 ? "round" : _d;
    var sizeVariants = {
        sm: "w-8 h-8 ".concat(mode === "square" ? "rounded" : "rounded-2xl"),
        md: "w-10 h-10 ".concat(mode === "square" ? "rounded" : "rounded-3xl"),
        lg: "w-12 h-12 ".concat(mode === "square" ? "rounded" : "rounded-3xl"),
    };
    var textVariants = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-lg",
    };
    return type === "initial" ? ((0, jsx_runtime_1.jsx)("div", { className: "".concat(sizeVariants[size], " justify-center items-center inline-flex bg-indigo-100"), children: (0, jsx_runtime_1.jsx)("div", { className: "text-center text-indigo-700 ".concat(textVariants[size], " font-bold"), children: content }) })) : ((0, jsx_runtime_1.jsx)("div", { className: "".concat(sizeVariants[size], " relative"), children: (0, jsx_runtime_1.jsx)("img", { alt: "avatar", className: "".concat(sizeVariants[size], " left-0 top-0 absolute rounded-full"), src: content }) }));
};
exports.default = Avatar;
