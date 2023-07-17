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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_1 = __importDefault(require("../../label/Label"));
var InputAtom_1 = require("../InputAtom");
/**
 * Primary UI component for user interaction.
 */
var Checkbox = function (_a) {
    var text = _a.text, _b = _a.checked, checked = _b === void 0 ? false : _b, onChange = _a.onChange, props = __rest(_a, ["text", "checked", "onChange"]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "justify-center items-center gap-2 inline-flex", children: [(0, jsx_runtime_1.jsx)(InputAtom_1.InputAtom, __assign({ type: "checkbox", checked: checked, onChange: onChange }, props)), text && (0, jsx_runtime_1.jsx)(Label_1.default, { text: text })] }));
};
exports.default = Checkbox;
