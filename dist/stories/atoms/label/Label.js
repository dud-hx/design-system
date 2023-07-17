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
exports.LabelTemplate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * Primary UI component for user interaction.
 */
var Label = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "sm" : _b, text = _a.text, className = _a.className, props = __rest(_a, ["size", "text", "className"]);
    return ((0, jsx_runtime_1.jsx)("p", __assign({ className: "text-".concat(size, " ").concat(className) }, props, { children: text })));
};
exports.default = Label;
/**
 * Primary UI component for user interaction. Here is a list with the variants supported
 */
var LabelTemplate = function (args) {
    var items = args.items;
    if (!Array.isArray(items)) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("div", { children: items.map(function (item) { return ((0, jsx_runtime_1.jsx)(Label, { size: item, text: "text with size ".concat(item) }, "size-".concat(item))); }) }));
};
exports.LabelTemplate = LabelTemplate;
