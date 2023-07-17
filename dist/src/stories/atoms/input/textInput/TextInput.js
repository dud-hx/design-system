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
var InputAtom_1 = require("../InputAtom");
var inputUtils_1 = require("../../../utils/inputUtils");
var Label_1 = __importDefault(require("../../label/Label"));
var TextInput = function (_a) {
    var id = _a.id, label = _a.label, _b = _a.size, size = _b === void 0 ? "sm" : _b, value = _a.value, _c = _a.onChange, onChange = _c === void 0 ? function () { } : _c, hasError = _a.hasError, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, message = _a.message, props = __rest(_a, ["id", "label", "size", "value", "onChange", "hasError", "isDisabled", "message"]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: id, className: "block mb-2 text-sm font-medium text-gray-900 ", children: label }), (0, jsx_runtime_1.jsx)(InputAtom_1.InputAtom, __assign({ value: value, id: id, className: "".concat(isDisabled && "bg-neutral-100 text-neutral-400", "  ").concat(hasError &&
                    "bg-red-50 text-neutral-800 focus:outline-red-600 border-red-600", " ").concat(value ? "text-neutral-800" : "text-neutral-400"), type: "text", size: inputUtils_1.inputSize[size], onChange: onChange, disabled: isDisabled }, props)), (0, jsx_runtime_1.jsx)(Label_1.default, { text: message, className: "text-red-600 dark:text-red-500" })] }));
};
exports.default = TextInput;
