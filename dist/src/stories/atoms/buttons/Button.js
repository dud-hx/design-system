"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var buttonUtil_1 = require("../../utils/buttonUtil");
var solid_1 = require("@heroicons/react/24/solid");
/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "contained" : _b, _c = _a.mode, mode = _c === void 0 ? "primary" : _c, _d = _a.size, size = _d === void 0 ? "md" : _d, label = _a.label, _e = _a.onClick, onClick = _e === void 0 ? function () { } : _e, _f = _a.isIcon, isIcon = _f === void 0 ? false : _f, props = __rest(_a, ["variant", "mode", "size", "label", "onClick", "isIcon"]);
    return ((0, jsx_runtime_1.jsx)("button", __assign({ type: "button", className: "btn ".concat(isIcon ? buttonUtil_1.getIconSize[size] : buttonUtil_1.getSize[size], " ").concat((0, buttonUtil_1.getBtnStyle)(variant, mode)), onClick: onClick }, props, { children: isIcon && !label ? (0, jsx_runtime_1.jsx)(solid_1.HomeIcon, { className: "w-4 h-4" }) : label })));
};
exports.default = Button;
