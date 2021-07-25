import React, { Children, isValidElement, cloneElement, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, flexbox, layout } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: #000000;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: #000000;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React.createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("image", { width: "32", height: "32", href: "/images/egg/logo.png" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/egg/9.png" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/egg/99.png" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("image", { width: 90, height: 90, href: "/images/incubator/9.png" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("image", { width: 80, height: 80, href: "/images/ticket.svg" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React.createElement("image", { width: 48, height: 48, href: "/images/ticket.svg" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), flexbox, space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled.input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled(GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#000000";
};
var StyledTag = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$t, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$B, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate$1 = keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("img", { src: "/images/egg/9.gif" })));
};
var Container$1 = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(SpinnerIcon)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$1, null,
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var Handle = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled.input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked },
        React.createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React.createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: null,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$5, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$k, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React.createElement(Svg, __assign({ viewBox: "0 0 170 36" }, props),
        React.createElement("image", { width: "170", height: "36", href: isDark ? '/images/egg/LogoTextNewDark.png' : '/images/egg/LogoTextNewWhite.png' })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
        React.createElement("g", { id: "surface1" },
            React.createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React.createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 367.488 367.488" }, props),
        React.createElement("path", { d: "M366.745,70.58c-1.089-1.609-3.256-2.391-6.626-2.391c-1.835,0-3.77,0.227-5.25,0.424c-0.324,0.043-0.609,0.065-0.857,0.065\n\tc-0.471,0-0.638-0.08-0.656-0.07c-0.178-0.625,1.309-3.102,2.294-4.744c1.056-1.759,2.252-3.752,3.151-5.808\n\tc0.4-0.914,0.743-1.951,0.249-2.705c-0.261-0.399-0.708-0.628-1.228-0.628c-1.363,0-3.702,1.654-7.405,4.352\n\tc-1.648,1.201-3.771,2.749-5.007,3.428c0.471-1.447,1.783-4.158,2.799-6.257c3.352-6.926,5.154-10.905,3.226-12.19\n\tc-0.313-0.208-0.671-0.308-1.065-0.308c-2.211,0-5.302,3.529-10.131,9.324c-1.566,1.88-3.065,3.701-4.29,4.98\n\tc0.658-2.637,2.482-7.566,3.575-10.545c2.166-5.905,2.234-6.069,1.812-6.674l-0.322-0.265h-0.521c-0.614,0-0.94,0.315-1.157,0.639\n\tc-1.083,1.625-7.429,9.218-14.776,18.215c-9.186,11.247-20.618,25.244-27.213,33.885c-5.552,7.275-15.321,16.252-26.632,26.648\n\tc-12.835,11.795-27.382,25.164-39.671,39.647c-9.291,10.95-15.632,19.579-18.879,25.688c-1.11-2.641-3.512-7.23-7.478-9.434\n\tc-2.497-1.387-2.524-2.064-2.64-4.912c-0.03-0.726-0.063-1.561-0.145-2.538c-0.292-3.503-2.637-4.507-4.35-5.239\n\tc-1.22-0.522-1.985-0.881-2.321-1.664c-0.354-0.828-0.529-2.516-0.714-4.303c-0.432-4.178-0.921-8.914-4.155-9.474\n\tc-2.194-0.379-2.553-2.841-2.82-6.278c-0.147-1.894-0.275-3.53-1.057-4.506c-0.417-0.521-0.979-0.796-1.627-0.796\n\tc-1.109,0-2.238,0.821-3.433,1.69c-1.21,0.879-2.591,1.923-3.294,1.456c-0.682-0.455-0.436-2.507-0.199-4.491\n\tc0.332-2.768,0.744-6.212-0.665-9.061c-0.703-1.421-1.639-1.72-2.3-1.72c-1.993,0-3.793,2.671-5.698,5.5\n\tc-0.579,0.858-1.377,2.043-1.936,2.681c-0.063-1.228,0.327-3.785,0.601-5.588c0.895-5.886,1.334-9.849-0.647-11.264\n\tc-0.402-0.287-0.842-0.433-1.308-0.433c-1.934,0-3.523,2.531-5.205,5.211c-0.787,1.252-2.063,3.287-2.681,3.678\n\tc-0.082-0.81,0.498-2.995,0.894-4.489c1.103-4.156,2.475-9.329-1.082-10.298c-0.133-0.036-0.271-0.055-0.412-0.055\n\tc-2.719,0-8.7,10.338-17.778,30.726c-6.499,14.595-13.664,32.653-14.784,38.926c-1.278,7.16-0.536,8.665,0.182,10.12\n\tc0.418,0.849,0.78,1.582,0.629,4.002c-0.14,2.243-0.678,4.388-1.247,6.659c-1.07,4.268-2.176,8.682-0.785,14.247\n\tc1.162,4.648,7.209,14.769,12.544,23.698c3.621,6.06,7.709,12.902,8.01,14.507c-0.333,0.213-1.782,0.811-7.586,0.811\n\tc-7.13,0-17.116-0.859-23.724-1.428l-2.749-0.234c-9.665-0.805-36.443-6.166-43.041-7.887c-2.538-0.662-6.552-2.966-10.802-5.405\n\tc-6.211-3.564-12.633-7.25-17.146-7.585c-1.02-0.076-1.875-0.112-2.616-0.112c-4.49,0-6.282,1.348-11.073,4.949\n\tc-1.062,0.798-2.283,1.717-3.729,2.768c-9.126,6.638-14.019,9.476-20.79,13.403c-0.806,0.467-1.13,1.021-0.965,1.644\n\tc0.309,1.167,1.62,1.178,5.963,1.212c2.445,0.02,5.488,0.044,8.011,0.374c2.168,0.283,4.597,0.952,7.167,1.66\n\tc4.812,1.326,10.344,2.849,16.357,2.482c2.671-0.162,5.092-0.296,7.667-0.296c5.559,0,13.24,0.552,28.062,4.65\n\tc20.543,5.679,51.316,18.578,59.868,25.094c1.548,1.18,3.072,2.499,4.836,4.026c8.083,6.998,19.151,16.581,48.991,27.432\n\tc13.902,5.055,28.463,7.512,44.516,7.512c10.679,0,19.864-1.081,27.244-1.949c4.054-0.477,7.555-0.889,10.195-0.971\n\tc11.516-0.36,35.889-2.22,45.706-6.682c7.643-3.474,16.143-4.842,26.164-4.17c0.394,0.026,0.763,0.039,1.11,0.039\n\tc2.429,0,4.028-0.611,4.888-1.868c1.361-1.99,0.256-4.834-0.551-6.912c-0.115-0.296-0.225-0.578-0.355-0.884\n\tc0.247-0.401,2.149-0.791,3.286-1.023c2.866-0.587,6.114-1.252,6.676-3.874c0.09-0.423-0.006-0.862-0.273-1.237\n\tc-1.387-1.95-8.616-3.029-24.778-5.025c-10.793-1.333-23.025-2.845-26.244-4.702c-2.417-1.394-5.083-2.276-7.661-3.128\n\tc-5.369-1.775-10.44-3.452-13.952-9.422c-3.422-5.819,9.125-20.581,18.286-31.36c4.686-5.513,8.732-10.273,10.827-13.765\n\tc5.757-9.595,16.285-46.65,20.249-60.6c0.611-2.149,1.052-3.702,1.277-4.453c1.5-4.999,7.275-13.181,12.761-16.648\n\tc5.154-3.257,5.046-7.05,4.908-11.852c-0.023-0.81-0.047-1.659-0.047-2.552c0-6.047,4.308-10.327,8.964-14.052\n\tc5.427-4.341,5.902-11.041,1.338-18.865c-2.961-5.077,0.408-12.894,3.381-19.791c0.616-1.43,1.222-2.835,1.765-4.192\n\tC367.735,74.247,367.77,72.094,366.745,70.58z" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-21 -21 682.66669 682" }, props),
        React.createElement("path", { d: "m629.609375 303.507812-81.988281-40.820312-180.261719 89.753906c-14.582031 7.261719-30.957031 11.101563-47.359375 11.101563s-32.777344-3.839844-47.359375-11.101563l-180.261719-89.753906-81.988281 40.820312c-6.367187 3.171876-10.390625 9.671876-10.390625 16.785157 0 7.117187 4.023438 13.613281 10.390625 16.785156l278.964844 138.898437c9.59375 4.78125 20.117187 7.167969 30.644531 7.167969 10.523438 0 21.050781-2.386719 30.644531-7.160156l278.964844-138.90625c6.367187-3.171875 10.390625-9.667969 10.390625-16.785156 0-7.113281-4.023438-13.613281-10.390625-16.785157zm0 0" }),
        React.createElement("path", { d: "m629.609375 460.65625-81.988281-40.824219-180.261719 89.757813c-14.582031 7.261718-30.957031 11.09375-47.359375 11.09375s-32.777344-3.832032-47.359375-11.09375l-180.261719-89.757813-81.988281 40.824219c-6.367187 3.167969-10.390625 9.671875-10.390625 16.78125 0 7.113281 4.023438 13.613281 10.390625 16.789062l278.964844 138.898438c9.59375 4.777344 20.117187 7.167969 30.644531 7.167969 10.523438-.003907 21.050781-2.390625 30.644531-7.167969l278.964844-138.898438c6.367187-3.175781 10.390625-9.675781 10.390625-16.789062s-4.023438-13.613281-10.390625-16.78125zm0 0" }),
        React.createElement("path", { d: "m10.390625 179.972656 278.964844 138.902344c9.59375 4.773438 20.117187 7.167969 30.644531 7.167969s21.050781-2.394531 30.644531-7.167969l278.964844-138.902344c6.367187-3.167968 10.390625-9.671875 10.390625-16.78125 0-7.117187-4.023438-13.621094-10.390625-16.789062l-278.964844-138.90625c-19.191406-9.550782-42.097656-9.550782-61.289062 0l-278.964844 138.90625c-6.367187 3.167968-10.390625 9.671875-10.390625 16.789062 0 7.109375 4.023438 13.613282 10.390625 16.78125zm0 0" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 502.436 502.436" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M402.481,300.41c0.033-0.051,0.068-0.098,0.102-0.148C402.86,299.793,402.459,300.432,402.481,300.41z" }),
            React.createElement("path", { d: "M402.581,199.504c-0.029-0.055-0.062-0.105-0.094-0.16c0.064,0.113,0.143,0.254,0.201,0.359\n\t\t\tC402.651,199.637,402.616,199.571,402.581,199.504z" }),
            React.createElement("path", { d: "M406.079,55.139C406.471,54.674,405.678,55.6,406.079,55.139L406.079,55.139z" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M292.844,383.368C293.102,383.25,293.04,383.279,292.844,383.368L292.844,383.368z" }),
                React.createElement("path", { d: "M465.85,19.072c-1.174-2.404-2.348-4.809-3.521-7.215c-3.99,2.063-7.865,4.352-11.678,6.723\n\t\t\t\tc-2.168,1.35-4.312,2.74-6.438,4.156l-2.803,1.896c-0.859-1.303-1.721-2.605-2.578-3.91l2.768-1.709\n\t\t\t\tc2.293-1.393,4.604-2.76,6.939-4.078c3.986-2.254,8.037-4.42,12.189-6.348c-0.797-1.635-1.596-3.27-2.395-4.904\n\t\t\t\tc-0.473-0.971-0.945-1.939-1.42-2.908c-0.367-0.752-0.23-0.936-1.041-0.643c-7.271,2.625-14.391,5.65-21.355,8.998\n\t\t\t\tc-16.805,8.078-33.145,17.945-47.258,30.191c-14.646,12.707-27.654,27.381-36.574,44.721\n\t\t\t\tc-8.943,17.389-13.643,36.518-13.912,56.063c-0.133,9.852,1.146,19.521,2.941,29.184c1.818,9.791,5.121,19.123,8.516,28.455\n\t\t\t\tc2.318,6.732,5.961,12.953,8.506,19.604c1.656,4.328,2.861,8.682,3.896,13.186c0.953,4.148,1.133,8.771,0.643,12.994\n\t\t\t\tc-0.48,4.143-1.887,7.734-3.979,11.306c-2.197,3.748-5.549,6.987-8.752,9.877c-3.389,3.059-7.027,5.823-10.812,8.371\n\t\t\t\tc-16.141,10.856-34.52,18.27-52.9,24.368c-0.593,0.197-1.188,0.379-1.781,0.572l-37.776,77.905\n\t\t\t\tc0.518-0.172,1.038-0.334,1.556-0.508c9.101-3.029,18.152-6.215,27.103-9.67c3.841-1.482,7.658-3.014,11.472-4.568\n\t\t\t\tc0.313-0.129,1.05-0.448,1.05-0.448s0.495,1.215,0.717,1.715c1.938,4.396,3.873,8.787,5.812,13.183\n\t\t\t\tc0.8,1.813,1.601,3.629,2.399,5.44c0.138,0.313,0.274,0.629,0.414,0.94c0.006,0.017-2.73,1.261-3.295,1.517\n\t\t\t\tc0.129-0.06,0.25-0.114,0.346-0.159c-0.1,0.047-0.235,0.108-0.444,0.204c-15.015,6.884-30.364,13.048-45.89,18.673\n\t\t\t\tc-5.586,2.023-11.205,3.959-16.837,5.852l-45.024,92.852c6.834-2.465,13.628-5.039,20.391-7.648\n\t\t\t\tc18.019-6.959,35.824-14.482,53.357-22.588c35.633-16.473,70.357-35.328,102.297-58.234\n\t\t\t\tc30.525-22.016,59.324-48.219,78.301-81.114c9.527-16.517,16.473-34.782,19.074-53.728c2.66-19.358,0.836-39.19-5.188-57.772\n\t\t\t\tc-3.971-12.25-9.643-24.102-16.756-34.852c-3.158-4.773-6.484-9.369-9.947-13.92c-1.967-2.58-4.131-5.012-6.264-7.455\n\t\t\t\tc-3.205-3.674-5.84-7.859-8.459-11.953c-4.441-6.939-7.707-14.865-9.32-22.945c-1.992-9.973-1.287-19.959,1.338-29.74\n\t\t\t\tc5.035-18.758,16.883-35.439,29.934-49.518c8.021-8.656,16.82-16.625,26.174-23.818c1.865-1.436,3.756-2.84,5.676-4.199\n\t\t\t\tC466.758,20.401,466.6,20.608,465.85,19.072z M403.092,299.358c0,0-0.201,0.381-0.51,0.903c-0.072,0.109-0.096,0.144-0.102,0.148\n\t\t\t\tc-8.385,12.725-18.254,23.93-29.76,33.943c-10.844,9.438-22.645,17.574-34.791,25.221c-3.59-6.113-7.18-12.229-10.77-18.344\n\t\t\t\tc15.223-8.717,30.031-18.301,42.879-30.336c6.33-5.932,11.947-12.385,17.027-19.408l1.197-1.566L403.092,299.358\n\t\t\t\t M402.489,199.344c-0.121-0.217-0.18-0.324,0.094,0.16c0.254,0.459,0.215,0.391,0.105,0.199\n\t\t\t\tc8.68,15.752,14.639,33.172,14.564,51.32c-5.246-0.1-10.494-0.201-15.74-0.301c0.66-13.469-2.85-26.854-8.238-39.109\n\t\t\t\tc-2.982-6.785-6.766-13.166-10.443-19.588c-3.178-5.543-5.941-11.195-8.627-16.988c2.039-0.92,4.078-1.84,6.117-2.758\n\t\t\t\tc1.311-0.59,4.99-2.266,4.99-2.266l0.332,0.695c2.414,4.66,4.896,9.178,7.66,13.639\n\t\t\t\tC396.393,189.333,399.608,194.237,402.489,199.344z M406.079,55.139c-9.127,10.514-17.299,21.643-23.01,34.42\n\t\t\t\tc-5.342,11.959-8.377,24.941-8.166,38.061c-3.402-0.049-6.807-0.098-10.211-0.146c0.506-17.471,6.057-34.4,14.984-49.367\n\t\t\t\tc4.535-7.607,9.904-14.607,15.695-21.293c1.395-1.611,2.891-3.137,4.355-4.684c0.527-0.555,2.143-2.352,2.143-2.352\n\t\t\t\ts3.311,3.207,4.785,4.619c0.02,0.018,0.035,0.035,0.055,0.053C406.489,54.67,406.28,54.901,406.079,55.139z" })),
            React.createElement("path", { d: "M291.195,210.11c0-70.35-57.233-127.584-127.583-127.584C93.263,82.526,36.03,139.76,36.03,210.11\n\t\t\tc0,20.615,4.921,40.1,13.64,57.353l113.942,234.973l113.96-235.01C286.28,250.182,291.195,230.709,291.195,210.11z\n\t\t\t M163.612,280.711c-38.931,0-70.604-31.671-70.604-70.602c0-38.932,31.674-70.605,70.604-70.605s70.604,31.674,70.604,70.605\n\t\t\tC234.215,249.04,202.542,280.711,163.612,280.711z" }))));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, { viewBox: "0 0 24 24", width: "24px", color: "text", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", { "fill-rule": "evenodd" },
            React.createElement("path", { d: "M11.549 18.906c3.81 0 6.906-3.09 6.906-6.906A6.908 6.908 0 006.509 7.278a6.909 6.909 0 005.04 11.628zm-2.41-4.173c.063-.225.122-.455.196-.676.083-.26.152-.294.392-.166.411.215.842.333 1.297.391.294.035.583.005.853-.112.51-.22.587-.808.156-1.166a1.937 1.937 0 00-.484-.284c-.446-.196-.911-.343-1.328-.598-.68-.406-1.117-.97-1.063-1.797.06-.94.588-1.523 1.45-1.837.353-.127.358-.122.358-.495v-.377c.005-.279.054-.328.333-.338.088-.005.171 0 .26 0 .592 0 .592 0 .597.593 0 .421 0 .421.421.485.319.049.627.142.921.274.162.074.225.186.176.358-.073.254-.142.514-.225.769-.078.24-.152.274-.382.161a2.904 2.904 0 00-1.46-.289 1.096 1.096 0 00-.391.079c-.441.19-.515.68-.138.984.191.152.407.265.632.358.392.161.784.318 1.156.524 1.185.656 1.504 2.14.671 3.154a2.25 2.25 0 01-1.15.74c-.202.054-.29.161-.28.367.01.206 0 .407 0 .612 0 .182-.093.28-.274.284-.22.005-.441.005-.657 0-.19-.004-.284-.112-.284-.298 0-.147-.005-.3-.005-.446-.005-.328-.014-.343-.328-.392-.406-.064-.803-.157-1.17-.338-.304-.147-.333-.22-.25-.524z" }),
            React.createElement("path", { d: "M19.028 19.484c-3.987 3.987-10.389 4.12-14.537.407h1.332v-1.42H2.042V22.25h1.42v-1.376A11.967 11.967 0 0011.544 24c3.076 0 6.147-1.17 8.488-3.512l.504-.504-1.004-1.004-.504.504zM19.635 1.749v1.376A11.967 11.967 0 0011.553 0C8.478 0 5.407 1.17 3.065 3.512l-.5.5L3.57 5.015l.504-.505C8.061.524 14.463.391 18.611 4.104H17.28v1.42H21.06V1.75h-1.425z" }))));
};

var Icon$13 = function (props) {
    var theme = useTheme();
    return (React.createElement(Svg, __assign({ viewBox: "0 0 19 19" }, props, { width: '19px' }),
        React.createElement("image", { width: "19", height: "19", href: theme.isDark ? '/images/mediumDark.svg' : '/images/mediumLight.svg' })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", width: "24", height: "24", color: "text", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M16.5,12A2.5,2.5 0 0,0 19,9.5A2.5,2.5 0 0,0 16.5,7A2.5,2.5 0 0,0 14,9.5A2.5,2.5 0 0,0 16.5,12M9,11A3,3 0 0,0 12,8A3,3 0 0,0 9,5A3,3 0 0,0 6,8A3,3 0 0,0 9,11M16.5,14C14.67,14 11,14.92 11,16.75V19H22V16.75C22,14.92 18.33,14 16.5,14M9,13C6.67,13 2,14.17 2,16.5V19H9V16.75C9,15.9 9.33,14.41 11.37,13.28C10.5,13.1 9.66,13 9,13Z" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", id: "svg", version: "1.1", width: "24px", height: "24", viewBox: "30 180 100 200", color: "text", className: "sc-bdfBwQ fLEFAY" },
        React.createElement("g", { transform: "translate(0.000000,208.000000) scale(0.4, 0.4)", fill: "#1d5ebb", stroke: "none" },
            React.createElement("path", { id: "path0", d: "M198.570 5.142 C 164.248 6.710,132.435 16.468,101.391 34.949 C 96.975 37.578,83.010 47.252,82.122 48.297 C 82.014 48.424,80.599 49.588,78.978 50.884 C 77.358 52.180,75.943 53.331,75.835 53.443 C 75.727 53.555,73.959 55.085,71.906 56.843 C 41.340 83.016,17.345 124.415,9.089 165.226 C 3.517 192.773,4.358 226.911,11.175 249.902 C 11.464 250.874,12.088 253.084,12.564 254.813 C 30.671 320.675,89.892 373.603,159.136 385.810 C 182.993 390.016,202.703 390.318,225.740 386.829 C 279.847 378.634,329.449 348.312,360.960 304.167 C 362.287 302.307,363.711 300.344,364.123 299.804 C 364.759 298.970,369.158 291.947,371.998 287.230 C 394.575 249.731,403.158 198.543,394.265 154.420 C 389.527 130.915,378.916 105.320,366.817 88.212 C 365.900 86.916,364.294 84.617,363.248 83.104 C 334.417 41.399,282.999 11.808,229.470 6.115 C 224.147 5.548,208.480 4.643,206.287 4.775 C 205.747 4.808,202.274 4.973,198.570 5.142 M223.379 8.448 C 353.168 19.071,430.931 149.172,378.502 267.976 C 366.447 295.293,349.193 318.017,324.119 339.597 C 317.008 345.717,303.520 355.032,295.088 359.645 C 293.900 360.295,292.485 361.130,291.945 361.501 C 287.792 364.349,269.430 372.377,259.166 375.832 C 214.848 390.750,161.788 389.381,122.790 372.313 C 122.141 372.029,119.843 371.034,117.682 370.103 C 110.887 367.173,101.770 362.377,93.713 357.493 C 76.498 347.059,57.779 329.964,44.916 312.931 C 36.026 301.159,25.631 283.080,22.168 273.371 C 21.878 272.556,21.380 271.318,21.061 270.620 C 8.682 243.479,4.881 200.320,11.847 166.012 C 17.907 136.168,31.131 108.032,50.611 83.531 C 65.551 64.741,86.587 46.541,106.310 35.341 C 123.088 25.813,138.438 19.386,155.108 14.910 C 162.479 12.931,164.540 12.461,171.450 11.185 C 188.516 8.034,206.648 7.079,223.379 8.448 M274.242 78.143 C 273.281 78.764,272.153 79.693,271.734 80.206 C 271.316 80.719,269.918 82.377,268.629 83.890 C 267.339 85.403,265.537 87.525,264.625 88.605 C 260.236 93.802,252.808 102.504,251.712 103.733 C 251.037 104.489,248.548 107.407,246.180 110.216 C 243.812 113.026,241.776 115.413,241.656 115.521 C 241.364 115.782,233.934 124.578,230.040 129.273 C 228.337 131.326,225.258 134.966,223.197 137.362 C 218.469 142.858,213.400 148.813,212.377 150.073 C 211.945 150.605,210.871 151.846,209.990 152.829 C 209.109 153.812,207.452 155.766,206.308 157.171 C 205.164 158.576,203.580 160.432,202.789 161.297 C 201.345 162.874,197.969 166.783,194.303 171.121 C 193.222 172.400,191.564 174.337,190.619 175.427 C 188.433 177.944,188.099 178.334,182.902 184.451 C 180.528 187.245,177.347 190.958,175.832 192.702 C 174.318 194.447,172.206 196.935,171.138 198.232 C 170.070 199.528,168.480 201.389,167.604 202.365 C 166.728 203.342,164.244 206.245,162.083 208.817 C 155.477 216.678,147.562 225.891,144.008 229.858 C 141.790 232.333,139.908 234.530,137.972 236.904 C 137.246 237.795,133.886 241.728,130.507 245.645 C 127.127 249.562,123.566 253.705,122.593 254.851 C 121.621 255.998,118.615 259.533,115.914 262.707 C 113.212 265.881,109.839 269.856,108.417 271.542 C 106.995 273.227,105.010 275.546,104.006 276.694 C 83.658 299.970,83.754 299.413,98.036 311.142 C 98.469 311.497,101.448 313.998,104.657 316.699 C 107.866 319.401,111.402 322.372,112.515 323.303 C 119.508 329.151,122.664 328.036,132.085 316.388 C 133.433 314.723,135.186 312.652,135.982 311.788 C 136.777 310.923,138.555 308.870,139.932 307.225 C 142.215 304.498,149.853 295.501,151.903 293.124 C 154.299 290.346,156.598 287.693,157.522 286.640 C 159.489 284.399,166.412 276.118,168.369 273.665 C 169.450 272.311,171.925 269.365,173.870 267.119 C 175.815 264.873,178.202 262.072,179.175 260.895 C 180.147 259.718,181.662 257.957,182.541 256.981 C 184.237 255.096,192.715 245.205,194.695 242.798 C 195.344 242.010,200.648 235.842,206.483 229.090 C 212.318 222.339,217.705 216.082,218.454 215.185 C 220.666 212.539,228.827 202.986,229.294 202.497 C 229.531 202.249,230.860 200.677,232.249 199.002 C 233.638 197.327,235.481 195.131,236.346 194.122 C 238.260 191.887,240.972 188.704,243.273 185.992 C 244.904 184.069,251.146 176.771,259.328 167.221 C 261.379 164.827,263.501 162.350,264.043 161.717 C 264.586 161.083,265.825 159.668,266.798 158.571 C 269.022 156.064,278.736 144.644,280.483 142.482 C 281.203 141.593,282.440 140.156,283.234 139.290 C 284.027 138.424,285.556 136.656,286.632 135.360 C 287.707 134.065,288.683 132.917,288.799 132.809 C 289.020 132.605,293.005 127.925,297.834 122.200 C 299.383 120.363,301.039 118.418,301.512 117.878 C 301.986 117.338,303.431 115.660,304.723 114.149 C 306.015 112.639,307.294 111.168,307.564 110.880 C 309.340 108.987,310.107 106.851,309.958 104.207 C 309.751 100.545,309.185 99.849,300.946 93.124 C 300.020 92.367,298.433 91.041,297.419 90.177 C 280.675 75.892,279.038 75.042,274.242 78.143 M126.198 79.862 C 124.680 80.688,122.173 82.704,113.360 90.186 C 111.415 91.838,107.701 94.962,105.108 97.130 C 102.515 99.297,99.562 101.772,98.546 102.630 C 93.729 106.696,93.833 111.667,98.852 117.289 C 99.624 118.153,100.905 119.655,101.699 120.627 C 102.494 121.598,105.097 124.693,107.484 127.503 C 112.841 133.810,118.712 140.782,124.525 147.741 C 126.963 150.658,129.635 153.841,130.463 154.813 C 131.292 155.786,132.645 157.386,133.470 158.369 C 134.295 159.353,135.793 161.121,136.797 162.299 C 137.802 163.476,140.631 166.838,143.084 169.769 C 152.853 181.440,157.669 187.033,157.951 187.033 C 158.208 187.033,161.775 182.958,174.789 167.799 C 176.375 165.952,178.140 163.910,178.711 163.261 C 179.283 162.613,181.445 160.049,183.517 157.564 C 185.589 155.079,188.201 152.001,189.320 150.725 C 191.875 147.812,191.925 148.145,188.310 143.937 C 185.428 140.582,179.796 133.917,168.943 121.022 C 166.306 117.888,163.768 114.882,163.302 114.342 C 162.836 113.802,160.529 111.061,158.174 108.251 C 155.819 105.442,152.729 101.796,151.307 100.150 C 149.046 97.531,144.484 92.111,142.582 89.784 C 133.711 78.931,130.968 77.270,126.198 79.862 M240.981 214.833 C 239.218 216.940,237.453 219.018,237.060 219.450 C 236.667 219.882,234.866 221.966,233.058 224.081 C 231.250 226.196,229.276 228.494,228.672 229.189 C 222.047 236.808,211.645 249.056,211.374 249.556 C 211.004 250.239,211.417 250.864,215.271 255.449 C 218.180 258.908,226.380 268.632,229.470 272.285 C 230.874 273.946,234.168 277.855,236.789 280.972 C 239.409 284.090,244.157 289.735,247.339 293.517 C 250.520 297.299,254.239 301.719,255.602 303.340 C 260.011 308.582,265.666 315.274,267.390 317.289 C 268.315 318.369,270.256 320.668,271.703 322.397 C 282.476 335.263,283.639 335.344,296.458 324.110 C 297.110 323.539,301.798 319.601,306.876 315.358 C 318.369 305.757,319.552 304.056,318.096 299.220 C 317.657 297.760,313.433 292.094,311.209 289.980 C 311.095 289.872,310.295 288.901,309.430 287.821 C 308.566 286.741,307.010 284.885,305.974 283.695 C 304.937 282.506,303.963 281.356,303.810 281.139 C 303.656 280.923,302.382 279.405,300.979 277.766 C 299.576 276.127,296.749 272.778,294.695 270.325 C 292.642 267.871,290.255 265.038,289.391 264.029 C 288.527 263.020,287.479 261.771,287.062 261.254 C 286.646 260.737,285.231 259.062,283.919 257.531 C 282.606 256.001,281.178 254.321,280.744 253.799 C 280.310 253.276,278.100 250.661,275.832 247.988 C 273.565 245.315,271.364 242.662,270.941 242.094 C 270.519 241.526,269.090 239.823,267.765 238.310 C 266.441 236.798,262.555 232.200,259.128 228.094 C 250.476 217.725,244.689 211.002,244.417 211.002 C 244.291 211.002,242.745 212.726,240.981 214.833 ", stroke: "none", fill: "#090806", "fill-rule": "evenodd" }),
            React.createElement("path", { id: "path1", d: "M161.666 8.027 C 160.975 8.536,160.965 8.612,161.563 8.844 C 162.637 9.261,164.029 8.892,164.170 8.153 C 164.335 7.287,162.778 7.209,161.666 8.027 M191.113 9.431 C 187.332 9.703,184.398 10.126,179.568 11.094 C 178.379 11.332,176.965 11.563,176.424 11.607 C 175.884 11.651,175.354 11.736,175.246 11.796 C 175.138 11.857,174.519 11.951,173.870 12.005 C 169.154 12.397,162.620 13.779,160.118 14.912 C 159.686 15.108,157.741 15.567,155.796 15.932 C 153.851 16.297,151.817 16.819,151.277 17.092 C 150.737 17.365,149.542 17.714,148.623 17.867 C 147.704 18.019,147.034 18.278,147.135 18.442 C 147.237 18.606,146.069 18.976,144.540 19.264 C 143.011 19.553,141.559 19.984,141.313 20.223 C 141.066 20.462,140.069 20.891,139.096 21.176 C 138.124 21.461,136.632 22.030,135.781 22.439 C 134.930 22.848,133.839 23.183,133.358 23.183 C 132.876 23.183,132.423 23.315,132.351 23.477 C 132.152 23.925,127.286 26.183,125.835 26.501 C 125.133 26.655,124.558 26.901,124.558 27.047 C 124.558 27.193,123.983 27.547,123.281 27.832 C 120.739 28.865,112.384 33.114,112.011 33.563 C 111.801 33.816,111.002 34.269,110.235 34.570 C 109.468 34.871,108.841 35.261,108.841 35.437 C 108.841 35.613,108.632 35.756,108.377 35.756 C 107.623 35.756,99.825 40.504,99.265 41.304 C 98.982 41.708,98.643 41.931,98.512 41.799 C 98.206 41.494,95.481 43.164,95.481 43.657 C 95.481 43.861,95.083 44.188,94.597 44.385 C 94.111 44.581,92.741 45.455,91.552 46.327 C 90.363 47.198,88.507 48.525,87.426 49.275 C 85.683 50.485,79.105 55.680,77.949 56.760 C 77.707 56.986,75.991 58.571,74.135 60.281 C 72.280 61.992,70.852 63.539,70.964 63.720 C 71.075 63.900,70.929 64.047,70.639 64.047 C 69.906 64.047,62.868 70.987,62.868 71.710 C 62.868 72.034,62.598 72.299,62.267 72.299 C 61.936 72.299,61.563 72.564,61.439 72.888 C 61.314 73.212,60.966 73.477,60.665 73.477 C 60.364 73.477,60.117 73.610,60.116 73.772 C 60.115 73.934,59.620 74.597,59.016 75.246 C 58.412 75.894,57.058 77.485,56.007 78.782 C 54.956 80.079,53.702 81.582,53.221 82.122 C 50.097 85.625,49.472 86.459,49.696 86.822 C 49.835 87.046,49.761 87.230,49.532 87.230 C 49.303 87.230,49.113 87.628,49.110 88.114 C 49.105 88.786,49.020 88.865,48.753 88.443 C 48.487 88.023,48.041 88.452,46.916 90.211 C 46.099 91.488,45.004 92.975,44.482 93.516 C 43.959 94.057,43.206 95.211,42.808 96.081 C 42.410 96.952,41.633 98.088,41.081 98.606 C 40.530 99.124,40.079 99.768,40.079 100.038 C 40.079 100.308,39.637 101.054,39.096 101.697 C 38.556 102.339,38.114 103.025,38.114 103.222 C 38.114 103.419,37.672 104.179,37.132 104.912 C 36.591 105.644,36.149 106.744,36.149 107.355 C 36.149 108.175,35.895 108.564,35.184 108.834 C 34.309 109.167,32.613 112.008,32.613 113.142 C 32.613 113.369,32.480 113.556,32.318 113.556 C 31.874 113.557,29.987 117.117,29.690 118.513 C 29.547 119.186,29.110 120.081,28.717 120.502 C 27.601 121.700,25.956 125.419,25.939 126.783 C 25.936 127.034,25.321 128.170,24.572 129.307 C 23.823 130.444,23.094 132.148,22.953 133.094 C 22.811 134.039,22.495 135.025,22.250 135.285 C 21.168 136.432,19.101 142.713,19.447 143.803 C 19.640 144.410,19.556 144.538,19.083 144.356 C 18.453 144.115,18.283 144.805,18.458 146.901 C 18.503 147.438,18.369 147.726,18.140 147.585 C 17.701 147.313,17.218 148.603,16.061 153.135 C 15.632 154.815,14.924 157.515,14.486 159.136 C 14.049 160.756,13.450 163.667,13.154 165.603 C 12.858 167.540,12.355 170.192,12.036 171.497 C 10.280 178.687,9.712 185.712,9.667 200.786 C 9.616 218.047,10.404 230.204,11.795 233.595 C 12.203 234.590,12.535 236.270,13.153 240.472 C 13.628 243.699,14.634 247.803,15.851 251.473 C 16.173 252.446,16.712 254.303,17.048 255.599 C 17.842 258.660,19.944 264.964,20.878 267.088 C 21.281 268.004,21.611 269.002,21.611 269.305 C 21.611 269.609,21.851 269.949,22.143 270.061 C 22.436 270.174,22.775 270.877,22.896 271.624 C 23.111 272.947,24.394 276.220,25.163 277.407 C 25.373 277.731,25.649 278.261,25.775 278.585 C 27.230 282.321,28.029 283.716,28.411 283.190 C 28.645 282.866,28.687 282.931,28.540 283.391 C 28.352 283.976,29.123 285.995,30.305 288.016 C 30.495 288.340,30.824 289.007,31.036 289.499 C 31.249 289.991,31.673 290.490,31.979 290.607 C 32.285 290.725,32.648 291.420,32.785 292.152 C 32.923 292.884,33.736 294.370,34.592 295.453 C 35.449 296.536,36.149 297.640,36.149 297.904 C 36.149 298.732,38.190 301.375,38.622 301.107 C 38.877 300.950,38.937 301.105,38.779 301.516 C 38.524 302.180,41.823 307.269,42.507 307.269 C 42.684 307.269,42.829 307.500,42.829 307.782 C 42.829 308.375,44.785 311.145,44.810 310.587 C 44.819 310.383,45.129 310.758,45.498 311.421 C 46.565 313.336,48.388 315.531,48.735 315.317 C 48.909 315.209,49.162 315.609,49.298 316.205 C 49.552 317.328,51.976 320.236,52.658 320.236 C 52.871 320.236,53.045 320.437,53.045 320.683 C 53.045 320.929,53.708 321.868,54.519 322.769 C 55.329 323.671,56.373 324.866,56.838 325.425 C 57.303 325.984,57.926 326.592,58.223 326.776 C 58.519 326.961,59.077 327.608,59.463 328.214 C 59.848 328.820,60.463 329.423,60.828 329.554 C 61.627 329.840,62.429 330.654,63.396 332.159 C 63.909 332.958,64.337 333.218,64.897 333.072 C 65.425 332.934,65.618 333.030,65.489 333.366 C 65.384 333.641,65.768 334.330,66.342 334.897 C 69.522 338.039,77.126 344.597,77.589 344.597 C 77.763 344.597,78.294 344.995,78.768 345.481 C 79.948 346.692,80.702 347.263,83.890 349.364 C 85.403 350.361,86.977 351.552,87.389 352.012 C 87.801 352.472,88.348 352.849,88.605 352.849 C 88.862 352.849,89.393 353.202,89.784 353.635 C 90.175 354.067,90.711 354.420,90.975 354.420 C 91.240 354.420,91.699 354.713,91.995 355.071 C 92.292 355.428,93.116 355.964,93.827 356.261 C 94.538 356.558,95.973 357.415,97.017 358.165 C 98.061 358.915,99.071 359.529,99.261 359.530 C 99.451 359.531,100.226 359.920,100.982 360.395 C 101.739 360.871,102.446 361.272,102.554 361.288 C 102.662 361.304,103.193 361.601,103.733 361.949 C 104.273 362.296,105.178 362.822,105.743 363.117 C 106.308 363.413,107.678 364.143,108.788 364.741 C 109.898 365.339,110.806 365.741,110.806 365.634 C 110.806 365.528,112.292 366.224,114.109 367.183 C 115.926 368.141,118.620 369.315,120.095 369.791 C 121.570 370.268,123.710 371.170,124.849 371.795 C 125.988 372.420,127.096 372.823,127.310 372.691 C 127.525 372.558,128.093 372.725,128.574 373.062 C 129.055 373.398,129.729 373.674,130.073 373.674 C 130.417 373.674,131.588 374.103,132.676 374.628 C 133.765 375.153,135.698 375.872,136.974 376.226 C 139.451 376.914,140.966 377.345,143.320 378.034 C 144.131 378.272,146.120 378.730,147.741 379.052 C 149.361 379.375,151.809 379.989,153.180 380.418 C 154.551 380.846,155.773 381.097,155.895 380.975 C 156.017 380.853,156.309 380.909,156.545 381.100 C 157.277 381.692,161.818 382.409,167.976 382.906 C 168.409 382.941,169.028 383.074,169.352 383.202 C 174.673 385.304,202.857 385.715,216.503 383.889 C 217.908 383.701,220.206 383.433,221.611 383.293 C 223.016 383.153,224.430 382.948,224.754 382.839 C 225.079 382.729,226.405 382.567,227.701 382.478 C 230.296 382.300,233.608 381.644,234.671 381.098 C 235.046 380.905,235.753 380.746,236.242 380.746 C 237.694 380.744,257.114 375.630,257.631 375.113 C 257.774 374.970,258.260 374.850,258.710 374.847 C 259.382 374.842,259.423 374.773,258.939 374.460 C 258.466 374.154,258.532 374.078,259.272 374.073 C 260.335 374.066,264.447 372.938,265.029 372.493 C 265.246 372.328,265.996 372.070,266.697 371.920 C 267.398 371.770,268.105 371.437,268.269 371.179 C 268.663 370.556,270.549 369.747,271.629 369.736 C 272.508 369.727,274.306 368.932,277.287 367.235 C 278.194 366.719,279.007 366.367,279.094 366.454 C 279.403 366.764,283.698 364.568,283.478 364.213 C 283.355 364.014,283.513 363.851,283.830 363.851 C 284.444 363.851,288.485 362.035,290.766 360.734 C 291.523 360.303,292.981 359.559,294.008 359.080 C 295.034 358.602,295.874 358.055,295.874 357.866 C 295.874 357.676,296.831 357.098,297.999 356.581 C 299.168 356.064,300.237 355.459,300.374 355.237 C 300.512 355.014,301.738 354.210,303.099 353.448 C 304.461 352.687,305.912 351.687,306.324 351.227 C 306.736 350.766,307.780 350.075,308.644 349.690 C 309.509 349.306,310.674 348.552,311.233 348.016 C 311.793 347.479,312.765 346.774,313.394 346.448 C 314.024 346.122,315.361 345.130,316.367 344.244 C 317.372 343.358,318.325 342.633,318.484 342.633 C 318.643 342.633,319.588 341.924,320.585 341.058 C 321.581 340.192,323.104 338.892,323.969 338.169 C 330.573 332.646,334.860 328.550,334.554 328.056 C 334.433 327.861,334.595 327.701,334.913 327.701 C 335.493 327.701,343.630 319.676,344.345 318.400 C 344.554 318.026,345.225 317.299,345.837 316.785 C 346.448 316.270,347.235 315.245,347.586 314.506 C 347.936 313.767,348.464 313.163,348.758 313.163 C 349.210 313.163,350.524 311.239,350.499 310.613 C 350.495 310.503,350.565 310.457,350.656 310.511 C 350.987 310.708,352.849 308.687,352.849 308.131 C 352.849 307.816,353.247 307.213,353.733 306.791 C 354.219 306.369,354.639 305.862,354.666 305.664 C 354.693 305.466,354.737 305.133,354.764 304.924 C 354.791 304.715,355.079 304.645,355.403 304.769 C 355.727 304.894,355.992 304.808,355.992 304.578 C 355.992 304.107,357.377 301.992,358.929 300.091 C 360.666 297.964,362.602 295.001,363.675 292.829 C 364.235 291.694,364.825 290.766,364.986 290.766 C 365.518 290.766,366.994 287.731,366.994 286.637 C 366.994 285.800,367.107 285.656,367.505 285.986 C 367.903 286.316,368.309 285.786,369.346 283.578 C 370.078 282.021,371.276 279.806,372.009 278.656 C 372.741 277.506,373.385 276.145,373.440 275.630 C 373.495 275.116,373.999 274.023,374.560 273.202 C 375.122 272.381,375.879 271.002,376.244 270.138 C 376.608 269.273,377.319 267.682,377.822 266.601 C 380.293 261.302,383.510 252.723,383.597 251.201 C 383.661 250.090,383.876 249.512,384.227 249.511 C 384.520 249.510,384.668 249.269,384.555 248.976 C 384.443 248.682,384.688 247.931,385.100 247.306 C 385.512 246.680,385.851 245.854,385.852 245.469 C 385.853 245.084,386.379 243.004,387.019 240.848 C 387.660 238.691,388.076 236.646,387.945 236.302 C 387.813 235.958,387.900 235.557,388.138 235.410 C 388.653 235.091,389.697 231.385,390.199 228.094 C 390.573 225.640,391.469 220.726,392.099 217.682 C 392.300 216.709,392.583 213.880,392.729 211.395 C 392.874 208.910,393.153 205.802,393.350 204.489 C 394.208 198.748,393.625 175.824,392.387 166.601 C 391.809 162.294,391.386 159.895,391.132 159.485 C 390.975 159.231,390.621 157.412,390.346 155.444 C 389.797 151.510,388.764 147.044,388.253 146.391 C 388.073 146.161,387.819 145.265,387.690 144.401 C 387.352 142.149,385.690 136.323,385.055 135.166 C 384.758 134.626,384.501 134.008,384.483 133.792 C 384.348 132.152,381.957 125.663,381.283 125.108 C 380.995 124.871,380.874 124.561,381.015 124.420 C 381.156 124.279,381.086 123.766,380.859 123.280 C 380.631 122.794,379.947 121.159,379.337 119.646 C 378.728 118.134,378.036 116.698,377.800 116.457 C 377.563 116.215,377.118 115.243,376.810 114.296 C 376.503 113.349,375.708 111.601,375.045 110.413 C 374.382 109.224,373.590 107.633,373.285 106.876 C 372.980 106.120,372.171 104.617,371.488 103.536 C 370.806 102.456,370.132 101.206,369.992 100.759 C 369.683 99.775,367.858 97.245,367.469 97.261 C 367.316 97.268,367.239 97.060,367.299 96.800 C 367.359 96.540,366.430 94.893,365.236 93.139 C 364.042 91.385,363.065 89.767,363.065 89.544 C 363.065 88.672,361.845 87.843,361.446 88.443 C 361.193 88.823,361.156 88.656,361.327 87.917 C 361.466 87.322,361.411 86.837,361.206 86.837 C 361.001 86.837,360.650 86.439,360.425 85.953 C 359.926 84.872,354.486 78.118,353.762 77.682 C 353.476 77.509,353.242 77.142,353.242 76.866 C 353.242 76.059,351.462 74.610,350.788 74.868 C 350.453 74.997,350.040 74.880,349.872 74.608 C 349.701 74.331,349.760 74.049,350.007 73.966 C 351.092 73.605,350.061 72.382,341.257 63.585 C 333.110 55.444,332.645 55.000,332.258 55.005 C 332.062 55.008,331.297 54.303,330.557 53.438 C 329.817 52.574,328.955 51.866,328.641 51.866 C 328.327 51.866,327.527 51.248,326.863 50.491 C 326.199 49.735,325.436 49.116,325.168 49.116 C 324.899 49.116,324.343 48.735,323.931 48.270 C 322.328 46.458,318.547 43.954,318.212 44.483 C 317.987 44.838,317.888 44.739,317.884 44.151 C 317.876 43.026,316.196 41.957,314.933 42.274 C 313.977 42.514,313.479 41.873,314.385 41.570 C 314.626 41.490,314.051 40.917,313.108 40.297 C 312.166 39.677,310.916 38.844,310.330 38.445 C 309.745 38.047,309.082 37.721,308.857 37.721 C 308.632 37.721,308.448 37.541,308.448 37.322 C 308.448 37.102,307.785 36.616,306.974 36.241 C 306.164 35.866,305.390 35.408,305.255 35.223 C 305.120 35.038,304.612 35.013,304.126 35.167 C 303.539 35.353,303.329 35.306,303.501 35.027 C 303.805 34.535,301.389 32.847,299.411 32.168 C 298.654 31.909,297.505 31.304,296.857 30.824 C 295.384 29.735,292.866 28.482,291.481 28.149 C 290.902 28.010,290.155 27.624,289.822 27.290 C 288.947 26.416,285.075 25.168,284.060 25.433 C 283.433 25.597,283.246 25.509,283.378 25.112 C 283.639 24.329,282.130 23.488,277.407 21.783 C 275.786 21.198,273.929 20.494,273.281 20.218 C 271.341 19.393,268.630 18.725,267.583 18.813 C 266.774 18.881,266.705 18.817,267.191 18.451 C 267.674 18.086,267.622 18.041,266.896 18.200 C 266.410 18.307,266.012 18.234,266.012 18.038 C 266.012 17.842,265.729 17.682,265.384 17.682 C 265.038 17.682,264.198 17.421,263.517 17.103 C 262.836 16.784,260.864 16.178,259.136 15.756 C 254.910 14.724,251.435 13.775,251.083 13.557 C 250.424 13.150,240.862 11.814,240.260 12.044 C 239.900 12.182,239.472 12.077,239.307 11.811 C 239.003 11.320,235.070 10.654,226.523 9.647 C 221.423 9.046,198.418 8.906,191.113 9.431 M299.705 25.773 C 299.975 25.897,300.196 26.232,300.196 26.517 C 300.196 27.285,302.607 28.051,303.013 27.411 C 303.536 26.588,303.396 26.400,302.063 26.132 C 301.361 25.990,300.432 25.801,300.000 25.711 C 299.568 25.621,299.435 25.649,299.705 25.773 M306.876 30.501 C 306.876 30.667,309.703 32.220,310.005 32.220 C 310.189 32.220,310.251 31.883,310.143 31.472 C 309.990 30.886,306.876 29.960,306.876 30.501 M311.434 32.508 C 311.051 32.891,312.432 34.185,313.224 34.185 C 313.623 34.185,313.952 33.964,313.955 33.694 C 313.959 33.366,314.088 33.399,314.342 33.792 C 314.667 34.295,314.724 34.281,314.729 33.694 C 314.732 33.315,314.558 33.006,314.342 33.006 C 313.730 33.006,313.424 32.936,312.516 32.591 C 312.052 32.415,311.565 32.377,311.434 32.508 M316.306 35.363 C 316.830 35.702,316.830 35.745,316.306 35.751 C 315.926 35.755,316.123 36.106,316.859 36.739 C 318.157 37.855,319.560 38.168,318.496 37.104 C 318.156 36.764,317.878 36.311,317.878 36.098 C 317.878 35.885,317.701 35.819,317.485 35.953 C 317.269 36.086,317.092 35.920,317.092 35.583 C 317.092 35.246,316.783 34.973,316.405 34.977 C 315.817 34.982,315.803 35.038,316.306 35.363 M321.807 39.878 C 321.807 40.215,322.261 40.663,322.815 40.874 C 324.112 41.367,324.044 41.395,323.971 40.402 C 323.893 39.354,321.807 38.849,321.807 39.878 M332.263 48.103 C 332.555 48.866,333.466 49.163,334.619 48.874 C 335.385 48.682,335.489 48.522,335.129 48.088 C 334.504 47.335,331.973 47.348,332.263 48.103 M75.251 48.715 C 74.975 49.161,76.504 50.652,77.260 50.675 C 78.422 50.709,78.655 49.541,77.540 49.274 C 76.926 49.128,76.219 48.847,75.968 48.650 C 75.686 48.429,75.412 48.454,75.251 48.715 M335.560 50.468 C 335.560 50.779,335.764 51.160,336.014 51.315 C 336.295 51.488,336.361 51.422,336.187 51.141 C 336.033 50.892,336.104 50.688,336.346 50.688 C 336.587 50.688,336.676 50.511,336.542 50.295 C 336.181 49.710,335.560 49.820,335.560 50.468 M73.617 51.720 C 73.584 52.263,73.779 52.652,74.084 52.652 C 74.691 52.652,74.689 51.177,74.082 50.944 C 73.858 50.858,73.648 51.207,73.617 51.720 M350.730 65.785 C 350.848 66.092,351.200 66.442,351.513 66.562 C 351.969 66.737,351.999 66.626,351.665 66.003 C 351.192 65.118,350.404 64.934,350.730 65.785 M357.597 73.589 C 357.687 73.650,358.070 73.937,358.448 74.226 C 359.037 74.677,359.136 74.661,359.136 74.115 C 359.136 73.723,358.808 73.477,358.284 73.477 C 357.816 73.477,357.507 73.527,357.597 73.589 M282.996 76.664 C 283.518 77.180,284.431 77.957,285.026 78.389 C 285.621 78.821,286.593 79.617,287.187 80.157 C 287.781 80.697,289.381 82.024,290.744 83.104 C 292.106 84.185,293.780 85.640,294.464 86.339 C 295.148 87.037,296.285 87.725,296.991 87.866 C 297.837 88.035,298.206 88.301,298.074 88.646 C 297.959 88.947,298.650 89.802,299.699 90.656 C 300.703 91.473,301.959 92.539,302.490 93.026 C 303.020 93.512,303.614 93.910,303.809 93.910 C 304.004 93.910,304.597 94.377,305.127 94.949 C 305.890 95.773,306.090 95.850,306.090 95.319 C 306.090 94.951,306.267 94.758,306.483 94.892 C 306.699 95.026,306.876 95.477,306.876 95.894 C 306.876 96.312,307.425 97.142,308.096 97.738 C 312.174 101.360,312.438 107.675,308.660 111.193 C 308.083 111.730,307.349 112.722,307.028 113.397 C 306.708 114.073,306.027 114.816,305.516 115.049 C 305.005 115.282,304.460 115.881,304.304 116.381 C 304.149 116.880,303.382 117.925,302.600 118.702 C 300.070 121.217,298.198 123.416,297.750 124.400 C 297.509 124.930,296.900 125.466,296.396 125.592 C 295.893 125.719,295.481 126.040,295.481 126.308 C 295.481 126.758,294.794 127.612,289.555 133.667 C 288.492 134.895,287.623 136.089,287.623 136.319 C 287.623 136.550,287.427 136.739,287.188 136.739 C 286.949 136.739,286.851 136.995,286.971 137.308 C 287.118 137.689,287.001 137.805,286.620 137.659 C 286.298 137.535,285.712 137.844,285.277 138.366 C 284.427 139.387,284.249 140.275,284.895 140.275 C 285.124 140.275,285.191 140.471,285.043 140.710 C 284.861 141.005,284.693 141.014,284.522 140.737 C 284.179 140.183,282.994 141.207,281.315 143.507 C 280.570 144.528,279.651 145.468,279.273 145.596 C 278.895 145.724,278.585 146.005,278.585 146.220 C 278.585 146.436,277.038 148.384,275.147 150.550 C 273.256 152.717,271.535 154.827,271.321 155.241 C 271.108 155.654,270.799 155.992,270.634 155.992 C 270.469 155.992,270.334 156.257,270.334 156.582 C 270.334 156.906,270.145 157.171,269.915 157.171 C 268.893 157.171,265.061 161.906,264.509 163.851 C 264.293 164.610,264.102 164.883,264.083 164.461 C 264.035 163.441,261.297 166.006,261.297 167.071 C 261.297 167.461,261.091 167.780,260.841 167.780 C 260.340 167.780,258.153 170.081,258.153 170.608 C 258.153 170.789,257.402 171.697,256.483 172.627 C 253.213 175.938,251.473 177.844,251.473 178.114 C 251.473 178.265,251.164 178.711,250.786 179.106 C 248.995 180.971,247.151 183.091,247.151 183.283 C 247.151 183.400,246.444 184.225,245.580 185.116 C 244.715 186.006,244.008 186.990,244.008 187.300 C 244.008 187.611,243.845 187.765,243.646 187.642 C 243.270 187.409,241.650 189.218,241.650 189.872 C 241.650 190.078,240.899 190.993,239.980 191.904 C 237.664 194.203,235.739 196.381,234.388 198.232 C 233.757 199.096,232.790 200.266,232.239 200.831 C 231.048 202.053,228.221 205.324,225.995 208.055 C 225.114 209.136,223.880 210.550,223.251 211.198 C 222.033 212.455,221.456 213.581,221.538 214.538 C 221.568 214.893,221.504 214.941,221.378 214.659 C 221.148 214.148,220.039 214.406,220.039 214.970 C 220.039 215.395,218.652 217.064,217.191 218.397 C 216.596 218.940,216.110 219.548,216.110 219.750 C 216.110 219.952,215.624 220.594,215.029 221.177 C 213.378 222.798,208.731 228.020,207.713 229.400 C 207.215 230.075,206.334 231.102,205.754 231.681 C 205.022 232.414,204.771 232.985,204.930 233.558 C 205.087 234.121,205.047 234.219,204.802 233.867 C 204.531 233.477,204.139 233.716,203.185 234.849 C 202.016 236.238,199.291 239.355,197.446 241.415 C 195.716 243.346,193.517 246.166,193.517 246.453 C 193.517 246.621,193.372 246.749,193.196 246.737 C 193.019 246.726,192.343 247.389,191.694 248.211 C 191.044 249.033,189.995 250.182,189.362 250.764 C 188.730 251.346,188.212 251.996,188.212 252.209 C 188.212 252.421,187.754 252.955,187.195 253.396 C 186.635 253.836,185.839 254.859,185.426 255.668 C 185.014 256.478,184.676 257.032,184.676 256.900 C 184.676 256.767,184.145 257.155,183.497 257.760 C 182.849 258.366,182.318 259.144,182.318 259.490 C 182.318 259.835,182.133 260.118,181.907 260.118 C 181.471 260.118,180.126 261.466,178.673 263.357 C 178.193 263.983,177.254 265.058,176.586 265.745 C 175.179 267.193,174.338 268.627,174.758 268.863 C 174.918 268.953,174.809 268.965,174.516 268.891 C 174.223 268.816,173.339 269.501,172.552 270.412 C 171.764 271.323,170.545 272.688,169.843 273.444 C 169.140 274.201,168.566 275.048,168.566 275.327 C 168.566 275.607,168.377 275.835,168.146 275.835 C 167.914 275.835,167.832 276.166,167.963 276.579 C 168.136 277.122,168.017 277.308,167.527 277.267 C 167.151 277.235,166.465 277.815,165.968 278.585 C 165.086 279.953,164.543 280.603,163.342 281.729 C 161.955 283.030,159.528 285.736,159.527 285.984 C 159.527 286.129,158.384 287.485,156.989 288.998 C 155.594 290.511,154.445 291.915,154.436 292.118 C 154.428 292.321,153.748 293.117,152.927 293.886 C 150.490 296.168,148.167 299.042,148.358 299.538 C 148.456 299.792,148.020 300.229,147.389 300.508 C 146.759 300.787,145.965 301.583,145.625 302.276 C 145.285 302.969,144.384 304.041,143.623 304.658 C 142.862 305.275,142.240 306.017,142.240 306.308 C 142.240 306.599,141.999 306.979,141.704 307.151 C 141.410 307.324,140.279 308.527,139.190 309.823 C 135.733 313.943,135.001 314.790,133.653 316.229 C 132.929 317.002,132.046 318.088,131.691 318.641 C 131.336 319.194,130.669 319.951,130.209 320.323 C 129.749 320.696,129.077 321.624,128.715 322.386 C 128.353 323.148,127.831 323.772,127.555 323.772 C 126.888 323.772,125.135 325.659,125.480 326.004 C 126.077 326.601,120.463 327.720,118.038 327.488 C 115.476 327.243,115.197 327.069,109.370 322.101 C 108.040 320.967,106.847 320.083,106.718 320.138 C 106.388 320.276,105.008 318.915,105.167 318.609 C 105.389 318.181,103.344 317.043,102.875 317.333 C 102.605 317.500,102.542 317.430,102.713 317.153 C 102.879 316.884,102.744 316.699,102.381 316.699 C 102.044 316.699,101.768 316.446,101.768 316.137 C 101.768 315.827,101.194 315.170,100.491 314.677 C 99.789 314.184,98.714 313.288,98.103 312.686 C 97.492 312.084,96.862 311.591,96.702 311.591 C 96.542 311.591,95.498 310.724,94.381 309.664 C 93.264 308.605,91.625 307.164,90.740 306.463 C 88.656 304.812,87.439 302.847,86.847 300.179 C 86.022 296.459,87.089 294.415,93.501 287.426 C 94.919 285.881,95.531 284.673,95.257 283.958 C 95.135 283.640,95.224 283.263,95.455 283.121 C 95.692 282.974,95.879 283.170,95.886 283.572 C 95.895 284.118,96.176 283.963,97.097 282.908 C 97.757 282.151,98.945 280.798,99.738 279.901 C 100.530 279.003,101.886 277.431,102.750 276.407 C 103.615 275.384,104.720 274.085,105.206 273.521 C 105.692 272.957,106.090 272.286,106.090 272.030 C 106.090 271.775,106.440 271.455,106.868 271.319 C 107.296 271.183,107.953 270.552,108.328 269.917 C 108.703 269.282,109.149 268.762,109.319 268.762 C 109.488 268.762,109.627 268.409,109.627 267.976 C 109.627 267.464,109.889 267.191,110.380 267.191 C 110.794 267.191,111.192 267.021,111.264 266.814 C 111.445 266.295,114.619 262.337,116.395 260.417 C 117.200 259.546,117.963 258.504,118.091 258.101 C 118.219 257.697,118.577 257.367,118.887 257.367 C 119.197 257.367,119.450 257.134,119.450 256.849 C 119.450 256.564,119.848 255.978,120.334 255.548 C 121.371 254.631,125.601 249.877,126.417 248.712 C 126.727 248.270,127.364 247.494,127.832 246.989 C 133.682 240.679,137.744 235.466,137.605 234.447 C 137.530 233.893,137.604 233.763,137.818 234.075 C 138.165 234.582,139.764 233.048,143.615 228.513 C 145.480 226.317,146.878 224.726,150.168 221.060 C 150.962 220.174,152.434 218.477,153.438 217.289 C 154.443 216.100,155.964 214.341,156.819 213.381 C 157.675 212.420,158.283 211.395,158.172 211.104 C 158.052 210.792,158.507 210.258,159.286 209.799 C 160.010 209.371,161.377 208.044,162.325 206.849 C 163.272 205.655,164.629 204.037,165.339 203.255 C 166.331 202.164,166.513 201.748,166.125 201.469 C 165.757 201.204,165.801 201.163,166.288 201.319 C 166.904 201.516,167.206 201.244,169.287 198.619 C 169.460 198.400,170.695 196.951,172.031 195.399 C 173.367 193.847,174.460 192.292,174.460 191.943 C 174.460 191.594,174.637 191.418,174.853 191.552 C 175.069 191.686,175.246 191.515,175.246 191.173 C 175.246 190.830,175.688 190.382,176.228 190.177 C 176.768 189.971,177.210 189.636,177.210 189.431 C 177.210 189.226,177.708 188.559,178.317 187.948 C 178.925 187.337,180.557 185.511,181.943 183.890 C 183.329 182.269,184.780 180.596,185.168 180.171 C 185.556 179.746,185.787 179.172,185.680 178.894 C 185.574 178.616,185.690 178.389,185.940 178.389 C 186.459 178.389,188.212 176.835,188.212 176.374 C 188.212 176.206,188.964 175.308,189.883 174.380 C 190.802 173.451,192.173 171.905,192.928 170.943 C 195.188 168.068,200.860 161.490,202.574 159.758 C 203.234 159.092,204.913 157.135,206.307 155.410 C 207.701 153.686,209.139 152.006,209.504 151.677 C 209.869 151.349,211.155 149.843,212.362 148.330 C 214.578 145.554,216.206 143.661,219.026 140.582 C 219.874 139.657,221.202 138.104,221.978 137.132 C 223.883 134.745,224.644 133.845,226.719 131.530 C 229.066 128.911,229.562 128.169,229.275 127.705 C 229.144 127.492,229.277 127.410,229.572 127.523 C 229.889 127.645,230.339 127.282,230.673 126.635 C 230.984 126.033,231.989 124.810,232.908 123.917 C 233.826 123.025,234.578 122.008,234.578 121.658 C 234.578 121.308,234.822 121.022,235.120 121.022 C 235.419 121.022,236.163 120.359,236.774 119.548 C 237.385 118.738,238.025 118.016,238.196 117.944 C 238.367 117.872,238.507 117.664,238.507 117.483 C 238.507 117.301,238.993 116.646,239.587 116.027 C 240.182 115.408,241.094 114.378,241.615 113.738 C 242.937 112.114,244.858 109.910,247.852 106.583 C 250.701 103.418,251.512 102.357,251.438 101.888 C 251.411 101.714,251.517 101.174,251.673 100.688 C 251.978 99.743,252.644 99.479,252.665 100.295 C 252.677 100.769,253.261 100.161,255.924 96.904 C 256.610 96.066,257.721 94.828,258.394 94.154 C 259.067 93.479,260.819 91.424,262.287 89.587 C 263.756 87.750,266.230 84.833,267.786 83.104 C 269.342 81.375,270.824 79.563,271.078 79.076 C 271.333 78.589,272.109 77.917,272.804 77.581 C 273.499 77.246,274.686 76.616,275.442 76.182 C 277.420 75.047,281.634 75.316,282.996 76.664 M360.713 77.811 C 360.948 78.249,361.309 78.503,361.516 78.375 C 361.735 78.240,361.656 77.907,361.328 77.578 C 360.518 76.769,360.217 76.883,360.713 77.811 M132.920 78.326 C 133.616 78.615,134.450 78.768,134.774 78.665 C 135.098 78.562,135.227 78.624,135.061 78.802 C 134.589 79.306,137.518 82.100,138.231 81.826 C 138.678 81.654,138.773 81.767,138.587 82.250 C 138.302 82.994,140.514 85.800,141.100 85.437 C 141.295 85.317,141.454 85.499,141.454 85.841 C 141.454 86.582,146.293 92.697,149.665 96.217 C 150.984 97.594,152.063 98.948,152.063 99.227 C 152.063 99.506,152.593 100.180,153.242 100.726 C 153.890 101.271,154.420 101.874,154.420 102.065 C 154.420 102.256,155.349 103.425,156.483 104.662 C 158.888 107.286,160.069 108.681,163.458 112.905 C 163.782 113.309,165.152 114.806,166.503 116.232 C 167.854 117.658,168.959 118.967,168.959 119.141 C 168.959 119.655,171.379 122.013,171.786 121.896 C 171.992 121.837,172.052 121.964,171.919 122.180 C 171.597 122.700,172.836 124.558,173.504 124.558 C 173.793 124.558,174.325 125.180,174.686 125.941 C 175.047 126.702,175.851 127.686,176.473 128.129 C 177.094 128.571,177.603 129.116,177.603 129.340 C 177.603 130.110,182.800 135.366,183.428 135.230 C 183.913 135.125,183.948 135.213,183.591 135.643 C 183.232 136.075,183.460 136.554,184.681 137.937 C 185.529 138.899,186.565 140.073,186.983 140.546 C 187.401 141.019,188.230 142.044,188.824 142.824 C 189.543 143.766,190.112 144.162,190.520 144.006 C 190.859 143.876,191.014 143.891,190.866 144.039 C 190.718 144.187,190.796 144.678,191.038 145.131 C 191.472 145.942,191.484 145.943,191.804 145.178 C 192.091 144.491,192.123 144.515,192.077 145.383 C 192.048 145.923,192.158 146.675,192.322 147.054 C 192.830 148.231,192.171 149.738,190.353 151.556 C 189.392 152.517,188.605 153.433,188.605 153.590 C 188.605 153.748,187.480 155.036,186.104 156.453 C 184.728 157.870,182.850 160.026,181.931 161.244 C 181.011 162.461,180.140 163.458,179.994 163.458 C 179.849 163.458,179.030 164.383,178.175 165.514 C 177.320 166.645,176.179 167.960,175.639 168.436 C 174.784 169.190,174.720 169.407,175.151 170.113 C 175.560 170.784,175.549 170.923,175.085 170.923 C 174.777 170.923,174.456 170.716,174.372 170.463 C 174.287 170.210,173.521 170.861,172.669 171.910 C 171.817 172.959,170.702 174.255,170.192 174.790 C 169.682 175.324,169.235 175.955,169.199 176.191 C 169.164 176.428,168.521 177.252,167.770 178.024 C 165.534 180.321,161.343 185.099,160.666 186.123 C 159.634 187.681,158.472 188.301,157.133 188.007 C 156.475 187.863,156.026 187.654,156.137 187.544 C 156.370 187.311,156.401 187.352,153.158 183.534 C 151.799 181.934,150.034 179.812,149.234 178.819 C 146.646 175.604,146.509 175.483,146.129 176.083 C 145.888 176.463,145.786 176.303,145.782 175.540 C 145.779 174.946,145.599 174.460,145.383 174.460 C 145.167 174.460,144.990 174.216,144.990 173.918 C 144.990 173.620,144.194 172.724,143.222 171.927 C 142.250 171.130,141.454 170.213,141.454 169.888 C 141.454 169.564,140.879 168.729,140.177 168.033 C 139.474 167.336,138.378 166.105,137.741 165.297 C 137.070 164.446,136.356 163.913,136.045 164.033 C 135.679 164.173,135.575 164.021,135.716 163.554 C 135.859 163.082,134.734 161.500,132.107 158.478 C 126.491 152.018,125.187 150.467,124.790 149.779 C 124.594 149.438,124.052 148.796,123.587 148.352 C 123.122 147.908,122.487 147.176,122.176 146.725 C 121.865 146.274,120.815 144.974,119.843 143.834 C 118.102 141.795,116.094 139.432,113.143 135.953 C 112.318 134.980,111.058 133.477,110.341 132.613 C 109.625 131.749,108.817 130.900,108.547 130.727 C 108.276 130.554,108.055 130.186,108.055 129.909 C 108.055 129.632,107.613 129.169,107.073 128.880 C 106.532 128.591,106.089 128.163,106.088 127.930 C 106.082 127.028,102.847 123.691,102.504 124.233 C 102.276 124.593,102.171 124.437,102.167 123.731 C 102.164 123.165,101.684 122.200,101.093 121.570 C 93.622 113.614,92.201 109.418,95.339 104.585 C 95.666 104.081,95.843 103.432,95.732 103.142 C 95.609 102.822,95.945 102.466,96.586 102.237 C 97.167 102.029,98.173 101.397,98.821 100.832 C 99.470 100.267,100.126 99.804,100.281 99.804 C 100.435 99.804,100.981 99.186,101.494 98.430 C 102.007 97.675,102.544 97.174,102.687 97.317 C 102.829 97.459,103.736 96.775,104.702 95.795 C 105.667 94.816,106.551 94.108,106.664 94.222 C 106.980 94.537,108.460 93.068,108.219 92.678 C 108.103 92.491,108.284 92.338,108.621 92.338 C 108.958 92.338,109.234 92.073,109.234 91.749 C 109.234 91.424,109.581 91.159,110.006 91.159 C 110.727 91.159,113.556 88.822,112.882 88.784 C 112.712 88.775,113.237 88.417,114.047 87.989 C 115.629 87.154,115.785 86.865,115.049 86.130 C 114.721 85.802,114.711 85.658,115.016 85.658 C 115.258 85.658,115.527 85.874,115.615 86.139 C 115.790 86.661,118.146 84.946,120.728 82.417 C 121.555 81.606,122.367 80.943,122.532 80.943 C 122.698 80.943,123.497 80.335,124.309 79.591 C 125.157 78.814,126.318 78.172,127.038 78.082 C 129.756 77.742,131.713 77.823,132.920 78.326 M362.386 79.380 C 362.353 79.817,362.491 80.073,362.691 79.949 C 362.892 79.825,362.967 79.954,362.859 80.236 C 362.751 80.518,363.028 80.976,363.474 81.255 C 364.416 81.843,364.474 80.804,363.552 79.831 C 363.280 79.543,363.158 79.145,363.281 78.947 C 363.404 78.748,363.266 78.585,362.975 78.585 C 362.684 78.585,362.419 78.943,362.386 79.380 M365.815 84.086 C 365.815 84.952,365.864 84.980,366.766 84.634 C 367.656 84.292,367.534 83.301,366.601 83.301 C 366.077 83.301,365.815 83.563,365.815 84.086 M375.181 98.969 C 375.470 99.152,375.691 99.415,375.672 99.553 C 375.554 100.437,375.703 100.923,376.144 101.092 C 376.445 101.208,376.649 100.987,376.649 100.545 C 376.649 100.137,376.427 99.804,376.156 99.804 C 375.879 99.804,375.762 99.545,375.889 99.214 C 376.041 98.820,375.874 98.627,375.386 98.631 C 374.836 98.635,374.785 98.719,375.181 98.969 M17.803 129.392 C 17.891 130.216,18.580 130.360,18.782 129.597 C 18.887 129.203,18.827 129.210,18.537 129.625 C 18.224 130.073,18.115 130.037,17.941 129.428 C 17.758 128.793,17.738 128.788,17.803 129.392 M245.678 210.370 C 246.056 210.657,246.365 211.005,246.365 211.144 C 246.365 211.282,246.675 211.725,247.053 212.130 C 248.135 213.286,249.484 214.845,252.857 218.842 C 254.581 220.886,256.478 223.003,257.073 223.547 C 257.667 224.091,258.153 224.700,258.153 224.899 C 258.153 225.099,258.952 226.165,259.929 227.268 C 260.906 228.371,262.276 229.957,262.974 230.794 C 263.672 231.630,264.902 233.045,265.707 233.937 C 266.512 234.830,267.919 236.532,268.835 237.721 C 269.750 238.910,271.346 240.732,272.381 241.770 C 273.416 242.809,274.263 243.827,274.263 244.033 C 274.263 244.351,275.517 245.865,279.275 250.083 C 279.652 250.506,280.580 251.670,281.336 252.669 C 282.092 253.667,283.023 254.795,283.405 255.174 C 283.786 255.553,284.565 256.476,285.136 257.224 C 285.748 258.027,286.397 258.497,286.722 258.373 C 287.024 258.257,287.164 258.335,287.034 258.546 C 286.903 258.757,286.984 259.152,287.213 259.425 C 287.442 259.698,288.351 260.850,289.231 261.984 C 290.112 263.119,290.973 264.047,291.145 264.047 C 291.316 264.047,291.671 264.565,291.933 265.198 C 292.431 266.398,293.305 266.975,293.987 266.553 C 294.234 266.400,294.291 266.607,294.136 267.095 C 293.972 267.614,294.092 267.962,294.487 268.114 C 294.818 268.241,295.088 268.603,295.088 268.918 C 295.088 269.233,295.563 269.864,296.143 270.321 C 296.723 270.777,297.617 271.767,298.129 272.520 C 298.641 273.274,299.190 273.810,299.348 273.712 C 299.507 273.614,299.852 274.020,300.115 274.614 C 300.378 275.208,301.476 276.625,302.556 277.763 C 303.635 278.901,304.519 279.993,304.519 280.191 C 304.519 280.389,304.784 280.550,305.108 280.550 C 305.432 280.550,305.700 280.771,305.702 281.041 C 305.705 281.311,306.368 282.284,307.176 283.202 C 307.984 284.120,309.148 285.490,309.763 286.247 C 310.379 287.003,311.040 287.524,311.232 287.405 C 311.425 287.286,311.488 287.434,311.373 287.734 C 311.258 288.033,311.835 289.017,312.655 289.919 C 316.936 294.630,318.080 296.150,319.054 298.420 C 321.060 303.101,319.082 307.092,312.033 312.586 C 309.403 314.636,306.641 317.006,304.940 318.672 C 304.384 319.216,303.255 320.077,302.432 320.585 C 301.519 321.148,301.015 321.718,301.141 322.046 C 301.254 322.342,301.221 322.548,301.066 322.504 C 300.582 322.367,297.580 324.460,296.751 325.514 C 296.315 326.069,295.788 326.523,295.580 326.523 C 294.530 326.523,292.929 328.604,293.724 328.936 C 294.489 329.256,294.489 329.259,293.713 329.189 C 292.871 329.112,290.374 330.284,290.373 330.757 C 290.373 330.913,289.470 331.548,288.367 332.168 C 284.630 334.267,279.326 333.470,277.022 330.463 C 276.508 329.792,275.859 329.330,275.581 329.437 C 275.302 329.544,274.970 329.463,274.842 329.256 C 274.714 329.049,274.841 328.875,275.124 328.868 C 275.494 328.859,275.465 328.721,275.021 328.377 C 274.681 328.113,274.239 327.606,274.038 327.249 C 273.562 326.399,270.532 322.847,268.664 320.948 C 267.854 320.124,267.191 319.240,267.191 318.984 C 267.191 318.336,265.593 316.699,264.961 316.699 C 264.674 316.699,264.440 316.458,264.440 316.163 C 264.440 315.388,262.871 313.508,262.444 313.772 C 262.245 313.895,262.083 313.675,262.083 313.284 C 262.083 312.893,261.375 311.800,260.511 310.854 C 259.646 309.908,258.939 309.061,258.939 308.971 C 258.939 308.325,256.007 305.785,255.463 305.958 C 254.913 306.133,254.903 306.101,255.394 305.754 C 255.901 305.396,255.890 305.254,255.308 304.637 C 253.124 302.321,251.093 299.964,251.087 299.738 C 251.084 299.594,250.285 298.622,249.312 297.578 C 248.340 296.534,247.544 295.539,247.544 295.368 C 247.544 295.197,246.862 294.401,246.029 293.599 C 245.195 292.797,244.305 291.744,244.050 291.257 C 243.796 290.771,243.328 290.373,243.012 290.373 C 242.695 290.373,242.436 290.217,242.436 290.027 C 242.436 289.469,237.800 283.762,229.471 274.067 C 228.357 272.770,226.796 270.935,226.002 269.989 C 225.208 269.043,223.983 267.655,223.281 266.905 C 222.579 266.154,222.004 265.472,222.004 265.388 C 222.004 265.178,221.145 264.134,217.485 259.896 C 215.756 257.894,213.770 255.577,213.071 254.749 C 212.372 253.920,211.905 253.551,212.033 253.929 C 212.161 254.310,212.071 254.617,211.830 254.617 C 211.591 254.617,211.395 254.185,211.395 253.657 C 211.395 253.129,211.031 252.080,210.586 251.325 C 209.705 249.832,210.183 247.943,211.577 247.408 C 211.909 247.280,212.181 246.914,212.181 246.594 C 212.181 246.274,212.419 245.870,212.710 245.697 C 213.001 245.525,214.616 243.792,216.298 241.847 C 217.981 239.902,220.439 237.091,221.761 235.601 C 223.083 234.110,224.370 232.403,224.621 231.807 C 224.872 231.211,225.435 230.610,225.871 230.472 C 226.307 230.333,226.986 229.723,227.379 229.116 C 228.562 227.289,232.223 222.941,235.496 219.475 C 236.326 218.597,237.454 217.215,238.004 216.405 C 238.554 215.594,239.149 214.931,239.326 214.931 C 239.503 214.931,240.224 214.091,240.929 213.065 C 243.068 209.948,244.243 209.281,245.678 210.370 M390.198 224.578 C 390.007 225.215,389.836 225.442,389.818 225.081 C 389.780 224.350,390.199 223.074,390.409 223.284 C 390.483 223.358,390.388 223.940,390.198 224.578 M392.874 240.037 C 393.326 240.324,393.326 240.410,392.874 240.589 C 392.500 240.738,392.546 240.812,393.026 240.833 C 393.404 240.850,393.713 240.599,393.713 240.275 C 393.713 239.951,393.404 239.688,393.026 239.692 C 392.487 239.696,392.454 239.771,392.874 240.037 M365.138 301.768 C 365.170 302.200,365.236 302.554,365.284 302.554 C 365.944 302.554,367.373 301.671,367.191 301.376 C 366.716 300.607,365.074 300.921,365.138 301.768 M359.136 308.856 C 359.136 309.522,359.228 309.572,359.684 309.151 C 360.249 308.628,360.156 308.055,359.505 308.055 C 359.302 308.055,359.136 308.416,359.136 308.856 M339.438 331.984 C 339.873 332.259,339.836 332.411,339.242 332.778 C 338.537 333.213,338.539 333.227,339.288 333.114 C 340.307 332.961,340.603 331.628,339.616 331.637 C 339.059 331.641,339.020 331.719,339.438 331.984 M310.413 355.730 C 310.413 356.018,310.678 356.254,311.002 356.254 C 311.326 356.254,311.591 356.018,311.591 355.730 C 311.591 355.442,311.326 355.206,311.002 355.206 C 310.678 355.206,310.413 355.442,310.413 355.730 M257.629 380.616 C 257.233 381.012,257.316 381.925,257.748 381.925 C 257.957 381.925,258.016 381.631,257.878 381.271 C 257.695 380.797,257.769 380.706,258.147 380.939 C 258.493 381.153,258.574 381.109,258.387 380.807 C 258.062 380.281,257.984 380.261,257.629 380.616 ", stroke: "none", fill: "#f4eb05", "fill-rule": "evenodd" }),
            React.createElement("path", { id: "path2", d: "M203.340 4.322 C 202.059 4.498,203.426 4.597,207.269 4.608 C 211.345 4.620,212.678 4.524,211.591 4.300 C 209.775 3.924,206.171 3.934,203.340 4.322 M193.124 4.715 C 192.811 5.222,194.894 5.222,195.678 4.715 C 196.117 4.431,195.898 4.333,194.817 4.328 C 194.019 4.325,193.257 4.499,193.124 4.715 M219.253 4.715 C 220.028 5.216,221.611 5.216,221.611 4.715 C 221.611 4.499,220.948 4.325,220.138 4.328 C 219.042 4.333,218.815 4.432,219.253 4.715 M186.640 5.108 C 186.640 5.324,187.072 5.501,187.600 5.501 C 188.127 5.501,188.668 5.324,188.802 5.108 C 188.943 4.879,188.544 4.715,187.842 4.715 C 187.181 4.715,186.640 4.892,186.640 5.108 M226.130 5.108 C 226.263 5.324,226.893 5.501,227.528 5.501 C 228.164 5.501,228.684 5.324,228.684 5.108 C 228.684 4.892,228.054 4.715,227.285 4.715 C 226.453 4.715,225.985 4.874,226.130 5.108 M181.336 5.894 L 180.550 6.232 181.336 6.213 C 181.768 6.202,182.652 6.059,183.301 5.894 L 184.479 5.594 183.301 5.575 C 182.652 5.565,181.768 5.708,181.336 5.894 M232.220 5.894 C 232.760 6.067,233.556 6.214,233.988 6.220 L 234.774 6.232 233.988 5.894 C 233.556 5.708,232.760 5.561,232.220 5.568 L 231.238 5.579 232.220 5.894 M177.308 6.182 C 176.390 6.264,175.639 6.510,175.639 6.726 C 175.639 7.167,178.988 6.798,179.961 6.250 C 180.600 5.890,180.561 5.889,177.308 6.182 M235.560 6.287 C 235.693 6.503,236.367 6.662,237.057 6.641 C 238.254 6.603,238.266 6.587,237.328 6.287 C 235.917 5.835,235.281 5.835,235.560 6.287 M238.507 6.680 C 238.507 6.896,238.772 7.073,239.096 7.073 C 239.420 7.073,239.686 6.896,239.686 6.680 C 239.686 6.464,239.420 6.287,239.096 6.287 C 238.772 6.287,238.507 6.464,238.507 6.680 M242.240 7.466 C 243.414 7.970,244.396 7.970,243.615 7.466 C 243.291 7.256,242.672 7.094,242.240 7.106 L 241.454 7.128 242.240 7.466 M168.468 7.752 C 167.657 7.837,166.994 8.080,166.994 8.293 C 166.994 8.715,169.542 8.375,170.530 7.820 C 171.189 7.451,171.307 7.455,168.468 7.752 M244.597 7.859 C 244.731 8.075,245.227 8.249,245.701 8.245 C 246.401 8.241,246.452 8.168,245.972 7.859 C 245.198 7.358,244.288 7.358,244.597 7.859 M247.151 8.251 C 247.151 8.468,247.417 8.644,247.741 8.644 C 248.065 8.644,248.330 8.468,248.330 8.251 C 248.330 8.035,248.065 7.859,247.741 7.859 C 247.417 7.859,247.151 8.035,247.151 8.251 M204.224 8.545 C 206.655 8.614,210.634 8.614,213.065 8.545 C 215.496 8.476,213.507 8.419,208.644 8.419 C 203.782 8.419,201.793 8.476,204.224 8.545 M193.222 8.929 C 193.924 9.016,195.074 9.016,195.776 8.929 C 196.478 8.841,195.904 8.770,194.499 8.770 C 193.094 8.770,192.520 8.841,193.222 8.929 M219.948 8.929 C 220.654 9.017,221.715 9.015,222.306 8.925 C 222.896 8.836,222.318 8.764,221.022 8.766 C 219.725 8.768,219.242 8.842,219.948 8.929 M161.002 9.319 C 160.408 9.409,159.921 9.648,159.921 9.849 C 159.921 10.051,159.966 10.209,160.020 10.199 C 163.484 9.612,164.383 8.807,161.002 9.319 M226.031 9.308 C 226.410 9.407,227.028 9.407,227.407 9.308 C 227.785 9.209,227.475 9.128,226.719 9.128 C 225.963 9.128,225.653 9.209,226.031 9.308 M254.224 9.823 C 254.224 10.039,254.489 10.216,254.813 10.216 C 255.138 10.216,255.403 10.039,255.403 9.823 C 255.403 9.607,255.138 9.430,254.813 9.430 C 254.489 9.430,254.224 9.607,254.224 9.823 M257.957 10.957 C 259.245 11.480,261.507 11.838,261.088 11.452 C 260.879 11.260,259.912 10.998,258.939 10.870 C 257.879 10.731,257.486 10.766,257.957 10.957 M149.509 12.461 C 149.077 12.565,148.555 12.810,148.350 13.005 C 147.757 13.568,148.993 13.402,150.098 12.770 C 151.093 12.201,150.934 12.118,149.509 12.461 M264.833 12.734 C 265.925 13.399,267.187 13.587,266.582 12.994 C 266.376 12.794,265.678 12.518,265.029 12.383 L 263.851 12.136 264.833 12.734 M144.401 14.328 C 143.752 14.625,143.487 14.876,143.811 14.885 C 144.136 14.895,144.843 14.651,145.383 14.342 C 146.634 13.627,145.953 13.617,144.401 14.328 M274.263 15.840 C 275.670 16.649,277.014 17.010,277.014 16.579 C 277.014 16.375,276.528 16.110,275.933 15.990 C 275.339 15.870,274.499 15.660,274.067 15.523 C 273.548 15.359,273.614 15.466,274.263 15.840 M138.802 15.994 C 138.315 16.088,137.917 16.329,137.917 16.530 C 137.917 17.029,138.328 16.970,139.489 16.306 C 140.486 15.736,140.384 15.690,138.802 15.994 M134.479 17.566 C 133.993 17.660,133.595 17.913,133.595 18.128 C 133.595 18.557,135.128 18.206,135.737 17.638 C 136.129 17.271,136.039 17.266,134.479 17.566 M278.978 17.736 C 278.978 17.922,279.141 18.075,279.339 18.075 C 279.538 18.075,279.980 18.182,280.321 18.313 C 280.663 18.444,280.943 18.377,280.943 18.163 C 280.943 17.948,280.501 17.689,279.961 17.586 C 279.420 17.482,278.978 17.550,278.978 17.736 M130.550 19.138 C 130.064 19.231,129.666 19.473,129.666 19.674 C 129.666 20.172,130.077 20.114,131.238 19.450 C 132.235 18.880,132.132 18.833,130.550 19.138 M283.301 19.420 C 284.395 20.079,285.256 20.251,284.656 19.691 C 284.451 19.499,283.841 19.226,283.301 19.085 L 282.318 18.828 283.301 19.420 M139.686 20.250 C 138.703 20.723,138.670 20.777,139.489 20.577 C 140.603 20.305,141.854 19.667,141.257 19.676 C 141.041 19.679,140.334 19.937,139.686 20.250 M285.265 19.997 C 285.265 20.190,285.545 20.455,285.887 20.587 C 286.848 20.956,286.943 20.875,286.304 20.236 C 285.636 19.568,285.265 19.483,285.265 19.997 M127.112 20.804 C 126.680 20.977,126.206 21.051,126.059 20.966 C 125.911 20.881,125.680 20.992,125.544 21.212 C 125.408 21.431,124.944 21.611,124.512 21.611 C 124.079 21.611,123.824 21.770,123.944 21.965 C 124.065 22.160,123.280 22.531,122.200 22.790 C 121.121 23.049,120.335 23.418,120.454 23.611 C 120.742 24.078,125.737 22.074,125.737 21.492 C 125.737 21.316,125.909 21.278,126.120 21.409 C 126.331 21.539,126.994 21.380,127.594 21.055 C 128.746 20.430,128.439 20.270,127.112 20.804 M287.324 20.911 C 287.488 21.404,289.196 22.122,289.191 21.697 C 289.190 21.541,288.737 21.205,288.185 20.949 C 287.497 20.630,287.226 20.618,287.324 20.911 M289.980 21.950 C 289.980 22.366,295.065 24.909,295.342 24.632 C 295.451 24.523,295.171 24.316,294.719 24.173 C 294.268 24.029,294.000 23.748,294.124 23.547 C 294.248 23.347,293.985 23.183,293.540 23.183 C 293.095 23.183,292.731 23.026,292.731 22.833 C 292.731 22.641,292.510 22.492,292.240 22.502 C 290.973 22.549,290.348 22.363,290.570 22.004 C 290.703 21.788,290.625 21.611,290.396 21.611 C 290.168 21.611,289.980 21.764,289.980 21.950 M128.880 24.558 C 128.340 24.867,128.075 25.120,128.291 25.120 C 128.507 25.120,129.126 24.867,129.666 24.558 C 130.206 24.249,130.472 23.996,130.255 23.996 C 130.039 23.996,129.420 24.249,128.880 24.558 M118.271 24.671 C 117.947 24.782,117.593 24.996,117.485 25.147 C 117.377 25.299,116.769 25.593,116.135 25.801 C 115.500 26.009,114.915 26.376,114.834 26.616 C 114.724 26.947,117.887 25.624,119.024 24.864 C 119.382 24.624,118.825 24.481,118.271 24.671 M296.521 25.054 C 296.417 25.223,297.011 25.732,297.840 26.186 C 298.875 26.753,299.283 26.843,299.141 26.473 C 299.027 26.176,298.700 25.933,298.414 25.933 C 298.129 25.933,297.628 25.667,297.303 25.341 C 296.977 25.015,296.625 24.886,296.521 25.054 M122.593 27.308 C 121.621 27.829,121.002 28.255,121.218 28.255 C 121.434 28.255,122.407 27.829,123.379 27.308 C 124.352 26.788,124.971 26.362,124.754 26.362 C 124.538 26.362,123.566 26.788,122.593 27.308 M111.853 27.767 C 111.376 28.244,111.582 28.663,112.181 28.433 C 112.505 28.308,112.770 28.049,112.770 27.856 C 112.770 27.444,112.229 27.391,111.853 27.767 M110.413 28.576 C 110.413 28.804,109.971 29.102,109.430 29.238 C 108.554 29.458,108.001 30.269,108.743 30.247 C 109.344 30.229,110.980 28.727,110.701 28.449 C 110.543 28.290,110.413 28.347,110.413 28.576 M303.340 29.096 C 304.786 30.078,305.514 30.311,304.573 29.492 C 304.063 29.047,303.444 28.686,303.198 28.690 C 302.952 28.693,303.016 28.876,303.340 29.096 M107.352 30.467 C 107.073 30.783,106.493 31.041,106.063 31.041 C 105.632 31.041,105.183 31.294,105.064 31.603 C 104.946 31.912,104.332 32.345,103.701 32.565 C 103.070 32.785,102.554 33.171,102.554 33.424 C 102.554 33.711,102.956 33.617,103.635 33.169 C 104.229 32.777,105.467 32.035,106.385 31.519 C 107.304 31.003,108.055 30.419,108.055 30.222 C 108.055 29.748,107.955 29.782,107.352 30.467 M305.697 30.230 C 305.697 30.449,306.272 30.906,306.974 31.247 C 308.048 31.767,308.126 31.771,307.466 31.270 C 307.033 30.943,306.459 30.485,306.189 30.253 C 305.872 29.982,305.697 29.973,305.697 30.230 M297.446 30.436 C 297.446 30.544,298.153 30.993,299.018 31.434 C 299.882 31.875,300.589 32.148,300.589 32.040 C 300.589 31.931,299.882 31.482,299.018 31.041 C 298.153 30.600,297.446 30.328,297.446 30.436 M309.234 32.408 C 309.234 32.471,309.671 32.809,310.204 33.158 C 310.964 33.656,311.129 33.675,310.963 33.242 C 310.788 32.786,309.234 32.036,309.234 32.408 M100.688 34.326 C 100.201 34.567,99.804 34.899,99.804 35.064 C 99.804 35.548,100.204 35.415,101.268 34.578 C 102.346 33.730,102.104 33.625,100.688 34.326 M97.642 36.334 C 96.100 37.598,96.523 37.607,98.232 36.346 C 98.964 35.806,99.396 35.364,99.192 35.365 C 98.988 35.366,98.291 35.802,97.642 36.334 M313.982 35.466 C 314.072 35.522,314.543 35.903,315.029 36.313 C 315.516 36.722,315.914 36.954,315.914 36.828 C 315.914 36.432,314.699 35.363,314.248 35.363 C 314.012 35.363,313.892 35.410,313.982 35.466 M95.285 37.798 C 94.853 38.043,94.411 38.356,94.303 38.494 C 94.194 38.632,93.443 39.053,92.633 39.430 C 91.822 39.807,91.159 40.284,91.159 40.490 C 91.159 40.696,90.900 40.864,90.584 40.864 C 90.267 40.864,89.819 41.218,89.587 41.650 C 89.356 42.083,88.927 42.436,88.633 42.436 C 88.340 42.436,87.995 42.708,87.868 43.041 C 87.644 43.625,92.793 40.206,93.058 39.595 C 93.130 39.429,93.396 39.292,93.648 39.291 C 93.900 39.290,94.637 38.854,95.285 38.323 C 96.551 37.285,96.551 37.080,95.285 37.798 M317.092 37.495 C 317.092 37.584,318.551 38.667,320.334 39.903 C 322.117 41.139,323.973 42.511,324.460 42.951 C 324.946 43.392,325.344 43.568,325.344 43.344 C 325.344 43.120,324.592 42.435,323.674 41.822 C 322.755 41.210,321.827 40.516,321.611 40.280 C 321.135 39.761,317.092 37.269,317.092 37.495 M93.594 44.042 C 92.687 44.709,91.945 45.339,91.945 45.442 C 91.945 45.544,92.741 45.057,93.713 44.359 C 95.303 43.217,95.721 42.829,95.362 42.829 C 95.297 42.829,94.501 43.375,93.594 44.042 M86.142 44.008 C 85.872 44.440,85.388 44.794,85.065 44.794 C 84.743 44.794,84.479 44.941,84.479 45.120 C 84.479 45.300,84.037 45.683,83.497 45.972 C 82.957 46.262,82.515 46.752,82.515 47.062 C 82.515 47.441,82.947 47.258,83.833 46.504 C 84.558 45.888,85.619 45.049,86.191 44.640 C 86.762 44.232,87.230 43.746,87.230 43.560 C 87.230 42.960,86.647 43.200,86.142 44.008 M325.755 43.517 C 325.766 43.679,326.779 44.607,328.008 45.580 C 329.236 46.552,331.571 48.490,333.195 49.887 C 334.820 51.284,335.884 52.080,335.560 51.658 C 335.236 51.235,334.528 50.542,333.988 50.117 C 333.448 49.693,332.322 48.675,331.486 47.855 C 330.650 47.036,329.824 46.365,329.651 46.365 C 329.477 46.365,328.621 45.658,327.748 44.794 C 326.177 43.238,325.719 42.945,325.755 43.517 M90.100 46.591 L 88.998 47.602 90.275 46.713 C 90.977 46.224,91.552 45.770,91.552 45.702 C 91.552 45.392,91.117 45.658,90.100 46.591 M80.093 49.157 L 78.389 50.771 80.255 49.307 C 81.983 47.952,82.377 47.544,81.959 47.544 C 81.869 47.544,81.030 48.270,80.093 49.157 M325.859 48.995 C 326.189 49.530,329.273 52.018,329.273 51.750 C 329.273 51.650,328.441 50.887,327.425 50.054 C 326.409 49.221,325.704 48.745,325.859 48.995 M77.237 51.202 C 76.820 51.459,75.980 52.162,75.371 52.764 C 74.762 53.366,74.263 53.738,74.263 53.591 C 74.263 53.444,73.821 53.800,73.281 54.383 C 71.695 56.095,72.147 55.997,74.310 54.162 C 75.416 53.224,76.787 52.064,77.355 51.586 C 78.484 50.636,78.431 50.466,77.237 51.202 M329.666 51.989 C 329.666 52.057,330.241 52.632,330.943 53.266 L 332.220 54.420 331.066 53.143 C 329.990 51.953,329.666 51.686,329.666 51.989 M338.507 54.544 C 339.804 55.796,340.935 56.771,341.021 56.709 C 341.323 56.492,338.103 53.203,337.132 52.737 C 336.549 52.457,337.108 53.192,338.507 54.544 M334.073 55.993 C 335.092 57.052,335.985 57.839,336.058 57.741 C 336.131 57.644,335.297 56.777,334.205 55.815 L 332.220 54.067 334.073 55.993 M76.793 57.073 L 75.639 58.350 76.916 57.196 C 78.106 56.120,78.373 55.796,78.070 55.796 C 78.002 55.796,77.427 56.370,76.793 57.073 M67.350 59.646 C 64.837 62.113,63.827 63.261,64.168 63.261 C 64.287 63.261,65.767 61.938,67.457 60.321 C 69.148 58.704,70.337 57.378,70.101 57.374 C 69.864 57.370,68.627 58.393,67.350 59.646 M345.068 60.806 C 346.982 62.696,348.602 64.288,348.668 64.342 C 348.734 64.396,348.788 64.183,348.788 63.868 C 348.788 63.553,348.672 63.368,348.529 63.456 C 348.190 63.666,344.204 59.497,344.204 58.933 C 344.204 58.695,344.051 58.594,343.864 58.710 C 343.677 58.826,343.207 58.571,342.821 58.144 C 342.434 57.717,341.999 57.367,341.853 57.367 C 341.707 57.367,343.154 58.915,345.068 60.806 M341.079 62.805 C 343.554 65.364,345.845 67.582,346.169 67.735 C 346.493 67.888,344.551 65.795,341.853 63.083 C 339.155 60.372,336.864 58.153,336.763 58.153 C 336.662 58.153,338.604 60.247,341.079 62.805 M68.051 65.078 C 64.534 68.455,61.734 71.295,61.829 71.391 C 61.925 71.486,62.861 70.644,63.909 69.519 C 64.958 68.394,67.886 65.554,70.417 63.207 C 72.948 60.859,74.890 58.939,74.733 58.939 C 74.575 58.939,71.568 61.702,68.051 65.078 M62.268 64.782 C 61.626 65.402,60.723 66.330,60.262 66.844 C 59.801 67.359,58.607 68.552,57.610 69.495 C 56.612 70.439,55.802 71.412,55.811 71.657 C 55.819 71.902,56.673 71.218,57.709 70.138 C 58.744 69.057,60.568 67.156,61.761 65.914 C 63.987 63.595,64.360 62.763,62.268 64.782 M351.702 67.981 C 353.305 69.820,355.384 72.207,356.321 73.286 C 357.258 74.364,357.612 74.655,357.107 73.933 C 356.602 73.212,356.012 72.328,355.796 71.969 C 355.580 71.610,354.680 70.607,353.797 69.741 C 352.914 68.874,352.116 67.990,352.023 67.776 C 351.931 67.562,351.165 66.768,350.321 66.012 C 349.474 65.253,350.093 66.135,351.702 67.981 M348.330 70.334 C 349.174 71.198,349.953 71.906,350.061 71.906 C 350.169 71.906,349.567 71.198,348.723 70.334 C 347.879 69.470,347.100 68.762,346.992 68.762 C 346.884 68.762,347.486 69.470,348.330 70.334 M58.959 74.439 L 57.210 76.424 59.136 74.572 C 60.196 73.553,60.982 72.659,60.885 72.586 C 60.787 72.513,59.920 73.347,58.959 74.439 M53.252 74.276 C 52.394 75.134,51.871 75.835,52.092 75.835 C 52.312 75.835,53.183 75.128,54.028 74.263 C 54.872 73.399,55.394 72.697,55.188 72.704 C 54.982 72.712,54.111 73.419,53.252 74.276 M353.565 76.523 C 353.989 77.117,354.744 77.957,355.243 78.389 C 355.741 78.821,355.474 78.335,354.648 77.308 C 353.020 75.284,352.321 74.776,353.565 76.523 M50.516 76.899 C 50.665 77.503,50.485 77.919,49.923 78.270 C 49.479 78.548,49.122 79.041,49.128 79.368 C 49.140 79.905,49.579 79.487,51.483 77.129 C 52.056 76.420,51.945 76.066,51.315 76.589 C 50.892 76.940,50.710 76.929,50.533 76.539 C 50.406 76.260,50.398 76.422,50.516 76.899 M282.515 77.451 C 283.271 77.906,284.199 78.552,284.578 78.886 C 284.956 79.220,285.265 79.378,285.265 79.238 C 285.265 78.872,282.087 76.621,281.572 76.622 C 281.334 76.623,281.758 76.996,282.515 77.451 M55.751 78.094 C 54.500 79.478,53.690 80.550,53.896 80.550 C 53.985 80.550,54.723 79.754,55.536 78.782 C 57.158 76.841,57.303 76.378,55.751 78.094 M128.585 78.474 C 129.180 78.564,130.152 78.564,130.747 78.474 C 131.341 78.384,130.855 78.310,129.666 78.310 C 128.477 78.310,127.991 78.384,128.585 78.474 M133.988 79.475 C 133.988 79.562,134.740 80.230,135.658 80.960 C 136.577 81.690,137.079 81.976,136.774 81.597 C 136.199 80.882,133.988 79.198,133.988 79.475 M363.525 82.711 C 364.835 84.548,365.971 86.051,366.049 86.051 C 366.441 86.051,365.111 83.744,364.124 82.711 C 363.504 82.063,362.743 81.046,362.432 80.452 C 362.120 79.858,361.703 79.371,361.504 79.371 C 361.305 79.371,362.215 80.874,363.525 82.711 M121.760 82.152 L 120.039 83.754 121.906 82.265 C 122.932 81.447,123.772 80.726,123.772 80.663 C 123.772 80.360,123.343 80.678,121.760 82.152 M47.208 81.293 C 46.884 81.498,46.828 81.725,47.065 81.872 C 47.280 82.005,47.674 81.850,47.941 81.528 C 48.471 80.889,48.055 80.756,47.208 81.293 M46.295 83.073 C 45.726 83.684,45.227 84.321,42.613 87.768 C 40.740 90.239,40.669 90.373,41.231 90.373 C 41.432 90.373,41.697 90.064,41.818 89.686 C 41.939 89.307,42.437 88.527,42.925 87.950 C 46.010 84.305,48.492 80.712,46.295 83.073 M290.853 83.903 C 291.440 84.521,291.992 84.948,292.078 84.851 C 292.164 84.755,291.683 84.249,291.009 83.727 L 289.784 82.779 290.853 83.903 M50.259 84.774 C 48.548 86.684,44.987 91.552,45.302 91.552 C 45.395 91.552,46.409 90.270,47.554 88.703 C 48.700 87.137,50.084 85.368,50.629 84.774 C 51.174 84.180,51.532 83.694,51.424 83.694 C 51.316 83.694,50.792 84.180,50.259 84.774 M139.096 84.995 C 139.096 85.063,139.671 85.638,140.373 86.272 L 141.650 87.426 140.496 86.149 C 139.420 84.959,139.096 84.692,139.096 84.995 M265.398 86.542 L 264.244 87.819 265.521 86.665 C 266.223 86.030,266.798 85.456,266.798 85.388 C 266.798 85.085,266.473 85.352,265.398 86.542 M292.731 85.388 C 292.731 85.456,293.306 86.030,294.008 86.665 L 295.285 87.819 294.131 86.542 C 293.055 85.352,292.731 85.085,292.731 85.388 M366.926 87.525 C 367.334 88.119,367.972 89.107,368.344 89.720 C 368.717 90.333,369.108 90.748,369.214 90.642 C 369.444 90.412,368.638 88.951,367.682 87.863 C 367.304 87.433,366.994 86.938,366.994 86.763 C 366.994 86.587,366.812 86.444,366.589 86.444 C 366.367 86.444,366.518 86.930,366.926 87.525 M113.133 89.489 L 112.181 90.570 113.360 89.587 C 114.008 89.047,114.612 88.561,114.702 88.507 C 114.792 88.453,114.690 88.409,114.476 88.409 C 114.261 88.409,113.657 88.895,113.133 89.489 M297.053 88.911 C 297.053 89.014,298.238 90.137,299.687 91.406 C 301.136 92.675,302.198 93.510,302.047 93.262 C 301.708 92.707,297.053 88.651,297.053 88.911 M143.428 89.868 C 143.433 90.038,144.362 91.159,145.491 92.360 C 147.486 94.481,147.249 94.100,144.673 91.047 C 143.983 90.229,143.423 89.699,143.428 89.868 M364.818 91.847 C 365.424 92.765,365.995 93.517,366.086 93.517 C 366.370 93.517,364.865 91.125,364.275 90.638 C 363.968 90.384,364.213 90.928,364.818 91.847 M39.936 91.358 C 39.610 91.683,39.232 92.302,39.096 92.733 C 38.959 93.164,38.710 93.517,38.543 93.517 C 38.377 93.517,38.034 93.970,37.781 94.524 C 36.895 96.469,38.667 94.422,40.609 91.257 C 41.022 90.585,40.654 90.640,39.936 91.358 M369.985 92.153 C 370.750 93.322,370.915 93.374,370.651 92.365 C 370.542 91.948,370.205 91.511,369.901 91.395 C 369.469 91.229,369.487 91.393,369.985 92.153 M258.525 94.597 L 257.171 96.071 258.644 94.717 C 260.016 93.456,260.299 93.124,259.998 93.124 C 259.933 93.124,259.270 93.787,258.525 94.597 M302.554 93.619 C 302.554 93.711,303.482 94.561,304.617 95.507 C 305.751 96.454,306.432 96.917,306.128 96.536 C 305.519 95.772,302.554 93.352,302.554 93.619 M372.354 96.169 C 373.530 98.218,374.621 99.836,374.402 99.207 C 373.969 97.959,371.888 94.303,371.611 94.303 C 371.431 94.303,371.765 95.142,372.354 96.169 M105.740 95.504 C 105.223 95.935,104.884 96.370,104.985 96.472 C 105.087 96.574,105.585 96.216,106.092 95.676 C 107.194 94.503,107.036 94.425,105.740 95.504 M148.588 96.094 C 150.760 98.679,151.603 99.439,150.086 97.446 C 149.181 96.257,148.267 95.220,148.054 95.142 C 147.842 95.063,148.082 95.492,148.588 96.094 M255.959 97.544 C 254.220 99.442,253.293 100.589,253.499 100.589 C 253.599 100.589,254.521 99.617,255.547 98.428 C 257.571 96.084,257.855 95.474,255.959 97.544 M35.880 97.348 C 35.745 97.726,35.548 98.212,35.442 98.428 C 35.335 98.644,35.485 98.602,35.773 98.334 C 36.279 97.865,36.657 96.660,36.299 96.660 C 36.203 96.660,36.015 96.970,35.880 97.348 M308.633 99.214 C 310.488 101.687,310.728 101.907,309.786 100.271 C 309.374 99.556,308.615 98.583,308.098 98.110 C 307.545 97.603,307.765 98.057,308.633 99.214 M101.043 99.450 C 100.320 100.107,99.802 100.719,99.891 100.808 C 99.981 100.897,100.651 100.354,101.381 99.601 C 103.012 97.918,102.821 97.833,101.043 99.450 M34.578 99.607 C 34.578 99.931,34.241 100.533,33.831 100.944 C 33.420 101.354,32.966 102.061,32.822 102.513 C 32.679 102.965,32.342 103.557,32.073 103.829 C 31.501 104.406,30.195 106.946,30.376 107.128 C 30.484 107.236,31.572 105.509,34.680 100.295 C 35.114 99.567,35.255 99.018,35.009 99.018 C 34.772 99.018,34.578 99.283,34.578 99.607 M375.525 101.664 C 376.128 102.796,376.775 103.724,376.964 103.727 C 377.152 103.730,377.086 103.468,376.817 103.143 C 376.548 102.819,376.436 102.554,376.569 102.554 C 376.701 102.554,376.549 102.245,376.232 101.866 C 375.914 101.488,375.378 100.825,375.042 100.393 C 374.705 99.961,374.923 100.533,375.525 101.664 M252.038 102.259 L 250.884 103.536 252.161 102.382 C 252.863 101.748,253.438 101.173,253.438 101.105 C 253.438 100.802,253.114 101.069,252.038 102.259 M249.485 105.206 C 246.702 108.216,245.831 109.234,246.038 109.234 C 246.155 109.234,247.351 107.996,248.695 106.483 C 251.255 103.603,251.836 102.663,249.485 105.206 M378.068 106.440 C 378.749 107.761,379.366 108.781,379.439 108.708 C 379.689 108.458,378.705 106.090,378.351 106.090 C 378.156 106.090,377.996 105.847,377.996 105.549 C 377.996 105.251,377.734 104.790,377.413 104.524 C 377.092 104.258,377.387 105.120,378.068 106.440 M35.560 106.090 C 35.225 106.739,35.039 107.269,35.147 107.269 C 35.255 107.269,35.618 106.739,35.953 106.090 C 36.288 105.442,36.474 104.912,36.366 104.912 C 36.258 104.912,35.895 105.442,35.560 106.090 M29.306 108.308 C 28.932 109.283,29.344 109.416,29.844 108.482 C 30.086 108.031,30.119 107.662,29.918 107.662 C 29.718 107.662,29.442 107.953,29.306 108.308 M309.721 108.594 C 309.487 109.109,308.713 110.215,308.002 111.052 C 306.915 112.332,306.882 112.418,307.799 111.598 C 308.989 110.534,310.609 108.120,310.325 107.836 C 310.227 107.739,309.955 108.080,309.721 108.594 M159.921 109.484 C 159.921 109.694,160.584 110.475,161.395 111.220 L 162.868 112.574 161.493 111.006 C 160.737 110.144,160.074 109.363,160.020 109.271 C 159.966 109.178,159.921 109.274,159.921 109.484 M379.568 109.552 C 379.568 109.726,379.827 110.213,380.145 110.632 C 380.734 111.411,380.938 110.975,380.508 109.855 C 380.262 109.213,379.568 108.989,379.568 109.552 M27.898 111.002 C 27.620 111.337,27.481 111.699,27.589 111.807 C 27.697 111.915,28.013 111.730,28.291 111.395 C 28.568 111.060,28.707 110.698,28.599 110.590 C 28.491 110.482,28.176 110.667,27.898 111.002 M94.358 111.198 C 94.358 111.523,94.510 112.141,94.695 112.574 C 94.908 113.069,95.033 113.142,95.033 112.770 C 95.033 112.446,94.881 111.827,94.695 111.395 C 94.483 110.900,94.358 110.827,94.358 111.198 M26.865 112.938 C 26.353 113.495,25.777 115.128,26.093 115.128 C 26.356 115.128,27.611 112.743,27.436 112.577 C 27.366 112.511,27.109 112.673,26.865 112.938 M305.476 114.047 L 304.322 115.324 305.599 114.170 C 306.302 113.535,306.876 112.961,306.876 112.893 C 306.876 112.590,306.552 112.857,305.476 114.047 M381.806 114.140 C 382.165 114.894,382.513 115.457,382.578 115.392 C 382.794 115.176,381.760 112.770,381.453 112.770 C 381.287 112.770,381.446 113.387,381.806 114.140 M95.446 114.276 C 95.658 114.672,96.140 115.247,96.517 115.553 C 96.942 115.898,96.847 115.623,96.268 114.833 C 95.236 113.423,94.849 113.161,95.446 114.276 M165.091 115.746 C 167.251 118.328,168.471 119.450,166.770 117.289 C 165.749 115.992,164.746 114.867,164.542 114.788 C 164.338 114.709,164.585 115.140,165.091 115.746 M25.222 116.158 C 24.939 116.465,24.512 117.287,24.274 117.985 C 24.035 118.683,23.648 119.383,23.413 119.542 C 23.114 119.745,23.123 119.833,23.442 119.837 C 23.835 119.842,26.089 115.927,25.831 115.687 C 25.779 115.639,25.505 115.851,25.222 116.158 M239.686 116.503 C 239.178 117.043,238.926 117.480,239.126 117.473 C 239.462 117.461,241.081 115.521,240.755 115.521 C 240.674 115.521,240.193 115.963,239.686 116.503 M301.400 118.784 L 300.443 120.039 301.695 118.885 C 302.997 117.685,303.146 117.471,302.652 117.507 C 302.490 117.519,301.927 118.094,301.400 118.784 M99.018 118.787 C 99.018 118.855,99.592 119.429,100.295 120.064 L 101.572 121.218 100.418 119.941 C 99.342 118.751,99.018 118.483,99.018 118.787 M169.745 121.218 C 170.478 121.974,171.166 122.593,171.274 122.593 C 171.382 122.593,170.871 121.974,170.138 121.218 C 169.404 120.462,168.716 119.843,168.608 119.843 C 168.500 119.843,169.011 120.462,169.745 121.218 M22.697 121.342 C 22.437 122.030,22.076 122.593,21.895 122.593 C 21.713 122.593,21.689 122.794,21.841 123.040 C 22.008 123.311,22.404 122.896,22.845 121.991 C 23.245 121.168,23.482 120.404,23.371 120.293 C 23.260 120.182,22.957 120.654,22.697 121.342 M235.535 121.513 L 234.381 122.790 235.658 121.636 C 236.361 121.001,236.935 120.426,236.935 120.359 C 236.935 120.055,236.611 120.322,235.535 121.513 M297.595 123.281 C 294.599 126.696,293.304 128.309,294.363 127.308 C 295.410 126.318,300.645 120.236,300.450 120.236 C 300.349 120.236,299.065 121.606,297.595 123.281 M384.845 121.316 C 387.226 127.786,388.002 129.371,387.313 126.357 C 387.086 125.368,386.770 124.558,386.611 124.558 C 386.451 124.558,386.094 123.674,385.817 122.593 C 385.540 121.513,385.151 120.629,384.952 120.629 C 384.754 120.629,384.706 120.938,384.845 121.316 M380.381 121.218 C 380.381 121.434,380.634 122.053,380.943 122.593 C 381.252 123.134,381.505 123.399,381.505 123.183 C 381.505 122.967,381.252 122.348,380.943 121.807 C 380.634 121.267,380.381 121.002,380.381 121.218 M104.149 124.730 C 107.104 128.265,107.662 128.881,107.656 128.599 C 107.652 128.430,106.635 127.219,105.396 125.909 C 104.157 124.599,103.596 124.068,104.149 124.730 M21.101 124.793 C 20.713 125.312,20.574 125.737,20.793 125.737 C 21.191 125.737,22.183 124.208,21.938 123.973 C 21.866 123.905,21.490 124.274,21.101 124.793 M231.810 125.835 C 231.080 126.753,230.794 127.255,231.173 126.950 C 231.889 126.376,233.573 124.165,233.295 124.165 C 233.208 124.165,232.540 124.917,231.810 125.835 M381.955 124.951 C 381.953 125.517,383.062 127.767,383.090 127.255 C 383.098 127.118,382.846 126.411,382.530 125.684 C 382.214 124.956,381.955 124.627,381.955 124.951 M19.822 127.668 C 19.944 127.865,19.888 128.086,19.697 128.159 C 19.505 128.231,19.230 128.910,19.085 129.666 C 18.827 131.017,18.836 131.011,19.627 129.328 C 20.560 127.344,20.567 127.308,20.016 127.308 C 19.787 127.308,19.700 127.470,19.822 127.668 M176.031 128.684 C 176.765 129.440,177.453 130.059,177.561 130.059 C 177.669 130.059,177.157 129.440,176.424 128.684 C 175.691 127.927,175.003 127.308,174.895 127.308 C 174.787 127.308,175.298 127.927,176.031 128.684 M292.510 129.371 L 291.356 130.648 292.633 129.494 C 293.335 128.860,293.910 128.285,293.910 128.217 C 293.910 127.914,293.585 128.181,292.510 129.371 M388.409 130.845 C 388.565 131.385,388.870 132.004,389.086 132.220 C 389.348 132.482,389.384 132.286,389.194 131.631 C 389.038 131.090,388.733 130.472,388.517 130.255 C 388.255 129.993,388.219 130.190,388.409 130.845 M177.603 130.575 C 177.603 130.642,178.178 131.217,178.880 131.852 L 180.157 133.006 179.003 131.729 C 177.927 130.539,177.603 130.271,177.603 130.575 M289.959 132.318 L 288.605 133.792 290.079 132.438 C 291.450 131.177,291.733 130.845,291.433 130.845 C 291.367 130.845,290.704 131.508,289.959 132.318 M17.682 133.006 C 17.409 133.978,17.033 134.774,16.845 134.774 C 16.657 134.774,16.503 134.951,16.503 135.167 C 16.503 135.383,16.661 135.560,16.853 135.560 C 17.152 135.560,17.524 134.808,18.749 131.729 C 18.857 131.459,18.772 131.238,18.561 131.238 C 18.350 131.238,17.954 132.033,17.682 133.006 M22.068 133.416 C 21.409 134.861,21.535 135.169,22.247 133.855 C 22.579 133.242,22.778 132.666,22.688 132.577 C 22.598 132.487,22.319 132.864,22.068 133.416 M111.591 133.718 C 111.591 133.786,112.166 134.361,112.868 134.995 L 114.145 136.149 112.991 134.872 C 111.916 133.682,111.591 133.415,111.591 133.718 M286.197 136.624 C 285.144 137.858,284.488 138.742,284.738 138.588 C 285.287 138.251,288.560 134.381,288.296 134.381 C 288.195 134.381,287.250 135.391,286.197 136.624 M221.757 137.801 C 220.488 139.250,219.653 140.312,219.901 140.161 C 220.456 139.822,224.512 135.167,224.252 135.167 C 224.149 135.167,223.026 136.352,221.757 137.801 M389.980 135.953 C 390.137 136.493,390.442 137.112,390.658 137.328 C 390.920 137.590,390.956 137.394,390.766 136.739 C 390.610 136.198,390.305 135.580,390.088 135.363 C 389.827 135.102,389.790 135.298,389.980 135.953 M183.496 137.523 C 184.400 138.603,185.345 139.613,185.596 139.767 C 185.846 139.921,185.190 139.037,184.137 137.803 C 183.084 136.569,182.139 135.560,182.037 135.560 C 181.936 135.560,182.592 136.443,183.496 137.523 M15.828 138.012 C 15.225 140.268,15.485 140.346,16.238 138.135 C 16.574 137.151,16.719 136.346,16.560 136.346 C 16.402 136.346,16.072 137.096,15.828 138.012 M282.686 140.766 L 281.532 142.043 282.809 140.889 C 283.512 140.254,284.086 139.680,284.086 139.612 C 284.086 139.309,283.762 139.576,282.686 140.766 M14.585 141.185 C 13.933 142.825,14.114 143.833,14.785 142.295 C 15.102 141.569,15.286 140.774,15.193 140.527 C 15.101 140.280,14.827 140.576,14.585 141.185 M187.821 142.634 C 188.945 143.932,190.068 145.117,190.315 145.269 C 190.563 145.420,189.728 144.358,188.459 142.909 C 187.190 141.460,186.067 140.275,185.964 140.275 C 185.861 140.275,186.697 141.337,187.821 142.634 M391.386 140.733 C 391.403 141.022,391.755 142.141,392.168 143.222 C 392.758 144.765,392.863 144.891,392.655 143.811 C 392.510 143.055,392.364 142.004,392.331 141.475 C 392.298 140.947,392.065 140.446,391.813 140.362 C 391.562 140.278,391.369 140.445,391.386 140.733 M217.092 143.320 C 214.444 146.371,213.336 147.854,215.241 145.796 C 217.236 143.641,219.738 140.668,219.556 140.668 C 219.466 140.668,218.357 141.861,217.092 143.320 M119.843 143.541 C 119.843 143.609,120.417 144.184,121.120 144.818 L 122.397 145.972 121.243 144.695 C 120.167 143.505,119.843 143.238,119.843 143.541 M277.407 146.955 C 276.066 148.468,275.057 149.705,275.165 149.705 C 275.273 149.705,276.458 148.468,277.800 146.955 C 279.141 145.442,280.150 144.204,280.042 144.204 C 279.934 144.204,278.748 145.442,277.407 146.955 M12.967 145.580 C 12.967 145.904,13.143 146.169,13.360 146.169 C 13.576 146.169,13.752 145.904,13.752 145.580 C 13.752 145.255,13.576 144.990,13.360 144.990 C 13.143 144.990,12.967 145.255,12.967 145.580 M191.061 146.396 C 191.868 147.355,191.948 148.539,191.257 149.313 C 190.840 149.782,190.869 149.786,191.454 149.344 C 192.405 148.624,192.314 147.223,191.257 146.328 C 190.374 145.580,190.374 145.580,191.061 146.396 M122.593 146.428 C 122.593 146.642,123.080 147.246,123.674 147.770 L 124.754 148.723 123.772 147.544 C 123.232 146.896,122.746 146.292,122.692 146.202 C 122.638 146.112,122.593 146.213,122.593 146.428 M393.320 148.284 C 393.320 148.608,393.497 148.982,393.713 149.116 C 393.929 149.249,394.106 149.094,394.106 148.769 C 394.106 148.445,393.929 148.071,393.713 147.937 C 393.497 147.804,393.320 147.960,393.320 148.284 M211.960 149.411 L 210.806 150.688 212.083 149.534 C 212.785 148.899,213.360 148.324,213.360 148.257 C 213.360 147.953,213.035 148.220,211.960 149.411 M190.373 150.402 C 190.157 150.563,189.540 151.223,189.002 151.870 C 188.124 152.924,188.174 152.906,189.493 151.691 C 190.824 150.465,191.151 150.087,190.864 150.104 C 190.810 150.108,190.589 150.242,190.373 150.402 M11.440 150.982 C 11.483 151.252,11.417 151.739,11.292 152.063 C 10.916 153.041,10.687 154.896,10.985 154.548 C 11.248 154.241,12.181 151.271,12.181 150.740 C 12.181 150.603,11.996 150.491,11.771 150.491 C 11.545 150.491,11.396 150.712,11.440 150.982 M129.470 154.813 C 130.314 155.678,131.093 156.385,131.201 156.385 C 131.309 156.385,130.707 155.678,129.862 154.813 C 129.018 153.949,128.239 153.242,128.131 153.242 C 128.023 153.242,128.625 153.949,129.470 154.813 M185.855 155.599 C 184.731 156.896,183.901 157.957,184.009 157.957 C 184.117 157.957,185.124 156.896,186.248 155.599 C 187.371 154.303,188.202 153.242,188.093 153.242 C 187.985 153.242,186.978 154.303,185.855 155.599 M206.852 155.305 L 205.697 156.582 206.974 155.427 C 207.677 154.793,208.251 154.218,208.251 154.150 C 208.251 153.847,207.927 154.114,206.852 155.305 M269.134 156.680 L 267.780 158.153 269.253 156.799 C 270.625 155.539,270.908 155.206,270.608 155.206 C 270.542 155.206,269.879 155.869,269.134 156.680 M391.041 156.582 C 391.041 157.014,391.183 157.809,391.356 158.350 C 391.605 159.128,391.670 159.168,391.670 158.546 C 391.670 158.114,391.529 157.318,391.356 156.778 C 391.106 156.000,391.041 155.959,391.041 156.582 M395.352 157.367 C 395.345 157.800,395.492 158.507,395.678 158.939 C 396.108 159.940,396.108 158.907,395.678 157.564 C 395.425 156.774,395.361 156.736,395.352 157.367 M13.977 158.181 C 13.832 158.757,13.790 159.304,13.883 159.397 C 13.975 159.489,14.169 159.094,14.314 158.518 C 14.458 157.942,14.501 157.395,14.408 157.303 C 14.316 157.210,14.122 157.605,13.977 158.181 M200.932 162.161 C 199.447 163.825,198.433 165.065,198.679 164.916 C 199.238 164.576,204.079 159.136,203.821 159.136 C 203.718 159.136,202.417 160.497,200.932 162.161 M396.296 161.217 C 396.120 161.821,396.086 162.425,396.220 162.559 C 396.660 162.999,396.918 162.371,396.766 161.234 L 396.616 160.118 396.296 161.217 M181.336 161.014 C 181.120 161.176,180.414 161.925,179.767 162.678 C 178.655 163.972,178.682 163.962,180.258 162.494 C 181.771 161.084,182.114 160.696,181.827 160.713 C 181.773 160.717,181.552 160.852,181.336 161.014 M136.298 163.004 C 136.956 163.836,137.806 164.764,138.186 165.067 C 138.567 165.371,138.104 164.691,137.158 163.556 C 135.173 161.176,134.517 160.756,136.298 163.004 M262.061 164.931 L 260.707 166.405 262.181 165.051 C 263.552 163.790,263.835 163.458,263.535 163.458 C 263.469 163.458,262.806 164.121,262.061 164.931 M396.464 165.399 C 396.464 166.060,396.640 166.601,396.857 166.601 C 397.073 166.601,397.250 166.170,397.250 165.642 C 397.250 165.115,397.073 164.574,396.857 164.440 C 396.627 164.298,396.464 164.698,396.464 165.399 M7.859 166.012 C 7.859 166.336,8.035 166.601,8.251 166.601 C 8.468 166.601,8.644 166.336,8.644 166.012 C 8.644 165.688,8.468 165.422,8.251 165.422 C 8.035 165.422,7.859 165.688,7.859 166.012 M259.311 168.075 L 257.957 169.548 259.430 168.194 C 260.802 166.934,261.084 166.601,260.784 166.601 C 260.719 166.601,260.056 167.264,259.311 168.075 M396.935 168.173 C 396.935 168.713,397.076 169.597,397.250 170.138 L 397.564 171.120 397.564 170.138 C 397.564 169.597,397.423 168.713,397.250 168.173 L 396.935 167.191 396.935 168.173 M193.513 170.825 C 192.457 172.068,192.000 172.731,192.499 172.299 C 193.447 171.478,195.858 168.566,195.589 168.566 C 195.504 168.566,194.570 169.583,193.513 170.825 M172.867 170.825 L 171.513 172.299 172.986 170.945 C 174.358 169.684,174.640 169.352,174.340 169.352 C 174.275 169.352,173.612 170.015,172.867 170.825 M393.419 172.299 C 393.424 173.163,393.504 173.470,393.598 172.982 C 393.692 172.493,393.689 171.786,393.590 171.410 C 393.492 171.034,393.415 171.434,393.419 172.299 M254.989 173.183 L 253.635 174.656 255.108 173.302 C 256.480 172.042,256.762 171.709,256.462 171.709 C 256.396 171.709,255.733 172.372,254.989 173.183 M6.287 174.067 C 6.287 174.499,6.464 174.853,6.680 174.853 C 6.896 174.853,7.073 174.499,7.073 174.067 C 7.073 173.635,6.896 173.281,6.680 173.281 C 6.464 173.281,6.287 173.635,6.287 174.067 M146.169 174.656 C 146.902 175.413,147.590 176.031,147.698 176.031 C 147.806 176.031,147.295 175.413,146.562 174.656 C 145.829 173.900,145.141 173.281,145.032 173.281 C 144.924 173.281,145.436 173.900,146.169 174.656 M190.349 174.558 L 189.194 175.835 190.472 174.681 C 191.174 174.046,191.749 173.472,191.749 173.404 C 191.749 173.100,191.424 173.368,190.349 174.558 M397.742 175.442 C 397.746 176.306,397.826 176.614,397.920 176.125 C 398.014 175.636,398.011 174.929,397.912 174.553 C 397.814 174.178,397.737 174.578,397.742 175.442 M252.431 176.130 L 251.277 177.407 252.554 176.253 C 253.256 175.618,253.831 175.043,253.831 174.976 C 253.831 174.672,253.507 174.939,252.431 176.130 M6.131 176.746 C 5.958 177.679,5.913 178.539,6.032 178.658 C 6.357 178.983,6.766 177.031,6.596 175.973 C 6.485 175.291,6.364 175.493,6.131 176.746 M187.033 178.389 C 185.910 179.686,185.079 180.747,185.187 180.747 C 185.296 180.747,186.303 179.686,187.426 178.389 C 188.550 177.092,189.380 176.031,189.272 176.031 C 189.164 176.031,188.157 177.092,187.033 178.389 M148.172 177.052 C 149.003 178.296,151.307 180.848,151.456 180.690 C 151.528 180.613,150.694 179.578,149.604 178.389 C 148.514 177.200,147.870 176.599,148.172 177.052 M393.812 177.800 C 393.817 178.664,393.897 178.971,393.991 178.483 C 394.085 177.994,394.081 177.287,393.983 176.911 C 393.885 176.535,393.808 176.935,393.812 177.800 M164.994 180.059 C 163.614 181.626,162.797 182.661,163.178 182.360 C 164.005 181.706,167.935 177.210,167.680 177.210 C 167.582 177.210,166.373 178.492,164.994 180.059 M249.084 180.059 C 247.921 181.410,247.281 182.268,247.662 181.965 C 248.462 181.331,251.633 177.603,251.373 177.603 C 251.277 177.603,250.247 178.708,249.084 180.059 M9.914 180.747 C 9.914 181.503,9.995 181.812,10.094 181.434 C 10.193 181.056,10.193 180.437,10.094 180.059 C 9.995 179.681,9.914 179.990,9.914 180.747 M5.746 180.958 C 5.611 181.309,5.519 181.980,5.541 182.449 C 5.567 182.987,5.700 182.796,5.904 181.928 C 6.247 180.468,6.154 179.895,5.746 180.958 M398.312 188.114 C 398.602 196.680,398.821 196.751,398.821 188.278 C 398.821 184.373,398.667 181.532,398.455 181.532 C 398.235 181.532,398.178 184.151,398.312 188.114 M394.248 185.855 C 394.248 187.908,394.314 188.748,394.395 187.721 C 394.476 186.694,394.476 185.015,394.395 183.988 C 394.314 182.962,394.248 183.802,394.248 185.855 M161.272 184.381 L 160.118 185.658 161.395 184.504 C 162.097 183.869,162.672 183.295,162.672 183.227 C 162.672 182.924,162.348 183.191,161.272 184.381 M9.521 184.676 C 9.521 185.432,9.602 185.742,9.701 185.363 C 9.800 184.985,9.800 184.366,9.701 183.988 C 9.602 183.610,9.521 183.919,9.521 184.676 M153.635 183.620 C 153.635 183.688,154.209 184.262,154.912 184.897 L 156.189 186.051 155.035 184.774 C 153.959 183.584,153.635 183.316,153.635 183.620 M243.976 185.953 C 242.813 187.304,242.173 188.161,242.554 187.859 C 243.354 187.224,246.524 183.497,246.264 183.497 C 246.169 183.497,245.139 184.602,243.976 185.953 M181.311 185.167 L 180.157 186.444 181.434 185.290 C 182.625 184.214,182.892 183.890,182.588 183.890 C 182.521 183.890,181.946 184.465,181.311 185.167 M4.715 188.016 C 4.715 188.988,4.892 189.784,5.108 189.784 C 5.324 189.784,5.501 188.988,5.501 188.016 C 5.501 187.043,5.324 186.248,5.108 186.248 C 4.892 186.248,4.715 187.043,4.715 188.016 M178.954 187.917 L 177.800 189.194 179.077 188.040 C 179.779 187.406,180.354 186.831,180.354 186.763 C 180.354 186.460,180.029 186.727,178.954 187.917 M9.166 189.980 C 9.168 191.493,9.239 192.064,9.324 191.249 C 9.409 190.433,9.408 189.196,9.321 188.498 C 9.234 187.801,9.165 188.468,9.166 189.980 M239.666 191.061 C 238.426 192.537,238.215 192.886,239.136 191.936 C 241.189 189.818,242.212 188.605,241.947 188.605 C 241.826 188.605,240.800 189.710,239.666 191.061 M176.588 190.668 C 174.849 192.566,173.922 193.713,174.127 193.713 C 174.228 193.713,175.149 192.741,176.176 191.552 C 178.200 189.208,178.484 188.598,176.588 190.668 M4.617 193.664 C 4.157 195.732,4.254 199.569,4.744 198.727 C 4.963 198.351,5.091 196.760,5.027 195.191 C 4.932 192.843,4.859 192.573,4.617 193.664 M394.246 196.267 C 394.244 198.212,394.311 199.057,394.393 198.145 C 394.476 197.234,394.477 195.642,394.395 194.609 C 394.314 193.576,394.247 194.322,394.246 196.267 M236.321 194.990 L 235.167 196.267 236.444 195.113 C 237.146 194.478,237.721 193.904,237.721 193.836 C 237.721 193.533,237.397 193.800,236.321 194.990 M8.813 203.340 C 8.813 208.310,8.869 210.290,8.938 207.738 C 9.007 205.187,9.006 201.120,8.938 198.701 C 8.869 196.282,8.813 198.369,8.813 203.340 M171.881 196.169 L 170.727 197.446 172.004 196.292 C 173.194 195.216,173.462 194.892,173.158 194.892 C 173.090 194.892,172.516 195.467,171.881 196.169 M398.035 198.625 C 398.035 199.597,398.212 200.393,398.428 200.393 C 398.644 200.393,398.821 199.597,398.821 198.625 C 398.821 197.652,398.644 196.857,398.428 196.857 C 398.212 196.857,398.035 197.652,398.035 198.625 M167.559 201.277 L 166.405 202.554 167.682 201.400 C 168.384 200.765,168.959 200.191,168.959 200.123 C 168.959 199.819,168.635 200.087,167.559 201.277 M230.040 202.456 L 228.487 204.126 230.157 202.573 C 231.710 201.128,232.008 200.786,231.710 200.786 C 231.646 200.786,230.895 201.537,230.040 202.456 M393.804 204.322 C 393.804 205.079,393.885 205.388,393.984 205.010 C 394.083 204.632,394.083 204.013,393.984 203.635 C 393.885 203.256,393.804 203.566,393.804 204.322 M163.044 206.582 L 161.690 208.055 163.163 206.701 C 164.535 205.441,164.817 205.108,164.517 205.108 C 164.451 205.108,163.788 205.771,163.044 206.582 M397.734 206.680 C 397.734 207.436,397.814 207.746,397.913 207.367 C 398.012 206.989,398.012 206.370,397.913 205.992 C 397.814 205.614,397.734 205.923,397.734 206.680 M4.322 210.389 C 4.322 211.781,4.499 213.030,4.715 213.163 C 4.963 213.316,5.108 212.381,5.108 210.632 C 5.108 209.045,4.940 207.859,4.715 207.859 C 4.494 207.859,4.322 208.964,4.322 210.389 M393.419 209.234 C 393.424 210.098,393.504 210.406,393.598 209.917 C 393.692 209.428,393.689 208.721,393.590 208.345 C 393.492 207.969,393.415 208.369,393.419 209.234 M222.769 210.904 L 221.415 212.377 222.888 211.023 C 224.259 209.763,224.542 209.430,224.242 209.430 C 224.176 209.430,223.513 210.093,222.769 210.904 M242.309 211.977 C 241.500 212.946,241.064 213.650,241.342 213.543 C 241.620 213.435,242.267 212.731,242.781 211.978 C 243.826 210.448,244.542 210.284,245.745 211.297 C 246.561 211.984,246.561 211.983,245.813 211.100 C 244.722 209.811,243.961 210.002,242.309 211.977 M157.208 213.257 C 156.039 214.677,155.269 215.724,155.497 215.584 C 156.185 215.158,160.024 210.607,159.666 210.641 C 159.482 210.659,158.376 211.836,157.208 213.257 M397.102 212.392 C 396.967 212.744,396.874 213.503,396.896 214.079 C 396.928 214.923,397.006 214.828,397.295 213.595 C 397.664 212.023,397.540 211.251,397.102 212.392 M247.151 213.163 C 247.659 213.703,248.140 214.145,248.220 214.145 C 248.547 214.145,246.928 212.205,246.592 212.193 C 246.392 212.186,246.644 212.623,247.151 213.163 M238.507 216.503 C 237.384 217.800,236.553 218.861,236.661 218.861 C 236.769 218.861,237.776 217.800,238.900 216.503 C 240.023 215.206,240.854 214.145,240.746 214.145 C 240.638 214.145,239.630 215.206,238.507 216.503 M9.155 216.503 C 9.155 217.692,9.229 218.178,9.319 217.583 C 9.409 216.989,9.409 216.017,9.319 215.422 C 9.229 214.828,9.155 215.314,9.155 216.503 M216.870 217.780 C 215.924 218.915,215.461 219.595,215.841 219.291 C 216.605 218.682,219.025 215.717,218.759 215.717 C 218.666 215.717,217.816 216.645,216.870 217.780 M396.758 215.942 C 396.596 216.106,396.464 216.689,396.464 217.236 C 396.464 217.952,396.584 218.112,396.890 217.806 C 397.124 217.571,397.257 216.989,397.185 216.511 C 397.112 216.033,396.920 215.777,396.758 215.942 M4.715 218.075 C 4.715 219.155,4.892 220.039,5.108 220.039 C 5.324 220.039,5.501 219.155,5.501 218.075 C 5.501 216.994,5.324 216.110,5.108 216.110 C 4.892 216.110,4.715 216.994,4.715 218.075 M153.613 217.583 L 152.259 219.057 153.733 217.703 C 155.104 216.443,155.387 216.110,155.087 216.110 C 155.021 216.110,154.358 216.773,153.613 217.583 M250.497 217.197 C 250.717 217.355,251.380 218.073,251.971 218.792 C 252.562 219.511,253.045 219.988,253.045 219.852 C 253.045 219.390,250.886 216.896,250.491 216.902 C 250.235 216.906,250.237 217.008,250.497 217.197 M235.142 220.530 L 233.988 221.807 235.265 220.653 C 235.968 220.019,236.542 219.444,236.542 219.376 C 236.542 219.073,236.218 219.340,235.142 220.530 M396.077 219.941 C 396.089 221.338,396.748 221.745,396.935 220.472 C 397.058 219.632,396.952 219.253,396.592 219.253 C 396.305 219.253,396.073 219.563,396.077 219.941 M9.521 221.218 C 9.521 221.974,9.602 222.284,9.701 221.906 C 9.800 221.528,9.800 220.909,9.701 220.530 C 9.602 220.152,9.521 220.462,9.521 221.218 M212.574 222.790 C 211.233 224.303,210.224 225.540,210.332 225.540 C 210.440 225.540,211.625 224.303,212.967 222.790 C 214.308 221.277,215.317 220.039,215.209 220.039 C 215.101 220.039,213.915 221.277,212.574 222.790 M395.556 223.084 C 395.429 224.111,395.216 225.570,395.082 226.326 C 394.903 227.340,394.945 227.538,395.241 227.080 C 395.662 226.429,396.322 221.218,395.983 221.218 C 395.875 221.218,395.683 222.058,395.556 223.084 M231.210 225.049 C 227.684 229.059,227.347 229.470,227.583 229.470 C 227.693 229.470,229.231 227.790,231.001 225.737 C 232.770 223.684,234.144 222.004,234.053 222.004 C 233.962 222.004,232.683 223.374,231.210 225.049 M256.190 223.772 C 256.730 224.420,257.215 225.025,257.269 225.115 C 257.323 225.205,257.454 225.192,257.560 225.086 C 257.666 224.980,257.180 224.376,256.481 223.743 L 255.209 222.593 256.190 223.772 M5.507 224.001 C 5.510 224.524,5.687 225.216,5.899 225.540 C 6.171 225.955,6.211 225.722,6.033 224.754 C 5.722 223.060,5.499 222.740,5.507 224.001 M146.961 225.338 C 146.231 226.091,145.710 226.768,145.803 226.842 C 145.896 226.915,146.568 226.299,147.295 225.472 C 148.948 223.593,148.735 223.507,146.961 225.338 M207.466 228.684 C 206.124 230.196,205.116 231.434,205.224 231.434 C 205.332 231.434,206.517 230.196,207.859 228.684 C 209.200 227.171,210.209 225.933,210.101 225.933 C 209.993 225.933,208.807 227.171,207.466 228.684 M259.581 227.930 C 262.158 230.920,263.553 232.208,261.461 229.666 C 260.216 228.153,259.030 226.850,258.826 226.769 C 258.622 226.689,258.961 227.211,259.581 227.930 M143.790 228.978 L 142.436 230.452 143.910 229.098 C 145.281 227.837,145.564 227.505,145.264 227.505 C 145.198 227.505,144.535 228.168,143.790 228.978 M5.933 228.366 C 6.050 229.908,6.601 230.861,6.641 229.591 C 6.662 228.901,6.503 228.228,6.287 228.094 C 6.071 227.961,5.912 228.083,5.933 228.366 M393.938 231.266 C 393.793 231.842,393.751 232.389,393.843 232.481 C 393.936 232.574,394.130 232.178,394.274 231.603 C 394.419 231.027,394.461 230.480,394.369 230.387 C 394.276 230.295,394.082 230.690,393.938 231.266 M6.287 231.827 C 6.287 232.259,6.464 232.613,6.680 232.613 C 6.896 232.613,7.073 232.259,7.073 231.827 C 7.073 231.395,6.896 231.041,6.680 231.041 C 6.464 231.041,6.287 231.395,6.287 231.827 M222.004 235.756 C 220.663 237.269,219.654 238.507,219.762 238.507 C 219.870 238.507,221.056 237.269,222.397 235.756 C 223.738 234.244,224.747 233.006,224.639 233.006 C 224.531 233.006,223.345 234.244,222.004 235.756 M393.607 233.243 C 393.449 233.401,393.320 233.801,393.320 234.132 C 393.320 234.575,393.436 234.619,393.757 234.298 C 393.998 234.057,394.127 233.657,394.044 233.409 C 393.961 233.160,393.764 233.086,393.607 233.243 M137.671 236.035 C 136.618 237.269,135.961 238.152,136.212 237.999 C 136.761 237.661,140.034 233.792,139.770 233.792 C 139.668 233.792,138.723 234.801,137.671 236.035 M202.136 235.069 L 200.982 236.346 202.259 235.192 C 202.962 234.557,203.536 233.982,203.536 233.915 C 203.536 233.611,203.212 233.878,202.136 235.069 M7.079 234.807 C 7.082 235.221,7.264 235.825,7.484 236.149 C 7.775 236.580,7.811 236.421,7.619 235.560 C 7.296 234.115,7.071 233.802,7.079 234.807 M392.927 235.560 C 392.927 235.884,393.104 236.149,393.320 236.149 C 393.536 236.149,393.713 235.884,393.713 235.560 C 393.713 235.236,393.536 234.971,393.320 234.971 C 393.104 234.971,392.927 235.236,392.927 235.560 M199.239 238.280 L 197.888 239.882 199.416 238.422 C 200.256 237.619,200.863 236.898,200.766 236.820 C 200.669 236.742,199.982 237.399,199.239 238.280 M218.246 240.177 L 217.092 241.454 218.369 240.300 C 219.072 239.665,219.646 239.090,219.646 239.023 C 219.646 238.719,219.322 238.986,218.246 240.177 M391.794 240.117 C 391.266 241.631,391.246 242.043,391.697 242.043 C 392.031 242.043,392.645 239.272,392.371 238.999 C 392.295 238.922,392.035 239.426,391.794 240.117 M7.859 239.882 C 7.859 240.206,8.035 240.472,8.251 240.472 C 8.468 240.472,8.644 240.206,8.644 239.882 C 8.644 239.558,8.468 239.293,8.251 239.293 C 8.035 239.293,7.859 239.558,7.859 239.882 M269.548 239.809 C 269.548 239.876,270.123 240.451,270.825 241.086 L 272.102 242.240 270.948 240.963 C 269.872 239.772,269.548 239.505,269.548 239.809 M214.502 244.499 C 213.123 246.066,212.306 247.101,212.687 246.800 C 213.514 246.146,217.444 241.650,217.188 241.650 C 217.090 241.650,215.882 242.932,214.502 244.499 M193.320 245.187 C 191.979 246.699,190.970 247.937,191.078 247.937 C 191.186 247.937,192.372 246.699,193.713 245.187 C 195.054 243.674,196.063 242.436,195.955 242.436 C 195.847 242.436,194.661 243.674,193.320 245.187 M271.906 242.559 C 271.906 242.627,272.480 243.201,273.183 243.836 L 274.460 244.990 273.306 243.713 C 272.230 242.523,271.906 242.256,271.906 242.559 M129.838 245.285 L 128.684 246.562 129.961 245.408 C 131.151 244.332,131.418 244.008,131.115 244.008 C 131.047 244.008,130.472 244.583,129.838 245.285 M9.201 245.187 C 9.321 245.727,9.422 246.567,9.425 247.053 C 9.428 247.539,9.603 247.937,9.813 247.937 C 10.246 247.937,9.917 245.709,9.349 244.794 C 9.086 244.369,9.044 244.480,9.201 245.187 M390.222 245.618 C 389.695 247.131,389.694 247.151,390.128 247.151 C 390.479 247.151,391.093 244.793,390.814 244.514 C 390.730 244.430,390.463 244.927,390.222 245.618 M279.749 251.811 C 281.989 254.453,284.012 256.732,284.244 256.876 C 284.477 257.019,282.836 254.976,280.599 252.336 C 278.361 249.695,276.339 247.416,276.104 247.271 C 275.869 247.126,277.510 249.169,279.749 251.811 M189.563 249.607 L 188.409 250.884 189.686 249.730 C 190.876 248.654,191.143 248.330,190.840 248.330 C 190.772 248.330,190.197 248.905,189.563 249.607 M388.644 250.923 C 388.367 251.691,388.227 252.405,388.333 252.512 C 388.440 252.618,388.739 252.062,388.998 251.277 C 389.612 249.416,389.302 249.106,388.644 250.923 M383.934 251.910 C 383.692 252.604,383.562 253.241,383.646 253.325 C 383.730 253.409,383.997 252.910,384.239 252.216 C 384.481 251.521,384.611 250.884,384.527 250.800 C 384.443 250.716,384.176 251.216,383.934 251.910 M15.379 252.259 C 15.379 252.583,15.531 253.202,15.717 253.635 C 15.930 254.130,16.055 254.203,16.055 253.831 C 16.055 253.507,15.903 252.888,15.717 252.456 C 15.504 251.960,15.379 251.888,15.379 252.259 M121.611 254.756 C 120.314 256.281,119.519 257.371,119.843 257.177 C 120.167 256.984,120.694 256.462,121.014 256.016 C 121.334 255.571,122.198 254.539,122.935 253.722 C 123.672 252.906,124.206 252.181,124.122 252.111 C 124.038 252.040,122.908 253.231,121.611 254.756 M214.291 255.517 C 215.344 256.751,216.289 257.760,216.391 257.760 C 216.654 257.760,213.382 253.891,212.833 253.554 C 212.582 253.400,213.239 254.283,214.291 255.517 M386.902 255.861 C 386.312 257.364,386.297 258.235,386.871 257.660 C 387.142 257.390,387.829 254.496,387.662 254.329 C 387.600 254.267,387.258 254.956,386.902 255.861 M181.532 258.939 C 180.191 260.452,179.182 261.690,179.290 261.690 C 179.398 261.690,180.584 260.452,181.925 258.939 C 183.267 257.426,184.275 256.189,184.167 256.189 C 184.059 256.189,182.874 257.426,181.532 258.939 M286.197 259.446 C 287.250 260.680,288.195 261.690,288.296 261.690 C 288.560 261.690,285.287 257.820,284.738 257.483 C 284.488 257.329,285.144 258.212,286.197 259.446 M12.712 258.677 C 12.852 259.072,12.967 259.647,12.967 259.954 C 12.967 260.260,13.155 260.511,13.386 260.511 C 13.868 260.511,13.493 258.957,12.865 258.350 C 12.587 258.082,12.539 258.186,12.712 258.677 M380.810 260.331 C 380.152 261.776,380.278 262.084,380.990 260.771 C 381.322 260.157,381.520 259.582,381.431 259.492 C 381.341 259.402,381.062 259.780,380.810 260.331 M385.114 260.549 C 384.587 262.062,384.586 262.083,385.020 262.083 C 385.371 262.083,385.985 259.724,385.706 259.446 C 385.622 259.361,385.355 259.858,385.114 260.549 M116.285 261.198 L 114.931 262.672 116.405 261.318 C 117.776 260.057,118.059 259.725,117.759 259.725 C 117.693 259.725,117.030 260.388,116.285 261.198 M218.861 261.027 C 218.861 261.094,219.435 261.669,220.138 262.304 L 221.415 263.458 220.260 262.181 C 219.185 260.990,218.861 260.723,218.861 261.027 M14.301 263.270 C 14.400 263.805,14.493 264.376,14.509 264.538 C 14.525 264.700,14.727 264.833,14.958 264.833 C 15.210 264.833,15.271 264.480,15.110 263.949 C 14.712 262.632,14.088 262.108,14.301 263.270 M290.347 264.342 C 291.294 265.476,292.144 266.405,292.236 266.405 C 292.503 266.405,290.083 263.440,289.318 262.831 C 288.938 262.527,289.401 263.207,290.347 264.342 M382.990 266.012 C 382.870 266.473,382.978 266.798,383.253 266.798 C 383.511 266.798,383.722 266.444,383.722 266.012 C 383.722 265.580,383.603 265.226,383.459 265.226 C 383.314 265.226,383.103 265.580,382.990 266.012 M111.370 266.896 L 110.216 268.173 111.493 267.019 C 112.683 265.943,112.951 265.619,112.647 265.619 C 112.580 265.619,112.005 266.194,111.370 266.896 M223.183 266.135 C 223.183 266.202,223.757 266.777,224.460 267.412 L 225.737 268.566 224.583 267.289 C 223.507 266.098,223.183 265.831,223.183 266.135 M377.870 267.405 C 376.947 269.341,377.077 269.670,378.042 267.841 C 378.480 267.010,378.769 266.261,378.684 266.176 C 378.599 266.091,378.233 266.644,377.870 267.405 M293.382 267.976 C 293.960 268.625,294.497 269.155,294.576 269.155 C 294.655 269.155,294.327 268.625,293.847 267.976 C 293.368 267.328,292.831 266.798,292.654 266.798 C 292.477 266.798,292.804 267.328,293.382 267.976 M16.016 268.185 C 16.118 268.719,16.341 269.155,16.512 269.155 C 16.876 269.155,16.542 267.654,16.119 267.393 C 15.961 267.295,15.914 267.651,16.016 268.185 M173.453 268.468 L 172.299 269.745 173.576 268.591 C 174.766 267.515,175.033 267.191,174.730 267.191 C 174.662 267.191,174.087 267.765,173.453 268.468 M381.304 269.780 C 380.740 271.054,380.113 272.407,379.910 272.787 C 379.677 273.222,379.679 273.477,379.916 273.477 C 380.123 273.477,380.497 272.859,380.747 272.102 C 380.996 271.346,381.320 270.727,381.467 270.727 C 381.781 270.727,382.727 267.862,382.491 267.625 C 382.401 267.536,381.867 268.505,381.304 269.780 M109.013 269.646 L 107.859 270.923 109.136 269.769 C 110.326 268.694,110.593 268.369,110.290 268.369 C 110.222 268.369,109.647 268.944,109.013 269.646 M21.246 269.745 C 21.246 269.961,21.499 270.580,21.807 271.120 C 22.116 271.660,22.369 271.925,22.369 271.709 C 22.369 271.493,22.116 270.874,21.807 270.334 C 21.499 269.794,21.246 269.528,21.246 269.745 M295.874 270.923 C 296.607 271.680,297.296 272.299,297.404 272.299 C 297.512 272.299,297.000 271.680,296.267 270.923 C 295.534 270.167,294.846 269.548,294.738 269.548 C 294.630 269.548,295.141 270.167,295.874 270.923 M170.902 271.415 L 169.548 272.888 171.022 271.534 C 172.393 270.274,172.676 269.941,172.376 269.941 C 172.310 269.941,171.647 270.604,170.902 271.415 M17.135 271.740 C 16.981 272.142,16.979 272.347,17.131 272.195 C 17.283 272.042,17.640 272.225,17.925 272.599 C 18.607 273.498,18.623 272.661,17.941 271.729 C 17.432 271.033,17.406 271.033,17.135 271.740 M106.655 272.397 L 105.501 273.674 106.778 272.520 C 107.968 271.444,108.236 271.120,107.932 271.120 C 107.864 271.120,107.290 271.694,106.655 272.397 M229.270 273.183 C 230.326 274.425,231.261 275.442,231.346 275.442 C 231.614 275.442,229.204 272.530,228.256 271.709 C 227.757 271.277,228.213 271.940,229.270 273.183 M374.636 274.304 C 373.863 275.838,373.295 277.158,373.373 277.237 C 373.451 277.315,374.168 276.059,374.967 274.446 C 375.765 272.833,376.333 271.513,376.230 271.513 C 376.126 271.513,375.409 272.769,374.636 274.304 M104.105 275.344 L 102.750 276.817 104.224 275.463 C 105.595 274.203,105.878 273.870,105.578 273.870 C 105.512 273.870,104.849 274.533,104.105 275.344 M378.663 275.417 C 377.924 276.667,377.846 277.014,378.303 277.014 C 378.609 277.014,379.655 274.612,379.442 274.399 C 379.380 274.338,379.030 274.796,378.663 275.417 M19.074 275.639 C 19.226 276.287,19.603 277.083,19.910 277.407 C 20.339 277.859,20.318 277.630,19.820 276.424 C 18.994 274.426,18.720 274.137,19.074 275.639 M300.984 277.016 C 302.108 278.313,303.231 279.499,303.479 279.650 C 303.726 279.801,302.891 278.739,301.622 277.290 C 300.353 275.842,299.230 274.656,299.127 274.656 C 299.024 274.656,299.860 275.718,300.984 277.016 M231.434 275.958 C 231.434 276.026,232.009 276.600,232.711 277.235 L 233.988 278.389 232.834 277.112 C 231.758 275.922,231.434 275.654,231.434 275.958 M164.601 279.077 C 163.221 280.643,162.404 281.679,162.785 281.378 C 163.612 280.724,167.542 276.228,167.287 276.228 C 167.189 276.228,165.980 277.510,164.601 279.077 M20.632 279.175 C 20.787 279.607,21.003 280.270,21.112 280.648 C 21.221 281.027,21.466 281.336,21.657 281.336 C 22.201 281.336,22.066 280.843,21.174 279.568 C 20.716 278.912,20.475 278.738,20.632 279.175 M98.569 281.827 C 95.990 284.754,94.328 286.849,95.530 285.658 C 96.793 284.406,101.461 278.978,101.275 278.978 C 101.167 278.978,99.949 280.260,98.569 281.827 M376.716 279.640 C 376.617 279.816,376.052 280.801,375.461 281.827 C 374.869 282.854,374.561 283.694,374.777 283.694 C 374.992 283.694,375.354 283.163,375.580 282.515 C 375.806 281.866,376.156 281.336,376.358 281.336 C 376.560 281.336,376.828 280.946,376.952 280.469 C 377.185 279.581,377.038 279.065,376.716 279.640 M304.380 281.041 C 305.495 282.297,309.779 287.372,312.707 290.905 C 314.076 292.557,315.286 293.910,315.395 293.910 C 315.505 293.910,314.826 293.009,313.887 291.907 C 312.949 290.806,311.739 289.336,311.198 288.640 C 309.397 286.321,304.030 280.157,303.811 280.157 C 303.693 280.157,303.949 280.555,304.380 281.041 M235.363 280.673 C 235.363 280.741,235.938 281.315,236.640 281.950 L 237.917 283.104 236.763 281.827 C 235.688 280.637,235.363 280.369,235.363 280.673 M370.138 282.908 C 369.697 283.772,369.424 284.479,369.532 284.479 C 369.640 284.479,370.089 283.772,370.530 282.908 C 370.971 282.043,371.244 281.336,371.136 281.336 C 371.028 281.336,370.579 282.043,370.138 282.908 M22.305 283.202 C 22.680 284.013,23.120 284.735,23.283 284.808 C 23.447 284.880,23.493 285.081,23.386 285.254 C 23.279 285.427,23.472 285.802,23.815 286.087 C 24.473 286.633,24.214 285.852,22.727 282.812 C 21.921 281.164,21.529 281.525,22.305 283.202 M239.686 285.658 C 240.809 286.955,241.816 288.016,241.925 288.016 C 242.033 288.016,241.202 286.955,240.079 285.658 C 238.955 284.361,237.948 283.301,237.840 283.301 C 237.732 283.301,238.562 284.361,239.686 285.658 M373.306 285.609 C 372.777 286.647,372.669 287.138,373.000 287.011 C 373.519 286.812,374.579 284.468,374.284 284.173 C 374.195 284.083,373.755 284.730,373.306 285.609 M159.137 285.460 C 158.630 286.000,158.290 286.507,158.381 286.587 C 158.472 286.668,158.957 286.226,159.460 285.606 C 160.585 284.219,160.387 284.130,159.137 285.460 M368.589 285.774 C 368.294 286.251,367.794 287.038,367.478 287.525 C 367.162 288.011,366.989 288.409,367.093 288.409 C 367.370 288.409,369.436 285.219,369.268 285.051 C 369.190 284.972,368.884 285.298,368.589 285.774 M93.684 287.721 C 91.456 290.163,90.630 291.159,90.835 291.159 C 90.949 291.159,91.964 290.098,93.092 288.802 C 95.248 286.323,95.681 285.533,93.684 287.721 M24.361 287.600 C 24.361 287.803,24.541 288.080,24.761 288.216 C 24.980 288.352,25.042 288.655,24.897 288.889 C 24.748 289.130,24.814 289.204,25.048 289.059 C 25.438 288.818,26.519 290.958,26.373 291.680 C 26.336 291.858,26.480 291.896,26.692 291.765 C 27.096 291.516,26.974 291.120,25.749 288.703 C 25.046 287.318,24.361 286.773,24.361 287.600 M156.557 288.507 L 155.403 289.784 156.680 288.630 C 157.870 287.554,158.137 287.230,157.834 287.230 C 157.766 287.230,157.192 287.805,156.557 288.507 M371.532 288.765 C 371.163 289.477,371.074 289.980,371.316 289.980 C 371.755 289.980,372.640 288.030,372.339 287.728 C 372.240 287.630,371.877 288.097,371.532 288.765 M153.210 292.436 C 152.047 293.787,151.407 294.645,151.788 294.343 C 152.588 293.708,155.758 289.980,155.498 289.980 C 155.402 289.980,154.373 291.085,153.210 292.436 M370.061 291.257 C 368.331 293.987,367.751 295.088,368.045 295.088 C 368.226 295.088,368.600 294.578,368.876 293.955 C 369.152 293.331,369.725 292.420,370.150 291.930 C 370.855 291.118,371.152 290.373,370.772 290.373 C 370.689 290.373,370.369 290.771,370.061 291.257 M89.228 292.881 L 88.280 294.106 89.404 293.037 C 90.022 292.450,90.449 291.898,90.352 291.812 C 90.256 291.726,89.750 292.207,89.228 292.881 M27.549 293.026 C 27.994 294.359,28.291 294.664,28.291 293.788 C 28.291 293.505,28.028 292.931,27.707 292.511 C 27.172 291.813,27.159 291.857,27.549 293.026 M32.613 293.517 C 33.054 294.381,33.503 295.088,33.611 295.088 C 33.719 295.088,33.447 294.381,33.006 293.517 C 32.565 292.652,32.116 291.945,32.008 291.945 C 31.900 291.945,32.172 292.652,32.613 293.517 M364.267 292.847 C 363.972 293.323,363.472 294.111,363.156 294.597 C 362.840 295.083,362.667 295.481,362.771 295.481 C 363.048 295.481,365.114 292.291,364.946 292.123 C 364.867 292.045,364.562 292.371,364.267 292.847 M247.835 295.285 C 248.281 295.933,249.145 296.906,249.754 297.446 C 250.490 298.098,250.352 297.835,249.344 296.660 C 247.285 294.261,246.871 293.884,247.835 295.285 M316.565 295.481 C 317.143 296.130,317.680 296.660,317.758 296.660 C 317.837 296.660,317.510 296.130,317.030 295.481 C 316.551 294.833,316.014 294.303,315.837 294.303 C 315.659 294.303,315.987 294.833,316.565 295.481 M28.291 294.928 C 28.291 295.056,28.644 295.610,29.077 296.160 C 29.509 296.709,29.862 297.400,29.862 297.695 C 29.862 297.990,30.048 298.232,30.276 298.232 C 30.503 298.232,30.874 298.762,31.100 299.411 C 31.326 300.059,31.649 300.589,31.818 300.589 C 31.987 300.589,32.356 301.164,32.639 301.866 C 32.922 302.569,33.655 303.668,34.268 304.308 C 34.881 304.949,35.308 305.669,35.216 305.908 C 35.124 306.148,35.385 306.553,35.796 306.810 C 36.206 307.066,36.542 307.521,36.542 307.820 C 36.542 308.119,36.807 308.466,37.132 308.590 C 37.456 308.714,37.721 309.048,37.721 309.331 C 37.721 309.614,38.053 310.129,38.459 310.477 C 38.865 310.825,39.283 311.350,39.388 311.645 C 39.492 311.940,39.677 312.091,39.799 311.981 C 39.983 311.815,37.604 308.295,36.160 306.598 C 35.938 306.337,35.756 306.032,35.756 305.920 C 35.756 305.808,35.005 304.573,34.086 303.175 C 33.168 301.778,31.886 299.717,31.238 298.596 C 30.589 297.475,29.764 296.242,29.404 295.856 C 29.044 295.470,28.852 295.051,28.978 294.925 C 29.104 294.799,29.001 294.695,28.749 294.695 C 28.497 294.695,28.291 294.800,28.291 294.928 M149.684 296.562 L 148.330 298.035 149.804 296.681 C 151.175 295.421,151.458 295.088,151.158 295.088 C 151.092 295.088,150.429 295.751,149.684 296.562 M34.616 296.833 C 35.070 297.602,35.517 298.232,35.609 298.232 C 35.888 298.232,34.613 295.942,34.187 295.679 C 33.969 295.544,34.162 296.064,34.616 296.833 M366.086 297.647 C 365.263 298.833,364.765 299.804,364.979 299.804 C 365.194 299.804,365.476 299.466,365.607 299.054 C 365.738 298.642,366.104 298.205,366.420 298.084 C 366.736 297.963,366.994 297.651,366.994 297.391 C 366.994 297.131,367.287 296.595,367.644 296.200 C 368.002 295.805,368.135 295.483,367.939 295.486 C 367.744 295.489,366.910 296.461,366.086 297.647 M358.784 301.014 C 357.883 302.327,357.318 303.295,357.530 303.164 C 357.742 303.033,358.418 302.180,359.033 301.267 C 360.557 299.004,360.780 298.625,360.589 298.625 C 360.498 298.625,359.686 299.700,358.784 301.014 M362.506 302.769 C 361.517 304.184,360.707 305.422,360.707 305.520 C 360.707 305.618,360.439 306.007,360.111 306.385 C 358.282 308.494,357.172 309.967,357.184 310.268 C 357.191 310.456,357.523 310.219,357.921 309.742 C 358.319 309.265,358.784 308.999,358.953 309.152 C 359.123 309.305,359.141 309.220,358.994 308.963 C 358.847 308.706,358.965 308.353,359.256 308.177 C 359.548 308.002,360.126 307.240,360.542 306.483 C 361.200 305.285,363.416 302.157,364.648 300.688 C 364.893 300.397,364.906 300.196,364.682 300.196 C 364.474 300.196,363.495 301.354,362.506 302.769 M254.226 302.949 C 255.350 304.246,256.472 305.432,256.720 305.583 C 256.968 305.734,256.133 304.672,254.864 303.224 C 253.595 301.775,252.472 300.589,252.369 300.589 C 252.266 300.589,253.101 301.651,254.226 302.949 M143.837 303.438 C 142.878 304.573,142.586 305.059,143.188 304.519 C 144.201 303.608,145.989 301.375,145.705 301.375 C 145.636 301.376,144.795 302.304,143.837 303.438 M140.647 307.171 L 139.293 308.644 140.766 307.290 C 142.138 306.030,142.420 305.697,142.120 305.697 C 142.055 305.697,141.392 306.361,140.647 307.171 M315.900 308.350 L 313.752 310.609 316.012 308.461 C 318.111 306.466,318.451 306.090,318.159 306.090 C 318.098 306.090,317.081 307.107,315.900 308.350 M41.649 307.564 C 42.163 308.266,42.645 308.841,42.720 308.841 C 43.019 308.841,42.044 307.367,41.400 306.844 C 40.976 306.499,41.071 306.774,41.649 307.564 M353.066 308.644 C 352.269 309.617,351.772 310.413,351.961 310.413 C 352.150 310.413,352.865 309.617,353.551 308.644 C 354.236 307.672,354.734 306.876,354.656 306.876 C 354.579 306.876,353.863 307.672,353.066 308.644 M92.974 307.760 C 93.094 308.030,93.840 308.772,94.631 309.408 L 96.071 310.564 94.518 308.917 C 92.859 307.158,92.630 306.986,92.974 307.760 M349.669 312.858 C 346.861 316.185,345.970 317.420,347.746 315.521 C 349.628 313.508,351.819 310.806,351.568 310.806 C 351.476 310.806,350.621 311.729,349.669 312.858 M355.403 312.268 C 354.754 313.072,353.881 314.159,353.463 314.683 C 352.979 315.289,352.897 315.570,353.238 315.456 C 353.533 315.358,353.964 314.951,354.196 314.553 C 354.427 314.154,355.192 313.221,355.894 312.480 C 357.214 311.085,357.378 310.805,356.876 310.806 C 356.714 310.806,356.051 311.464,355.403 312.268 M99.976 313.650 C 101.070 314.674,102.111 315.514,102.289 315.516 C 102.468 315.519,102.026 315.046,101.307 314.466 C 100.588 313.887,99.547 313.047,98.994 312.600 C 98.440 312.153,98.882 312.626,99.976 313.650 M310.498 313.065 C 309.558 313.983,309.543 314.028,310.394 313.365 C 312.071 312.059,312.151 311.984,311.873 311.984 C 311.725 311.984,311.106 312.471,310.498 313.065 M39.686 312.514 C 39.686 312.589,40.039 313.058,40.472 313.556 C 41.324 314.539,41.498 314.347,40.851 313.137 C 40.510 312.500,39.686 312.059,39.686 312.514 M264.441 315.078 C 265.629 316.455,267.331 318.489,268.224 319.597 C 269.116 320.705,270.768 322.583,271.895 323.772 C 273.381 325.339,273.205 325.057,271.255 322.747 C 269.776 320.995,267.427 318.204,266.036 316.545 C 264.645 314.887,263.231 313.315,262.894 313.052 C 262.556 312.789,263.253 313.701,264.441 315.078 M133.374 315.619 L 132.220 316.896 133.497 315.742 C 134.687 314.666,134.955 314.342,134.651 314.342 C 134.583 314.342,134.009 314.917,133.374 315.619 M306.287 316.566 C 304.097 318.603,304.072 318.645,305.934 317.152 C 307.758 315.689,309.159 314.319,308.791 314.357 C 308.710 314.366,307.583 315.360,306.287 316.566 M42.408 315.770 C 42.856 316.340,43.222 317.004,43.222 317.247 C 43.222 317.490,43.576 317.910,44.008 318.180 C 44.440 318.450,44.794 318.573,44.794 318.454 C 44.794 318.051,42.242 314.766,41.916 314.750 C 41.739 314.742,41.960 315.201,42.408 315.770 M349.928 318.959 C 348.463 320.634,345.857 323.480,344.137 325.285 C 342.416 327.090,341.101 328.658,341.213 328.770 C 341.433 328.991,342.633 327.920,342.633 327.503 C 342.633 327.363,343.924 325.978,345.501 324.426 C 347.079 322.874,348.488 321.296,348.632 320.920 C 348.777 320.543,349.166 320.236,349.497 320.236 C 349.827 320.236,350.098 319.983,350.098 319.675 C 350.098 319.366,350.496 318.785,350.982 318.383 C 351.775 317.728,353.054 315.914,352.724 315.914 C 352.651 315.914,351.393 317.284,349.928 318.959 M130.395 319.155 C 128.104 321.897,127.573 322.593,127.771 322.593 C 127.863 322.593,128.956 321.356,130.200 319.843 C 131.445 318.330,132.386 317.092,132.291 317.092 C 132.196 317.092,131.343 318.021,130.395 319.155 M345.371 317.714 C 345.365 317.913,344.057 319.445,342.465 321.120 C 340.873 322.795,339.684 324.165,339.824 324.165 C 340.288 324.164,345.870 317.842,345.624 317.596 C 345.492 317.463,345.378 317.516,345.371 317.714 M302.524 319.713 L 301.572 320.762 302.640 320.008 C 303.227 319.593,303.714 319.121,303.720 318.959 C 303.741 318.475,303.525 318.611,302.524 319.713 M44.794 319.254 C 44.794 319.363,45.501 320.091,46.365 320.872 C 47.230 321.653,47.937 322.466,47.937 322.678 C 47.937 322.890,48.821 323.930,49.902 324.988 C 50.982 326.046,51.867 326.780,51.867 326.619 C 51.867 326.458,51.338 325.796,50.691 325.147 C 50.045 324.499,48.615 322.863,47.514 321.513 C 45.775 319.380,44.794 318.565,44.794 319.254 M107.662 319.962 C 107.662 320.070,108.723 321.077,110.020 322.200 C 111.316 323.324,112.377 324.154,112.377 324.046 C 112.377 323.938,111.316 322.931,110.020 321.807 C 108.723 320.684,107.662 319.853,107.662 319.962 M298.625 323.044 C 296.603 324.939,296.480 325.109,298.035 323.863 C 299.882 322.382,301.692 320.616,301.338 320.639 C 301.250 320.645,300.029 321.727,298.625 323.044 M55.409 324.849 C 56.810 326.414,58.115 327.695,58.309 327.698 C 58.502 327.700,58.237 327.300,57.719 326.809 C 57.202 326.318,56.240 325.302,55.583 324.550 C 54.926 323.798,54.045 322.917,53.625 322.593 C 53.205 322.269,54.008 323.284,55.409 324.849 M125.522 324.656 L 123.969 326.326 125.639 324.773 C 127.192 323.328,127.489 322.986,127.192 322.986 C 127.128 322.986,126.376 323.738,125.522 324.656 M336.346 327.442 C 334.725 329.015,333.138 330.645,332.819 331.064 C 332.501 331.484,333.871 330.243,335.865 328.307 C 339.147 325.119,339.701 324.532,339.391 324.570 C 339.337 324.576,337.967 325.869,336.346 327.442 M52.272 327.535 C 52.288 327.969,53.356 329.241,54.392 330.059 C 55.086 330.607,55.109 330.593,54.717 329.862 C 54.194 328.886,52.255 327.040,52.272 327.535 M58.546 328.137 C 58.546 328.236,60.347 330.079,62.549 332.233 C 64.750 334.387,66.206 335.707,65.783 335.167 C 64.902 334.040,58.546 327.866,58.546 328.137 M277.099 329.868 C 277.902 330.708,278.623 331.315,278.701 331.218 C 278.779 331.121,278.121 330.434,277.240 329.691 L 275.639 328.340 277.099 329.868 M339.194 330.421 C 337.773 331.613,337.673 331.846,338.458 332.147 C 338.755 332.261,338.976 332.147,338.949 331.894 C 338.922 331.641,339.077 331.366,339.293 331.283 C 339.761 331.103,340.808 329.672,340.610 329.482 C 340.534 329.409,339.897 329.832,339.194 330.421 M55.903 331.631 C 56.452 332.063,57.005 332.417,57.131 332.417 C 57.257 332.417,57.057 332.063,56.687 331.631 C 56.317 331.198,55.764 330.845,55.459 330.845 C 55.129 330.845,55.309 331.163,55.903 331.631 M330.059 333.399 C 329.105 334.371,328.412 335.167,328.520 335.167 C 328.628 335.167,329.497 334.371,330.452 333.399 C 331.406 332.426,332.099 331.631,331.991 331.631 C 331.883 331.631,331.013 332.426,330.059 333.399 M335.689 333.694 C 335.042 334.396,333.479 335.855,332.217 336.935 C 328.884 339.787,328.247 340.668,329.516 340.668 C 329.624 340.668,329.627 340.529,329.522 340.360 C 329.417 340.190,329.759 339.704,330.282 339.279 C 330.805 338.854,332.483 337.313,334.011 335.855 C 335.539 334.396,336.954 333.202,337.157 333.202 C 337.359 333.202,337.525 333.026,337.525 332.809 C 337.525 332.091,336.878 332.402,335.689 333.694 M283.006 333.080 C 283.384 333.179,284.003 333.179,284.381 333.080 C 284.759 332.981,284.450 332.901,283.694 332.901 C 282.937 332.901,282.628 332.981,283.006 333.080 M326.493 336.640 L 325.540 337.721 326.719 336.739 C 327.367 336.198,327.972 335.712,328.062 335.658 C 328.152 335.604,328.050 335.560,327.835 335.560 C 327.621 335.560,327.017 336.046,326.493 336.640 M60.277 336.406 C 60.114 336.670,60.168 336.754,60.406 336.607 C 60.631 336.468,61.033 336.618,61.300 336.939 C 61.567 337.261,61.941 337.525,62.131 337.525 C 62.320 337.525,62.122 337.171,61.690 336.739 C 60.776 335.825,60.654 335.797,60.277 336.406 M68.566 337.917 C 69.410 338.782,70.189 339.489,70.297 339.489 C 70.405 339.489,69.803 338.782,68.959 337.917 C 68.115 337.053,67.336 336.346,67.228 336.346 C 67.119 336.346,67.722 337.053,68.566 337.917 M62.918 338.605 C 63.215 338.983,63.599 339.397,63.772 339.525 C 65.159 340.547,66.723 341.908,68.136 343.320 C 69.055 344.239,70.024 344.990,70.290 344.990 C 70.565 344.990,70.652 345.201,70.491 345.481 C 70.335 345.751,70.335 345.859,70.491 345.719 C 70.647 345.580,71.198 345.890,71.715 346.407 C 72.233 346.924,72.885 347.340,73.165 347.330 C 73.445 347.320,72.886 346.657,71.923 345.857 C 70.961 345.056,68.551 342.942,66.569 341.159 C 63.151 338.084,61.730 337.090,62.918 338.605 M70.844 339.748 C 70.997 339.999,72.042 340.971,73.166 341.909 C 74.290 342.847,75.084 343.410,74.932 343.159 C 74.779 342.909,73.734 341.936,72.610 340.998 C 71.486 340.060,70.692 339.498,70.844 339.748 M320.749 341.356 C 319.895 342.166,319.556 342.564,319.996 342.240 C 321.280 341.291,322.802 339.882,322.542 339.882 C 322.410 339.882,321.603 340.545,320.749 341.356 M327.316 341.249 L 326.401 342.223 327.379 341.762 C 327.916 341.508,328.356 341.070,328.356 340.788 C 328.356 340.125,328.384 340.113,327.316 341.249 M325.150 343.023 C 324.757 343.457,324.619 343.811,324.842 343.811 C 325.336 343.811,326.316 342.688,326.052 342.424 C 325.948 342.320,325.542 342.590,325.150 343.023 M315.914 345.049 C 315.157 345.713,314.894 346.075,315.329 345.856 C 316.046 345.493,317.826 343.789,317.448 343.827 C 317.360 343.836,316.670 344.386,315.914 345.049 M321.611 345.802 C 318.113 348.523,317.485 349.073,317.485 349.420 C 317.485 349.608,317.766 349.481,318.109 349.138 C 318.452 348.795,319.380 348.032,320.172 347.442 C 320.963 346.852,321.741 346.192,321.900 345.975 C 322.058 345.757,322.191 345.719,322.194 345.890 C 322.198 346.060,322.585 345.841,323.056 345.403 C 324.594 343.970,323.622 344.239,321.611 345.802 M77.800 345.487 C 77.800 345.574,78.551 346.242,79.470 346.972 C 80.388 347.702,80.890 347.988,80.585 347.608 C 80.011 346.893,77.800 345.209,77.800 345.487 M74.536 348.690 C 75.142 349.211,75.714 349.563,75.806 349.471 C 76.048 349.230,74.377 347.741,73.865 347.741 C 73.628 347.741,73.930 348.168,74.536 348.690 M76.228 349.696 C 76.228 349.917,76.387 350.098,76.582 350.098 C 76.776 350.098,77.563 350.726,78.330 351.493 C 79.097 352.260,79.866 352.897,80.039 352.908 C 80.212 352.918,80.295 353.131,80.223 353.379 C 80.151 353.628,80.218 353.705,80.373 353.550 C 80.527 353.396,81.028 353.457,81.486 353.685 C 81.944 353.914,81.699 353.554,80.943 352.884 C 80.187 352.214,79.258 351.567,78.880 351.445 C 78.502 351.324,78.193 351.079,78.193 350.903 C 78.193 350.726,77.750 350.292,77.210 349.938 C 76.670 349.584,76.228 349.475,76.228 349.696 M308.297 350.489 C 306.430 351.902,306.036 352.306,307.073 351.743 C 307.973 351.254,310.315 349.342,310.020 349.337 C 309.912 349.336,309.137 349.854,308.297 350.489 M84.086 350.241 C 84.086 350.349,84.617 350.815,85.265 351.277 C 85.914 351.739,86.444 352.028,86.444 351.920 C 86.444 351.812,85.914 351.346,85.265 350.884 C 84.617 350.422,84.086 350.133,84.086 350.241 M313.183 352.093 C 310.530 354.034,310.280 354.295,311.816 353.514 C 312.481 353.177,313.254 352.624,313.534 352.285 C 313.815 351.947,314.270 351.670,314.544 351.670 C 314.819 351.670,315.145 351.405,315.270 351.081 C 315.560 350.325,315.676 350.268,313.183 352.093 M302.849 354.036 C 301.822 354.680,300.982 355.294,300.982 355.400 C 300.982 355.506,301.866 355.048,302.947 354.383 C 304.028 353.718,304.912 353.101,304.912 353.011 C 304.912 352.753,304.816 352.800,302.849 354.036 M82.588 354.443 C 82.678 354.713,83.149 355.082,83.635 355.262 C 84.710 355.659,84.416 355.017,83.233 354.384 C 82.610 354.051,82.462 354.065,82.588 354.443 M309.191 354.790 C 308.464 355.396,308.396 355.576,308.891 355.586 C 309.564 355.600,310.665 354.542,310.328 354.205 C 310.220 354.096,309.708 354.360,309.191 354.790 M84.872 356.017 C 84.872 356.226,85.491 356.693,86.248 357.054 C 87.004 357.414,87.623 357.832,87.623 357.982 C 87.623 358.132,88.153 358.474,88.802 358.743 C 89.450 359.011,89.980 359.445,89.980 359.707 C 89.980 359.969,90.201 360.192,90.472 360.202 C 90.742 360.212,91.316 360.358,91.749 360.527 C 92.923 360.984,92.488 360.649,88.507 358.028 C 86.508 356.713,84.872 355.807,84.872 356.017 M306.870 356.403 C 306.333 356.816,306.081 357.157,306.310 357.162 C 306.878 357.174,308.299 356.105,308.049 355.855 C 307.938 355.744,307.407 355.991,306.870 356.403 M297.183 357.491 C 294.999 358.898,294.483 359.513,296.464 358.347 C 298.782 356.984,299.633 356.382,299.203 356.410 C 298.993 356.424,298.084 356.910,297.183 357.491 M304.126 358.153 C 303.393 358.694,302.890 359.136,303.007 359.136 C 303.550 359.136,305.697 357.858,305.697 357.535 C 305.697 357.022,305.616 357.054,304.126 358.153 M96.464 358.512 C 97.112 359.069,97.805 359.525,98.003 359.527 C 98.429 359.529,98.424 359.525,96.660 358.386 L 95.285 357.499 96.464 358.512 M301.333 359.899 C 300.816 360.329,300.570 360.681,300.786 360.682 C 301.349 360.683,302.733 359.577,302.483 359.326 C 302.367 359.211,301.850 359.468,301.333 359.899 M92.994 361.329 C 93.112 361.635,93.445 361.886,93.736 361.886 C 94.026 361.886,94.405 362.111,94.578 362.385 C 94.891 362.884,97.049 363.986,97.273 363.762 C 97.337 363.697,96.353 362.998,95.085 362.208 C 93.818 361.418,92.877 361.023,92.994 361.329 M298.587 361.546 C 298.067 362.007,297.908 362.273,298.232 362.136 C 298.556 361.999,299.131 361.777,299.509 361.644 C 299.887 361.511,300.196 361.245,300.196 361.054 C 300.196 360.475,299.581 360.662,298.587 361.546 M296.169 362.916 C 295.575 363.228,295.088 363.541,295.088 363.612 C 295.088 363.898,297.081 363.338,297.295 362.992 C 297.689 362.353,297.291 362.326,296.169 362.916 M104.912 363.248 C 104.912 363.356,105.796 363.893,106.876 364.440 C 107.957 364.988,108.841 365.347,108.841 365.239 C 108.841 365.131,107.957 364.595,106.876 364.047 C 105.796 363.500,104.912 363.140,104.912 363.248 M284.774 364.270 C 283.964 364.698,283.301 365.136,283.301 365.243 C 283.301 365.418,286.404 363.968,286.804 363.606 C 287.256 363.197,286.076 363.583,284.774 364.270 M98.090 364.440 C 98.214 364.764,98.459 365.029,98.635 365.029 C 98.810 365.029,99.277 365.134,99.673 365.263 C 100.187 365.429,100.112 365.263,99.411 364.682 C 98.244 363.715,97.779 363.630,98.090 364.440 M289.671 366.308 C 287.231 367.605,285.326 368.758,285.437 368.869 C 285.548 368.980,285.901 368.853,286.221 368.588 C 286.541 368.322,286.977 368.213,287.189 368.344 C 287.402 368.476,287.896 368.248,288.287 367.839 C 288.678 367.429,290.099 366.585,291.446 365.964 C 292.792 365.342,293.980 364.612,294.086 364.342 C 294.191 364.072,294.239 363.873,294.192 363.899 C 294.145 363.926,292.110 365.010,289.671 366.308 M100.667 365.852 C 100.817 366.300,103.733 367.562,103.733 367.178 C 103.733 367.086,103.006 366.639,102.118 366.186 C 101.119 365.676,100.566 365.549,100.667 365.852 M111.984 366.794 C 111.984 367.063,114.390 368.256,114.570 368.076 C 114.655 367.991,114.108 367.627,113.355 367.267 C 112.601 366.908,111.984 366.695,111.984 366.794 M104.519 367.767 C 104.519 368.173,106.451 369.122,106.722 368.851 C 106.794 368.779,106.327 368.411,105.685 368.032 C 105.012 367.634,104.519 367.522,104.519 367.767 M282.711 369.878 C 281.631 370.369,280.305 370.970,279.764 371.213 L 278.782 371.656 279.834 371.683 C 280.413 371.697,281.127 371.469,281.421 371.176 C 281.714 370.882,282.611 370.405,283.413 370.114 C 284.216 369.824,284.872 369.445,284.872 369.273 C 284.872 368.873,285.008 368.835,282.711 369.878 M108.055 369.745 C 108.055 369.961,108.217 370.138,108.416 370.138 C 108.614 370.138,109.100 370.250,109.496 370.387 C 110.129 370.606,110.121 370.560,109.430 370.006 C 108.519 369.277,108.055 369.188,108.055 369.745 M270.554 370.739 C 269.573 371.481,269.937 371.477,271.370 370.729 C 271.989 370.407,272.230 370.147,271.906 370.152 C 271.582 370.158,270.973 370.422,270.554 370.739 M110.413 370.857 C 110.413 371.037,111.031 371.374,111.788 371.607 C 113.468 372.122,113.554 371.932,112.004 371.130 C 110.678 370.445,110.413 370.399,110.413 370.857 M122.593 371.643 C 122.917 371.843,123.625 372.125,124.165 372.270 C 124.848 372.452,124.968 372.422,124.558 372.168 C 124.234 371.968,123.527 371.686,122.986 371.542 C 122.304 371.359,122.184 371.390,122.593 371.643 M113.949 372.544 C 114.622 373.223,116.306 373.756,116.306 373.290 C 116.306 373.119,115.997 372.891,115.619 372.782 C 115.241 372.673,114.578 372.441,114.145 372.267 C 113.446 371.984,113.424 372.015,113.949 372.544 M275.639 373.114 C 274.558 373.644,274.000 373.986,274.398 373.874 C 274.796 373.762,275.590 373.553,276.162 373.409 C 276.734 373.266,277.438 372.913,277.726 372.625 C 278.476 371.874,277.882 372.014,275.639 373.114 M118.271 374.417 C 118.271 374.610,118.697 374.874,119.217 375.005 C 119.737 375.135,120.489 375.342,120.887 375.464 C 121.285 375.587,120.992 375.330,120.236 374.893 C 118.699 374.007,118.271 373.903,118.271 374.417 M271.552 374.678 C 270.816 374.997,270.295 375.338,270.393 375.435 C 270.668 375.711,273.477 374.762,273.477 374.394 C 273.477 373.947,273.112 374.000,271.552 374.678 M122.986 376.424 C 122.986 376.640,123.237 376.817,123.544 376.817 C 123.850 376.817,124.425 376.920,124.821 377.046 C 125.479 377.255,125.476 377.222,124.778 376.653 C 123.917 375.952,122.986 375.833,122.986 376.424 M251.473 377.407 C 250.717 377.698,250.363 377.936,250.688 377.936 C 251.012 377.936,251.896 377.698,252.652 377.407 C 253.409 377.115,253.762 376.877,253.438 376.877 C 253.114 376.877,252.230 377.115,251.473 377.407 M127.308 377.996 C 127.308 378.212,127.471 378.389,127.669 378.389 C 127.868 378.389,128.354 378.492,128.750 378.618 C 129.408 378.827,129.405 378.793,128.707 378.225 C 127.833 377.513,127.308 377.427,127.308 377.996 M262.156 378.264 C 261.224 378.594,260.518 378.921,260.588 378.990 C 260.826 379.228,264.047 378.227,264.047 377.915 C 264.047 377.743,264.003 377.617,263.949 377.634 C 263.895 377.651,263.088 377.935,262.156 378.264 M143.222 378.782 C 143.654 378.968,144.273 379.120,144.597 379.120 C 144.969 379.120,144.896 378.995,144.401 378.782 C 143.969 378.596,143.350 378.444,143.026 378.444 C 142.654 378.444,142.727 378.569,143.222 378.782 M257.228 379.816 C 256.178 380.138,255.383 380.455,255.459 380.521 C 255.738 380.759,260.118 379.783,260.118 379.483 C 260.118 379.056,259.449 379.133,257.228 379.816 M137.917 381.532 C 137.917 381.749,138.161 381.925,138.458 381.925 C 138.755 381.925,139.595 382.017,140.324 382.130 C 141.411 382.298,141.331 382.228,139.882 381.743 C 137.762 381.034,137.917 381.050,137.917 381.532 M251.473 381.755 L 250.098 382.311 251.473 382.077 C 252.230 381.948,253.017 381.684,253.222 381.491 C 253.748 380.995,253.117 381.091,251.473 381.755 M233.006 381.925 C 232.228 382.174,232.187 382.240,232.809 382.240 C 233.242 382.240,234.037 382.098,234.578 381.925 C 235.355 381.676,235.396 381.611,234.774 381.611 C 234.342 381.611,233.546 381.752,233.006 381.925 M143.242 383.052 C 143.447 383.240,144.234 383.493,144.990 383.614 L 146.365 383.835 145.187 383.291 C 143.846 382.672,142.667 382.527,143.242 383.052 M245.187 383.497 C 244.663 383.836,244.663 383.878,245.187 383.878 C 245.511 383.878,246.041 383.707,246.365 383.497 C 246.889 383.158,246.889 383.116,246.365 383.116 C 246.041 383.116,245.511 383.288,245.187 383.497 M150.098 384.595 C 150.098 384.796,151.100 385.162,152.325 385.407 C 155.262 385.997,156.332 385.921,153.831 385.300 C 152.750 385.032,151.469 384.681,150.982 384.521 C 150.491 384.359,150.098 384.392,150.098 384.595 M237.999 384.975 C 236.748 385.297,235.798 385.634,235.889 385.726 C 236.173 386.010,241.257 384.951,241.257 384.608 C 241.257 384.199,240.825 384.248,237.999 384.975 M176.130 384.947 C 176.508 385.046,177.127 385.046,177.505 384.947 C 177.883 384.848,177.574 384.767,176.817 384.767 C 176.061 384.767,175.751 384.848,176.130 384.947 M213.065 384.947 C 213.443 385.046,214.062 385.046,214.440 384.947 C 214.818 384.848,214.509 384.767,213.752 384.767 C 212.996 384.767,212.687 384.848,213.065 384.947 M181.441 385.354 C 182.147 385.441,183.208 385.439,183.799 385.350 C 184.389 385.260,183.811 385.188,182.515 385.191 C 181.218 385.193,180.735 385.266,181.441 385.354 M206.180 385.352 C 206.877 385.439,208.115 385.441,208.930 385.356 C 209.746 385.270,209.175 385.199,207.662 385.198 C 206.149 385.196,205.482 385.266,206.180 385.352 M191.257 385.755 C 193.472 385.825,197.097 385.825,199.312 385.755 C 201.528 385.685,199.715 385.627,195.285 385.627 C 190.855 385.627,189.042 385.685,191.257 385.755 M155.992 386.234 C 155.992 386.458,156.773 386.640,157.728 386.640 C 158.683 386.640,159.788 386.755,160.184 386.895 C 160.671 387.067,160.777 387.019,160.511 386.747 C 159.949 386.173,155.992 385.723,155.992 386.234 M233.792 386.248 C 233.792 386.464,234.057 386.640,234.381 386.640 C 234.705 386.640,234.971 386.464,234.971 386.248 C 234.971 386.031,234.705 385.855,234.381 385.855 C 234.057 385.855,233.792 386.031,233.792 386.248 M230.255 386.640 C 229.482 387.140,230.861 387.140,232.024 386.640 C 232.743 386.331,232.727 386.301,231.827 386.281 C 231.287 386.269,230.580 386.431,230.255 386.640 M161.886 387.033 C 162.210 387.243,162.829 387.405,163.261 387.393 L 164.047 387.371 163.261 387.033 C 162.087 386.529,161.105 386.529,161.886 387.033 M227.112 387.033 C 225.752 387.320,225.750 387.323,226.916 387.369 C 227.564 387.394,228.360 387.243,228.684 387.033 C 229.338 386.611,229.121 386.611,227.112 387.033 M165.619 387.819 C 165.752 388.035,166.215 388.212,166.648 388.212 C 167.080 388.212,167.324 388.035,167.191 387.819 C 167.057 387.603,166.594 387.426,166.162 387.426 C 165.730 387.426,165.485 387.603,165.619 387.819 M223.969 387.819 C 223.969 388.035,224.421 388.212,224.974 388.212 C 225.544 388.212,225.874 388.042,225.737 387.819 C 225.603 387.603,225.151 387.426,224.731 387.426 C 224.312 387.426,223.969 387.603,223.969 387.819 M168.762 388.212 C 169.859 388.683,171.018 388.683,170.727 388.212 C 170.593 387.996,169.920 387.832,169.230 387.847 C 168.173 387.870,168.100 387.928,168.762 388.212 M220.236 388.212 C 219.955 388.667,220.978 388.667,222.397 388.212 C 223.279 387.930,223.232 387.894,221.929 387.858 C 221.131 387.837,220.369 387.996,220.236 388.212 M172.888 388.605 C 173.428 388.778,174.401 388.916,175.049 388.912 L 176.228 388.905 175.049 388.605 C 174.401 388.440,173.428 388.302,172.888 388.298 L 171.906 388.291 172.888 388.605 M215.128 388.605 L 213.163 388.875 215.128 388.890 C 216.208 388.898,217.623 388.770,218.271 388.605 L 219.450 388.305 218.271 388.320 C 217.623 388.329,216.208 388.457,215.128 388.605 M178.585 389.391 C 178.444 389.620,178.843 389.784,179.545 389.784 C 180.206 389.784,180.747 389.607,180.747 389.391 C 180.747 389.175,180.315 388.998,179.787 388.998 C 179.260 388.998,178.719 389.175,178.585 389.391 M209.692 389.260 C 209.125 389.827,209.497 389.995,211.002 389.851 C 211.866 389.769,212.574 389.543,212.574 389.350 C 212.574 388.945,210.085 388.867,209.692 389.260 M184.903 389.833 C 185.169 390.265,204.991 390.291,205.257 389.861 C 205.365 389.687,200.781 389.532,195.072 389.517 C 189.241 389.502,184.784 389.640,184.903 389.833 ", stroke: "none", fill: "#bdbeba", "fill-rule": "evenodd" }),
            React.createElement("path", { id: "path3", d: "M195.523 4.778 C 195.050 5.053,193.778 5.117,192.036 4.955 C 190.527 4.815,189.094 4.857,188.851 5.047 C 188.467 5.348,186.460 5.623,181.211 6.092 C 179.790 6.219,178.971 6.685,180.190 6.672 C 180.604 6.668,183.242 6.401,186.051 6.078 C 188.861 5.756,194.342 5.366,198.232 5.212 C 203.596 5.000,204.782 4.868,203.143 4.666 C 199.783 4.252,196.341 4.303,195.523 4.778 M211.788 4.709 C 211.031 4.835,213.507 5.066,217.289 5.222 C 221.071 5.379,226.464 5.767,229.273 6.085 C 232.083 6.404,234.720 6.668,235.134 6.672 C 236.377 6.685,235.408 6.106,234.059 6.030 C 230.888 5.852,226.860 5.419,226.326 5.199 C 226.002 5.065,224.322 4.906,222.593 4.844 C 220.864 4.782,218.035 4.675,216.306 4.606 C 214.578 4.536,212.544 4.583,211.788 4.709 M237.132 6.676 C 236.101 6.873,242.501 8.251,244.449 8.251 C 245.235 8.251,244.463 7.730,243.514 7.620 C 240.686 7.294,238.679 6.927,238.507 6.705 C 238.399 6.565,237.780 6.552,237.132 6.676 M175.246 7.091 C 174.057 7.261,172.554 7.501,171.906 7.625 C 164.292 9.081,156.814 10.824,156.447 11.228 C 156.305 11.383,156.631 11.398,157.171 11.261 C 160.855 10.323,167.680 8.911,172.692 8.050 C 180.000 6.794,181.641 6.179,175.246 7.091 M193.320 8.300 C 186.154 8.825,179.427 9.713,171.450 11.185 C 164.540 12.461,162.479 12.931,155.108 14.910 C 138.438 19.386,123.088 25.813,106.310 35.341 C 73.626 53.901,43.985 85.797,27.416 120.236 C 14.833 146.389,9.021 170.385,8.382 198.821 C 7.813 224.153,12.832 252.579,21.061 270.620 C 21.380 271.318,21.878 272.556,22.168 273.371 C 25.631 283.080,36.026 301.159,44.916 312.931 C 57.779 329.964,76.498 347.059,93.713 357.493 C 101.770 362.377,110.887 367.173,117.682 370.103 C 119.843 371.034,122.141 372.029,122.790 372.313 C 161.788 389.381,214.848 390.750,259.166 375.832 C 269.430 372.377,287.792 364.349,291.945 361.501 C 292.485 361.130,293.900 360.295,295.088 359.645 C 303.520 355.032,317.008 345.717,324.119 339.597 C 370.222 299.917,394.787 248.560,394.931 191.552 C 395.203 83.684,303.398 0.238,193.320 8.300 M245.776 8.160 C 245.310 8.285,246.671 8.736,249.116 9.267 C 253.908 10.309,254.224 10.344,254.224 9.836 C 254.224 9.626,253.956 9.558,253.630 9.683 C 253.303 9.808,252.815 9.728,252.545 9.504 C 252.276 9.281,250.952 8.973,249.603 8.820 C 248.255 8.668,247.151 8.389,247.151 8.201 C 247.151 7.835,247.005 7.831,245.776 8.160 M220.629 8.652 C 230.607 9.373,247.830 11.915,252.456 13.349 C 253.104 13.550,255.668 14.248,258.153 14.901 C 333.524 34.691,388.250 99.953,393.927 176.817 C 396.813 215.894,386.684 258.098,367.051 288.802 C 366.153 290.206,365.298 291.621,365.151 291.945 C 364.335 293.746,354.641 307.448,351.807 310.806 C 341.798 322.664,333.076 331.530,324.558 338.507 C 322.721 340.012,321.130 341.347,321.022 341.474 C 320.812 341.721,317.017 344.605,314.979 346.066 C 314.304 346.550,312.426 347.910,310.806 349.088 C 301.627 355.760,285.799 364.629,274.656 369.343 C 273.035 370.029,271.166 370.836,270.501 371.135 C 263.580 374.259,245.629 379.654,234.774 381.873 C 189.668 391.096,140.599 383.652,102.012 361.733 C 99.878 360.521,98.050 359.528,97.951 359.528 C 97.852 359.528,97.035 359.027,96.135 358.414 C 95.235 357.801,92.142 355.753,89.260 353.862 C 50.274 328.282,21.631 285.938,12.425 240.275 C 11.858 237.466,11.218 234.283,11.001 233.202 C 8.263 219.552,8.075 190.294,10.630 175.442 C 10.853 174.145,11.208 172.068,11.420 170.826 C 14.859 150.643,25.960 120.376,34.587 107.662 C 34.954 107.122,36.548 104.583,38.130 102.020 C 47.261 87.225,59.169 72.994,72.495 60.952 C 81.824 52.522,87.331 48.230,97.250 41.661 C 106.104 35.797,118.182 29.139,126.156 25.725 C 127.954 24.956,129.965 24.073,130.626 23.764 C 133.875 22.243,144.939 18.349,151.670 16.358 C 160.006 13.892,164.240 12.935,176.228 10.805 C 188.404 8.642,207.602 7.711,220.629 8.652 M257.171 11.039 C 269.083 14.659,272.900 15.877,275.639 16.929 C 278.439 18.005,281.332 18.907,279.764 18.217 C 279.440 18.074,279.086 17.847,278.978 17.713 C 278.870 17.579,277.898 17.180,276.817 16.826 C 273.896 15.868,272.127 15.161,271.898 14.859 C 271.786 14.711,271.256 14.513,270.720 14.419 C 268.428 14.017,267.191 13.632,267.191 13.323 C 267.191 13.140,266.941 13.087,266.637 13.204 C 266.332 13.321,265.545 13.138,264.888 12.799 C 264.231 12.459,263.331 12.181,262.888 12.181 C 262.445 12.181,262.083 11.993,262.083 11.765 C 262.083 11.536,261.906 11.458,261.690 11.591 C 261.474 11.724,260.192 11.538,258.841 11.176 C 255.123 10.180,254.059 10.093,257.171 11.039 M154.813 11.350 C 154.813 11.542,153.976 11.824,152.952 11.978 C 151.928 12.131,150.586 12.518,149.970 12.837 C 149.353 13.155,148.599 13.321,148.295 13.204 C 147.990 13.087,147.741 13.163,147.741 13.372 C 147.741 13.581,147.431 13.759,147.053 13.766 C 146.675 13.774,145.923 14.051,145.383 14.383 C 144.696 14.805,144.637 14.910,145.187 14.734 C 145.619 14.595,148.215 13.840,150.957 13.056 C 153.698 12.271,155.853 11.488,155.747 11.316 C 155.485 10.892,154.813 10.917,154.813 11.350 M143.026 14.944 C 143.026 15.153,142.764 15.324,142.444 15.324 C 141.731 15.324,138.615 16.545,138.815 16.746 C 138.895 16.825,140.173 16.481,141.655 15.981 C 143.498 15.360,144.141 14.991,143.688 14.817 C 143.324 14.677,143.026 14.734,143.026 14.944 M136.149 17.466 C 133.505 18.706,129.904 19.990,129.599 19.801 C 129.420 19.691,129.273 19.766,129.273 19.968 C 129.273 20.171,128.737 20.559,128.082 20.830 C 127.426 21.102,126.950 21.384,127.024 21.457 C 127.153 21.586,134.917 18.595,137.328 17.488 C 137.976 17.190,138.242 16.939,137.917 16.930 C 137.593 16.921,136.798 17.162,136.149 17.466 M280.593 18.641 C 281.006 19.054,287.361 21.611,287.537 21.435 C 287.644 21.328,287.309 21.079,286.793 20.883 C 286.277 20.686,284.755 20.063,283.411 19.497 C 281.097 18.522,280.202 18.251,280.593 18.641 M125.737 21.492 C 125.737 21.668,125.250 22.023,124.656 22.282 C 121.409 23.692,119.806 24.336,119.587 24.316 C 119.452 24.304,119.233 24.448,119.101 24.635 C 118.846 24.997,113.847 27.505,113.381 27.505 C 113.230 27.505,112.832 27.780,112.495 28.117 C 112.158 28.453,111.655 28.641,111.377 28.535 C 111.098 28.428,110.789 28.553,110.689 28.813 C 110.589 29.073,110.000 29.545,109.380 29.862 C 106.921 31.117,101.538 34.349,100.982 34.903 C 100.658 35.226,101.100 35.082,101.965 34.583 C 108.861 30.599,113.551 28.085,119.589 25.135 C 123.447 23.250,126.409 21.587,126.171 21.440 C 125.932 21.292,125.737 21.316,125.737 21.492 M288.186 21.962 C 288.334 22.201,288.622 22.397,288.826 22.397 C 289.030 22.397,291.343 23.463,293.965 24.766 C 296.587 26.069,298.816 27.052,298.918 26.950 C 299.106 26.762,290.229 22.260,288.735 21.786 C 288.187 21.613,288.006 21.670,288.186 21.962 M299.411 27.272 C 299.411 27.368,301.639 28.707,304.362 30.247 C 312.021 34.578,320.984 40.598,327.584 45.844 C 341.021 56.524,354.889 71.012,363.248 83.104 C 364.294 84.617,365.900 86.916,366.817 88.212 C 374.155 98.587,383.409 117.331,388.012 131.139 C 388.822 133.571,389.560 135.560,389.652 135.560 C 389.900 135.560,389.336 132.677,388.998 132.220 C 388.838 132.004,388.492 131.120,388.230 130.255 C 387.967 129.391,387.523 128.153,387.244 127.505 C 386.965 126.857,386.181 124.823,385.501 122.986 C 384.822 121.149,384.087 119.330,383.868 118.943 C 383.649 118.556,383.575 118.070,383.703 117.862 C 383.832 117.655,383.761 117.485,383.547 117.485 C 383.332 117.485,383.035 117.087,382.885 116.601 C 382.735 116.115,381.389 113.201,379.894 110.126 C 378.399 107.052,377.198 104.419,377.226 104.276 C 377.254 104.134,377.118 103.909,376.924 103.777 C 376.729 103.645,375.267 101.238,373.675 98.428 C 370.803 93.360,368.933 90.390,365.756 85.855 C 363.553 82.711,359.010 76.474,358.742 76.228 C 358.624 76.120,356.591 73.733,354.223 70.923 C 345.708 60.822,333.611 49.505,323.294 41.990 C 315.306 36.171,299.411 26.375,299.411 27.272 M96.774 37.328 C 95.216 38.409,93.772 39.293,93.565 39.293 C 93.359 39.293,93.130 39.429,93.058 39.595 C 92.891 39.982,87.623 43.722,87.623 43.454 C 87.623 43.343,87.137 43.701,86.542 44.248 C 85.948 44.796,83.428 46.853,80.943 48.820 C 74.892 53.608,72.097 55.947,69.745 58.187 C 66.602 61.179,65.935 61.689,65.507 61.424 C 65.283 61.286,65.223 61.367,65.371 61.607 C 65.731 62.189,59.454 68.491,58.872 68.131 C 58.593 67.959,58.533 68.030,58.713 68.322 C 58.891 68.609,57.593 70.329,55.336 72.799 C 51.055 77.483,51.172 77.346,49.902 79.141 C 49.361 79.904,48.669 80.533,48.363 80.539 C 48.057 80.545,47.915 80.659,48.047 80.791 C 48.314 81.058,45.929 84.392,42.928 87.950 C 42.442 88.527,42.044 89.118,42.044 89.265 C 42.043 89.411,41.818 89.765,41.543 90.051 C 41.268 90.336,40.379 91.581,39.566 92.817 C 38.753 94.053,37.785 95.241,37.414 95.457 C 37.042 95.673,36.916 95.858,37.132 95.868 C 37.348 95.878,37.292 96.034,37.007 96.214 C 36.723 96.395,36.451 96.790,36.403 97.092 C 36.354 97.395,36.032 98.084,35.686 98.625 C 33.237 102.448,28.626 110.486,28.788 110.648 C 28.897 110.757,29.656 109.643,30.474 108.174 C 36.341 97.633,47.251 82.342,55.228 73.479 C 59.585 68.638,68.403 59.842,71.906 56.843 C 73.959 55.085,75.727 53.555,75.835 53.443 C 75.943 53.331,77.358 52.180,78.978 50.884 C 80.599 49.588,82.014 48.424,82.122 48.297 C 82.603 47.730,90.301 42.225,94.735 39.277 C 100.021 35.761,100.555 35.363,99.980 35.364 C 99.775 35.364,98.332 36.248,96.774 37.328 M276.397 76.593 C 273.548 77.284,272.353 78.539,255.439 98.587 C 252.218 102.404,243.930 112.086,242.085 114.186 C 241.305 115.073,240.312 116.222,239.877 116.740 C 239.442 117.258,237.144 119.992,234.769 122.816 C 232.395 125.640,229.745 128.813,228.880 129.866 C 228.016 130.919,225.540 133.843,223.379 136.364 C 221.218 138.885,215.472 145.609,210.609 151.307 C 205.747 157.005,200.972 162.573,200.000 163.680 C 197.825 166.158,197.301 166.770,185.051 181.139 C 179.616 187.515,174.331 193.703,173.307 194.892 C 169.882 198.867,166.046 203.372,162.083 208.074 C 159.921 210.638,156.911 214.158,155.394 215.896 C 153.876 217.635,151.140 220.825,149.314 222.986 C 147.487 225.147,145.662 227.269,145.258 227.701 C 144.210 228.820,131.130 244.071,119.814 257.367 C 118.986 258.340,114.808 263.224,110.530 268.220 C 106.251 273.217,101.071 279.295,99.018 281.727 C 96.965 284.159,93.771 287.939,91.920 290.127 C 88.092 294.655,87.429 295.978,87.469 299.018 C 87.518 302.707,89.102 304.575,99.018 312.629 C 100.639 313.946,102.495 315.477,103.143 316.032 C 120.402 330.815,120.606 330.827,131.651 317.682 C 133.467 315.521,135.420 313.222,135.990 312.574 C 137.194 311.205,144.386 302.787,153.635 291.921 C 157.200 287.731,161.710 282.442,163.657 280.167 C 165.603 277.893,167.680 275.381,168.273 274.586 C 168.865 273.791,170.701 271.580,172.352 269.674 C 174.004 267.768,176.110 265.324,177.032 264.244 C 189.285 249.886,199.023 238.546,201.084 236.237 C 202.488 234.665,204.004 232.897,204.455 232.308 C 204.905 231.719,207.493 228.674,210.206 225.540 C 212.919 222.407,216.020 218.782,217.098 217.485 C 218.175 216.189,219.151 215.039,219.266 214.931 C 219.577 214.639,231.052 201.287,232.402 199.647 C 234.179 197.488,246.487 182.967,246.957 182.475 C 247.185 182.237,249.753 179.245,252.664 175.824 C 255.575 172.404,259.283 168.074,260.904 166.200 C 262.525 164.327,264.735 161.757,265.815 160.489 C 266.896 159.222,270.609 154.884,274.067 150.850 C 277.525 146.816,283.625 139.667,287.623 134.964 C 291.621 130.261,296.218 124.879,297.839 123.004 C 299.460 121.128,301.582 118.646,302.554 117.488 C 303.527 116.330,305.429 114.076,306.781 112.479 C 313.871 104.107,312.892 101.925,295.888 88.212 C 295.084 87.564,292.144 85.120,289.355 82.781 C 282.224 76.801,279.971 75.725,276.397 76.593 M281.847 77.650 C 283.353 78.412,288.192 82.305,297.419 90.177 C 298.433 91.041,300.020 92.367,300.946 93.124 C 309.185 99.849,309.751 100.545,309.958 104.207 C 310.107 106.851,309.340 108.987,307.564 110.880 C 307.294 111.168,306.015 112.639,304.723 114.149 C 303.431 115.660,301.986 117.338,301.512 117.878 C 301.039 118.418,299.383 120.363,297.834 122.200 C 293.005 127.925,289.020 132.605,288.799 132.809 C 288.683 132.917,287.707 134.065,286.632 135.360 C 285.556 136.656,284.027 138.424,283.234 139.290 C 282.440 140.156,281.203 141.593,280.483 142.482 C 278.736 144.644,269.022 156.064,266.798 158.571 C 265.825 159.668,264.586 161.083,264.043 161.717 C 263.501 162.350,261.379 164.827,259.328 167.221 C 251.146 176.771,244.904 184.069,243.273 185.992 C 240.972 188.704,238.260 191.887,236.346 194.122 C 235.481 195.131,233.638 197.327,232.249 199.002 C 230.860 200.677,229.531 202.249,229.294 202.497 C 228.827 202.986,220.666 212.539,218.454 215.185 C 217.705 216.082,212.318 222.339,206.483 229.090 C 200.648 235.842,195.344 242.010,194.695 242.798 C 192.715 245.205,184.237 255.096,182.541 256.981 C 181.662 257.957,180.147 259.718,179.175 260.895 C 178.202 262.072,175.815 264.873,173.870 267.119 C 171.925 269.365,169.450 272.311,168.369 273.665 C 166.412 276.118,159.489 284.399,157.522 286.640 C 156.598 287.693,154.299 290.346,151.903 293.124 C 149.853 295.501,142.215 304.498,139.932 307.225 C 138.555 308.870,136.777 310.923,135.982 311.788 C 135.186 312.652,133.433 314.723,132.085 316.388 C 122.664 328.036,119.508 329.151,112.515 323.303 C 111.402 322.372,107.866 319.401,104.657 316.699 C 101.448 313.998,98.469 311.497,98.036 311.142 C 85.716 301.024,85.184 298.883,92.753 289.908 C 98.264 283.375,101.959 279.035,104.006 276.694 C 105.010 275.546,106.995 273.227,108.417 271.542 C 109.839 269.856,113.212 265.881,115.914 262.707 C 118.615 259.533,121.621 255.998,122.593 254.851 C 123.566 253.705,127.127 249.562,130.507 245.645 C 133.886 241.728,137.246 237.795,137.972 236.904 C 139.908 234.530,141.790 232.333,144.008 229.858 C 147.562 225.891,155.477 216.678,162.083 208.817 C 164.244 206.245,166.728 203.342,167.604 202.365 C 168.480 201.389,170.070 199.528,171.138 198.232 C 172.206 196.935,174.318 194.447,175.832 192.702 C 177.347 190.958,180.528 187.245,182.902 184.451 C 188.099 178.334,188.433 177.944,190.619 175.427 C 191.564 174.337,193.222 172.400,194.303 171.121 C 197.969 166.783,201.345 162.874,202.789 161.297 C 203.580 160.432,205.164 158.576,206.308 157.171 C 207.452 155.766,209.109 153.812,209.990 152.829 C 210.871 151.846,211.945 150.605,212.377 150.073 C 213.400 148.813,218.469 142.858,223.197 137.362 C 225.258 134.966,228.337 131.326,230.040 129.273 C 233.934 124.578,241.364 115.782,241.656 115.521 C 241.776 115.413,243.812 113.026,246.180 110.216 C 248.548 107.407,251.037 104.489,251.712 103.733 C 252.808 102.504,260.236 93.802,264.625 88.605 C 265.537 87.525,267.339 85.403,268.629 83.890 C 269.918 82.377,271.316 80.719,271.734 80.206 C 274.117 77.283,278.788 76.102,281.847 77.650 M126.573 78.988 C 126.060 79.204,124.911 79.948,124.019 80.640 C 121.648 82.479,115.389 87.683,114.931 88.195 C 114.715 88.437,113.461 89.512,112.144 90.585 C 97.721 102.332,95.436 104.574,94.682 107.719 C 93.700 111.811,94.547 113.235,105.508 125.933 C 106.627 127.230,107.879 128.716,108.290 129.236 C 108.701 129.757,109.583 130.817,110.249 131.594 C 110.916 132.371,113.909 135.923,116.901 139.489 C 119.893 143.055,122.449 146.061,122.580 146.169 C 122.711 146.277,123.961 147.780,125.358 149.508 C 126.755 151.236,128.694 153.547,129.666 154.642 C 130.639 155.738,132.977 158.506,134.863 160.795 C 136.749 163.083,138.526 165.193,138.813 165.484 C 139.099 165.774,140.124 166.984,141.092 168.173 C 142.848 170.332,143.412 171.005,146.365 174.468 C 147.230 175.481,150.124 178.900,152.796 182.065 C 155.469 185.230,157.797 187.819,157.971 187.819 C 158.144 187.819,160.978 184.681,164.268 180.845 C 167.558 177.009,171.595 172.301,173.239 170.384 C 174.883 168.466,176.405 166.697,176.621 166.452 C 176.837 166.207,177.896 164.947,178.974 163.652 C 180.052 162.356,181.128 161.120,181.365 160.904 C 181.601 160.688,183.637 158.310,185.888 155.620 C 188.139 152.931,190.378 150.297,190.864 149.767 C 192.313 148.190,191.980 147.435,187.519 142.196 C 185.199 139.470,180.648 134.096,177.407 130.253 C 174.165 126.410,170.275 121.820,168.762 120.054 C 167.250 118.288,165.305 115.975,164.440 114.914 C 163.576 113.853,162.318 112.362,161.644 111.600 C 160.971 110.839,157.906 107.210,154.833 103.536 C 151.761 99.862,148.870 96.415,148.410 95.874 C 147.949 95.334,146.160 93.212,144.434 91.159 C 134.065 78.827,134.101 78.858,130.107 78.698 C 128.676 78.641,127.085 78.771,126.573 78.988 M133.110 79.814 C 134.640 80.555,137.491 83.556,142.582 89.784 C 144.484 92.111,149.046 97.531,151.307 100.150 C 152.729 101.796,155.819 105.442,158.174 108.251 C 160.529 111.061,162.836 113.802,163.302 114.342 C 163.768 114.882,166.306 117.888,168.943 121.022 C 179.796 133.917,185.428 140.582,188.310 143.937 C 191.925 148.145,191.875 147.812,189.320 150.725 C 188.201 152.001,185.589 155.079,183.517 157.564 C 181.445 160.049,179.283 162.613,178.711 163.261 C 178.140 163.910,176.375 165.952,174.789 167.799 C 161.775 182.958,158.208 187.033,157.951 187.033 C 157.669 187.033,152.853 181.440,143.084 169.769 C 140.631 166.838,137.802 163.476,136.797 162.299 C 135.793 161.121,134.295 159.353,133.470 158.369 C 132.645 157.386,131.292 155.786,130.463 154.813 C 129.635 153.841,126.963 150.658,124.525 147.741 C 118.712 140.782,112.841 133.810,107.484 127.503 C 105.097 124.693,102.494 121.598,101.699 120.627 C 100.905 119.655,99.624 118.153,98.852 117.289 C 93.833 111.667,93.729 106.696,98.546 102.630 C 99.562 101.772,102.515 99.297,105.108 97.130 C 107.701 94.962,111.415 91.838,113.360 90.186 C 127.632 78.068,128.529 77.597,133.110 79.814 M28.202 111.418 C 27.398 112.222,21.116 125.627,18.868 131.336 C 17.953 133.659,17.032 135.560,16.821 135.560 C 16.610 135.560,16.513 135.781,16.605 136.051 C 16.698 136.321,16.171 138.222,15.435 140.275 C 14.699 142.328,13.929 144.677,13.723 145.495 C 13.518 146.312,13.188 147.285,12.991 147.656 C 12.794 148.027,12.334 149.656,11.970 151.277 C 11.606 152.898,11.167 154.401,10.995 154.617 C 10.823 154.833,10.558 155.850,10.405 156.876 C 10.252 157.903,9.958 158.743,9.752 158.743 C 9.546 158.743,9.492 159.105,9.633 159.547 C 9.773 159.990,9.705 160.573,9.481 160.842 C 9.257 161.112,9.078 161.678,9.082 162.101 C 9.098 163.601,8.521 166.409,8.147 166.653 C 7.909 166.808,7.904 167.145,8.134 167.557 C 8.405 168.040,8.735 167.045,9.390 163.772 C 12.401 148.727,19.076 129.975,26.630 115.340 C 28.436 111.840,28.875 110.745,28.202 111.418 M389.786 136.056 C 389.781 136.678,391.348 141.969,391.605 142.197 C 391.753 142.329,391.757 142.111,391.614 141.714 C 391.471 141.317,391.238 140.267,391.096 139.380 C 390.872 137.977,389.793 135.239,389.786 136.056 M391.776 142.873 C 391.761 143.114,392.093 144.705,392.513 146.410 C 394.690 155.230,396.473 166.365,397.224 175.835 C 397.946 184.942,397.970 185.088,397.766 179.175 C 397.658 176.041,397.473 172.593,397.356 171.513 C 397.239 170.432,397.131 168.885,397.117 168.075 C 397.103 167.264,396.933 166.601,396.740 166.601 C 396.546 166.601,396.449 165.717,396.524 164.636 C 396.599 163.556,396.540 162.627,396.394 162.573 C 396.154 162.485,395.732 160.184,395.475 157.564 C 395.422 157.024,395.254 156.281,395.101 155.913 C 394.948 155.545,394.937 155.059,395.077 154.832 C 395.217 154.606,395.161 154.420,394.954 154.420 C 394.746 154.420,394.451 153.315,394.297 151.965 C 394.144 150.614,393.881 149.332,393.714 149.116 C 393.546 148.900,393.279 147.936,393.120 146.974 C 392.819 145.149,391.824 142.114,391.776 142.873 M7.734 168.842 C 7.622 169.023,7.405 170.449,7.251 172.012 C 7.097 173.574,6.861 174.853,6.727 174.853 C 6.593 174.853,6.447 175.604,6.402 176.523 C 6.357 177.441,6.226 178.900,6.112 179.764 C 5.997 180.629,5.790 183.237,5.651 185.560 C 5.512 187.883,5.289 189.784,5.155 189.784 C 5.021 189.783,4.876 191.773,4.833 194.204 C 4.789 196.635,4.646 200.702,4.514 203.242 C 4.335 206.687,4.393 207.859,4.743 207.859 C 5.087 207.859,5.162 208.951,5.028 211.984 C 4.927 214.253,4.969 216.110,5.122 216.110 C 5.386 216.110,5.954 223.457,5.908 226.281 C 5.896 227.013,6.085 227.851,6.328 228.144 C 6.571 228.437,6.692 229.209,6.596 229.859 C 6.501 230.509,6.544 231.041,6.693 231.041 C 6.841 231.041,7.088 232.058,7.242 233.301 C 7.672 236.786,7.694 236.901,7.982 237.189 C 8.380 237.588,8.329 237.064,7.463 231.903 C 4.577 214.711,4.597 192.312,7.515 173.935 C 8.241 169.363,8.303 167.922,7.734 168.842 M398.081 190.864 C 398.056 194.160,398.182 196.857,398.360 196.857 C 398.654 196.857,398.561 186.875,398.254 185.462 C 398.184 185.138,398.106 187.569,398.081 190.864 M397.518 202.063 C 397.383 204.494,397.154 207.898,397.010 209.627 C 396.857 211.458,396.893 212.633,397.096 212.443 C 397.289 212.263,397.474 211.379,397.508 210.478 C 397.543 209.578,397.702 206.321,397.863 203.242 C 398.024 200.162,398.068 197.642,397.959 197.642 C 397.851 197.642,397.652 199.632,397.518 202.063 M243.098 211.536 C 242.764 212.046,242.245 212.709,241.945 213.010 C 241.645 213.310,238.162 217.358,234.206 222.004 C 230.250 226.650,226.543 230.982,225.969 231.631 C 225.396 232.279,222.191 235.974,218.848 239.842 C 215.505 243.709,212.291 247.422,211.706 248.093 C 210.184 249.836,210.343 250.564,212.875 253.462 C 214.114 254.880,215.860 256.913,216.755 257.980 C 217.650 259.048,220.921 262.906,224.024 266.554 C 227.127 270.202,230.103 273.739,230.637 274.413 C 231.172 275.087,232.949 277.230,234.588 279.175 C 236.226 281.120,240.023 285.629,243.026 289.194 C 246.028 292.760,249.829 297.269,251.473 299.214 C 259.595 308.823,266.721 317.296,267.780 318.603 C 281.460 335.501,282.995 336.000,293.799 327.052 C 296.345 324.943,298.517 323.114,298.625 322.987 C 298.733 322.860,302.623 319.557,307.269 315.647 C 311.916 311.736,316.271 307.942,316.947 307.215 C 319.994 303.944,319.716 298.904,316.279 295.088 C 315.598 294.332,313.955 292.408,312.628 290.812 C 311.302 289.217,309.067 286.552,307.662 284.890 C 306.257 283.228,303.428 279.863,301.375 277.412 C 299.322 274.962,296.935 272.137,296.071 271.135 C 295.206 270.132,293.769 268.437,292.877 267.367 C 291.986 266.298,287.742 261.253,283.447 256.157 C 279.152 251.061,274.047 244.986,272.102 242.657 C 270.157 240.327,268.386 238.220,268.167 237.973 C 267.948 237.726,266.801 236.375,265.618 234.971 C 264.435 233.566,262.846 231.708,262.087 230.843 C 261.328 229.977,260.088 228.498,259.332 227.555 C 258.576 226.612,257.780 225.639,257.564 225.393 C 257.348 225.147,256.287 223.886,255.206 222.592 C 253.366 220.387,252.864 219.800,250.672 217.289 C 250.200 216.749,248.749 215.025,247.448 213.458 C 244.931 210.429,244.072 210.049,243.098 211.536 M248.773 215.815 C 251.042 218.463,255.702 223.988,259.128 228.094 C 262.555 232.200,266.441 236.798,267.765 238.310 C 269.090 239.823,270.519 241.526,270.941 242.094 C 271.364 242.662,273.565 245.315,275.832 247.988 C 278.100 250.661,280.310 253.276,280.744 253.799 C 281.178 254.321,282.606 256.001,283.919 257.531 C 285.231 259.062,286.646 260.737,287.062 261.254 C 287.479 261.771,288.527 263.020,289.391 264.029 C 290.255 265.038,292.642 267.871,294.695 270.325 C 296.749 272.778,299.576 276.127,300.979 277.766 C 302.382 279.405,303.656 280.923,303.810 281.139 C 303.963 281.356,304.937 282.506,305.974 283.695 C 307.010 284.885,308.566 286.741,309.430 287.821 C 310.295 288.901,311.095 289.872,311.209 289.980 C 313.433 292.094,317.657 297.760,318.096 299.220 C 319.552 304.056,318.369 305.757,306.876 315.358 C 301.798 319.601,297.110 323.539,296.458 324.110 C 283.639 335.344,282.476 335.263,271.703 322.397 C 270.256 320.668,268.315 318.369,267.390 317.289 C 265.666 315.274,260.011 308.582,255.602 303.340 C 254.239 301.719,250.520 297.299,247.339 293.517 C 244.157 289.735,239.409 284.090,236.789 280.972 C 234.168 277.855,230.874 273.946,229.470 272.285 C 226.380 268.632,218.180 258.908,215.271 255.449 C 211.417 250.864,211.004 250.239,211.374 249.556 C 211.645 249.056,222.047 236.808,228.672 229.189 C 229.276 228.494,231.250 226.196,233.058 224.081 C 234.866 221.966,236.667 219.882,237.060 219.450 C 237.453 219.018,239.218 216.940,240.981 214.833 C 242.745 212.726,244.291 211.002,244.417 211.002 C 244.544 211.002,246.503 213.168,248.773 215.815 M396.529 213.752 C 396.329 217.483,393.723 231.026,391.699 238.847 C 390.840 242.168,390.223 244.971,390.328 245.076 C 390.432 245.180,390.709 244.497,390.942 243.556 C 391.303 242.097,391.962 239.724,392.399 238.310 C 392.466 238.094,392.716 236.945,392.955 235.756 C 393.194 234.568,393.549 233.402,393.745 233.166 C 393.940 232.930,394.000 232.638,393.879 232.517 C 393.684 232.322,394.207 229.932,394.803 228.291 C 394.920 227.967,394.987 227.564,394.951 227.396 C 394.915 227.228,395.240 225.076,395.674 222.613 C 396.108 220.151,396.464 217.738,396.464 217.252 C 396.464 216.766,396.756 216.045,397.114 215.650 C 397.472 215.255,397.572 214.931,397.337 214.931 C 397.101 214.931,396.835 214.445,396.745 213.851 C 396.589 212.819,396.579 212.815,396.529 213.752 M8.007 238.294 C 7.862 238.671,7.921 239.094,8.137 239.234 C 8.354 239.374,8.632 240.285,8.756 241.257 C 8.880 242.230,9.077 243.379,9.195 243.811 C 9.849 246.213,11.053 251.360,11.079 251.866 C 11.096 252.191,11.245 252.633,11.410 252.849 C 11.709 253.239,12.613 256.238,12.772 257.367 C 12.818 257.692,13.057 258.455,13.304 259.063 C 13.551 259.671,13.754 260.379,13.755 260.635 C 13.756 260.891,14.002 261.569,14.301 262.143 C 14.828 263.153,15.701 265.574,15.882 266.526 C 15.931 266.784,16.268 267.679,16.630 268.516 C 16.992 269.352,17.289 270.270,17.289 270.555 C 17.289 270.840,17.440 271.167,17.625 271.281 C 17.809 271.395,18.360 272.599,18.849 273.956 C 19.667 276.230,21.035 279.312,23.424 284.262 C 23.939 285.331,24.361 286.421,24.361 286.685 C 24.361 286.949,24.511 287.223,24.693 287.295 C 25.158 287.479,28.291 293.424,28.291 294.122 C 28.291 294.437,28.439 294.695,28.621 294.695 C 28.803 294.695,29.432 295.535,30.019 296.562 C 31.702 299.504,32.630 301.012,34.249 303.434 C 35.078 304.674,35.756 305.792,35.756 305.918 C 35.756 306.043,35.977 306.386,36.248 306.680 C 37.085 307.589,39.778 311.513,39.731 311.755 C 39.706 311.881,40.039 312.338,40.472 312.770 C 40.904 313.202,41.257 313.821,41.257 314.145 C 41.257 314.470,41.478 314.742,41.749 314.750 C 42.282 314.767,44.794 317.981,44.794 318.648 C 44.794 318.873,44.955 319.057,45.153 319.057 C 45.350 319.057,46.424 320.162,47.539 321.513 C 48.654 322.863,50.658 325.175,51.993 326.649 C 53.328 328.124,54.580 329.671,54.775 330.087 C 54.970 330.504,55.270 330.845,55.441 330.845 C 55.612 330.845,57.397 332.480,59.408 334.479 C 61.419 336.478,64.997 339.794,67.359 341.847 C 69.721 343.900,72.166 346.066,72.792 346.660 C 73.418 347.254,74.094 347.741,74.293 347.741 C 74.493 347.741,74.657 347.873,74.657 348.035 C 74.657 348.197,75.453 348.833,76.425 349.447 C 77.397 350.061,78.193 350.712,78.193 350.894 C 78.193 351.075,78.515 351.326,78.909 351.451 C 79.303 351.577,79.966 351.994,80.383 352.378 C 81.783 353.673,93.844 361.607,97.203 363.444 C 98.309 364.049,100.275 365.148,101.572 365.885 C 104.855 367.753,115.339 372.888,115.870 372.888 C 116.110 372.888,116.306 373.065,116.306 373.281 C 116.306 373.497,116.594 373.674,116.945 373.674 C 117.667 373.674,122.286 375.649,122.604 376.093 C 122.717 376.253,123.039 376.242,123.318 376.069 C 123.672 375.851,123.431 375.601,122.522 375.243 C 69.731 354.486,27.143 307.841,12.564 254.813 C 12.088 253.084,11.462 250.874,11.172 249.902 C 10.881 248.929,10.172 245.835,9.596 243.026 C 8.455 237.462,8.395 237.283,8.007 238.294 M387.909 251.724 C 386.303 256.496,385.786 259.132,387.261 255.029 C 387.653 253.938,388.127 253.045,388.313 253.045 C 388.499 253.045,388.548 252.877,388.421 252.672 C 388.294 252.467,388.557 251.210,389.006 249.879 C 389.454 248.548,389.768 247.299,389.703 247.104 C 389.637 246.909,388.830 248.988,387.909 251.724 M384.379 261.377 C 382.131 267.163,381.017 269.618,376.933 277.779 C 374.938 281.766,373.356 285.078,373.416 285.139 C 373.526 285.248,376.978 279.356,377.025 278.978 C 377.039 278.870,377.771 277.279,378.652 275.442 C 381.960 268.543,383.104 266.022,383.104 265.630 C 383.104 265.408,383.291 265.226,383.520 265.226 C 383.749 265.226,383.832 265.056,383.703 264.849 C 383.575 264.642,383.647 264.155,383.864 263.768 C 384.597 262.455,386.325 257.706,386.137 257.519 C 386.034 257.416,385.243 259.152,384.379 261.377 M372.182 286.851 C 371.093 288.792,364.895 298.743,364.112 299.806 C 363.715 300.345,362.301 302.307,360.968 304.167 C 338.844 335.052,307.489 359.642,271.552 374.290 C 269.521 375.118,268.059 375.863,268.304 375.944 C 268.549 376.026,269.504 375.733,270.426 375.292 C 273.316 373.913,277.858 372.102,278.430 372.102 C 278.732 372.102,278.978 371.949,278.978 371.763 C 278.978 371.576,279.818 371.105,280.845 370.717 C 283.614 369.669,298.096 362.078,298.945 361.229 C 299.232 360.942,299.638 360.707,299.848 360.707 C 300.057 360.707,300.707 360.379,301.293 359.977 C 301.878 359.576,304.479 357.867,307.073 356.180 C 311.576 353.251,317.797 348.911,319.055 347.822 C 319.380 347.541,321.415 345.922,323.576 344.225 C 325.737 342.528,328.124 340.576,328.880 339.887 C 329.637 339.198,331.219 337.810,332.396 336.802 C 337.549 332.393,348.241 321.162,353.565 314.567 C 355.148 312.606,356.606 310.943,356.807 310.871 C 357.007 310.799,357.171 310.557,357.171 310.333 C 357.171 309.975,358.221 308.565,360.111 306.385 C 360.439 306.007,360.707 305.615,360.707 305.514 C 360.707 305.413,362.168 303.247,363.954 300.701 C 366.448 297.145,371.696 288.748,373.172 285.953 C 373.664 285.021,372.737 285.862,372.182 286.851 M124.778 376.608 C 125.197 376.926,125.767 377.191,126.044 377.198 C 126.321 377.205,127.205 377.501,128.009 377.857 C 128.812 378.213,129.680 378.550,129.937 378.605 C 130.776 378.785,133.389 379.665,133.792 379.903 C 134.008 380.031,134.361 380.170,134.578 380.213 C 134.794 380.256,137.446 381.023,140.472 381.918 C 145.921 383.530,147.017 383.792,155.403 385.488 C 157.780 385.969,159.990 386.454,160.314 386.566 C 160.639 386.677,161.346 386.815,161.886 386.870 C 165.654 387.258,170.066 387.946,170.727 388.249 C 171.159 388.447,172.012 388.471,172.623 388.303 C 173.510 388.057,172.958 387.894,169.872 387.486 C 155.242 385.552,140.517 381.970,127.773 377.243 C 124.077 375.873,123.700 375.793,124.778 376.608 M264.833 376.837 C 258.348 379.179,251.159 381.390,243.222 383.484 C 240.322 384.250,240.310 384.258,242.436 384.031 C 243.625 383.904,244.920 383.629,245.316 383.422 C 245.711 383.214,246.285 383.140,246.593 383.258 C 246.900 383.376,247.151 383.280,247.151 383.046 C 247.151 382.811,247.505 382.712,247.937 382.825 C 248.369 382.938,248.723 382.870,248.723 382.674 C 248.723 382.479,248.964 382.318,249.258 382.318 C 249.552 382.318,251.718 381.695,254.071 380.933 C 256.424 380.171,260.029 379.007,262.083 378.347 C 264.136 377.686,266.081 377.044,266.405 376.919 C 266.729 376.794,267.127 376.721,267.289 376.755 C 267.451 376.789,267.583 376.640,267.583 376.424 C 267.583 375.895,267.342 375.931,264.833 376.837 M234.971 385.230 C 231.301 385.998,230.994 386.124,232.194 386.372 C 232.936 386.525,233.643 386.503,233.766 386.324 C 233.888 386.145,235.359 385.680,237.033 385.291 C 238.708 384.902,240.079 384.516,240.079 384.433 C 240.079 384.198,239.387 384.306,234.971 385.230 M222.790 387.213 C 218.517 387.863,217.436 388.133,218.468 388.296 C 219.224 388.415,220.066 388.334,220.338 388.115 C 220.610 387.896,221.538 387.811,222.401 387.927 C 223.263 388.043,223.969 387.994,223.969 387.819 C 223.969 387.522,226.698 387.009,229.177 386.840 C 230.648 386.740,231.073 386.235,229.633 386.297 C 229.003 386.325,225.923 386.737,222.790 387.213 M175.049 388.575 C 175.697 388.757,177.230 388.926,178.454 388.952 C 179.679 388.977,180.740 389.135,180.812 389.303 C 180.884 389.471,182.800 389.515,185.069 389.400 L 189.194 389.192 184.479 388.897 C 174.129 388.248,173.848 388.239,175.049 388.575 M212.737 388.451 C 212.503 388.548,209.762 388.773,206.647 388.951 C 201.017 389.273,201.007 389.276,205.108 389.296 C 207.377 389.307,211.002 389.091,213.163 388.816 C 215.997 388.454,216.545 388.309,215.128 388.295 C 214.047 388.283,212.971 388.354,212.737 388.451 M194.216 389.680 C 195.249 389.761,196.841 389.760,197.753 389.678 C 198.664 389.596,197.819 389.529,195.874 389.530 C 193.929 389.532,193.183 389.599,194.216 389.680 ", stroke: "none", fill: "#928d27", "fill-rule": "evenodd" }),
            React.createElement("path", { id: "path4", d: "M201.873 4.214 C 202.580 4.301,203.641 4.300,204.231 4.210 C 204.821 4.120,204.244 4.049,202.947 4.051 C 201.650 4.053,201.167 4.127,201.873 4.214 M211.493 4.211 C 212.087 4.301,213.060 4.301,213.654 4.211 C 214.249 4.121,213.762 4.047,212.574 4.047 C 211.385 4.047,210.899 4.121,211.493 4.211 M191.663 4.807 C 192.326 5.127,192.680 5.120,193.019 4.781 C 193.368 4.431,193.155 4.329,192.122 4.349 C 190.849 4.374,190.821 4.402,191.663 4.807 M221.611 4.715 C 221.611 4.931,222.043 5.108,222.570 5.108 C 223.098 5.108,223.639 4.931,223.772 4.715 C 223.914 4.486,223.514 4.322,222.813 4.322 C 222.152 4.322,221.611 4.499,221.611 4.715 M184.676 5.108 C 184.229 5.397,184.394 5.490,185.363 5.495 C 186.066 5.498,186.640 5.324,186.640 5.108 C 186.640 4.609,185.448 4.609,184.676 5.108 M228.684 5.108 C 228.684 5.324,229.258 5.498,229.961 5.495 C 230.930 5.490,231.096 5.397,230.648 5.108 C 229.876 4.609,228.684 4.609,228.684 5.108 M233.595 5.501 C 233.462 5.717,233.727 5.894,234.185 5.894 C 234.642 5.894,234.908 5.717,234.774 5.501 C 234.641 5.285,234.375 5.108,234.185 5.108 C 233.994 5.108,233.729 5.285,233.595 5.501 M239.686 6.680 C 239.686 6.896,240.050 7.073,240.495 7.073 C 240.940 7.073,241.194 6.896,241.061 6.680 C 240.927 6.464,240.563 6.287,240.252 6.287 C 239.940 6.287,239.686 6.464,239.686 6.680 M245.580 7.073 C 245.580 7.505,245.756 7.859,245.972 7.859 C 246.189 7.859,246.365 7.505,246.365 7.073 C 246.365 6.640,246.189 6.287,245.972 6.287 C 245.756 6.287,245.580 6.640,245.580 7.073 M248.782 7.703 C 248.490 8.033,248.381 8.424,248.541 8.572 C 248.700 8.720,248.910 8.620,249.006 8.350 C 249.102 8.080,249.432 7.859,249.738 7.859 C 250.044 7.859,250.295 7.682,250.295 7.466 C 250.295 6.877,249.386 7.020,248.782 7.703 M165.619 8.251 C 165.485 8.468,165.740 8.644,166.185 8.644 C 166.630 8.644,166.994 8.468,166.994 8.251 C 166.994 8.035,166.739 7.859,166.428 7.859 C 166.116 7.859,165.752 8.035,165.619 8.251 M253.181 8.465 C 253.053 8.798,253.051 9.174,253.176 9.299 C 253.573 9.696,254.617 9.088,254.617 8.460 C 254.617 7.676,253.482 7.680,253.181 8.465 M159.332 9.037 C 159.466 9.253,159.299 9.430,158.962 9.430 C 158.625 9.430,158.350 9.607,158.350 9.823 C 158.350 10.563,159.829 10.219,160.035 9.430 C 160.172 8.908,160.047 8.644,159.665 8.644 C 159.348 8.644,159.198 8.821,159.332 9.037 M202.259 8.938 C 205.339 9.005,210.378 9.005,213.458 8.938 C 216.537 8.872,214.018 8.817,207.859 8.817 C 201.699 8.817,199.180 8.872,202.259 8.938 M190.856 9.321 C 191.553 9.408,192.791 9.409,193.606 9.324 C 194.421 9.239,193.851 9.168,192.338 9.166 C 190.825 9.165,190.158 9.234,190.856 9.321 M223.482 9.315 C 223.971 9.409,224.678 9.406,225.054 9.307 C 225.429 9.209,225.029 9.132,224.165 9.136 C 223.301 9.141,222.993 9.221,223.482 9.315 M227.603 9.701 C 227.981 9.800,228.600 9.800,228.978 9.701 C 229.357 9.602,229.047 9.521,228.291 9.521 C 227.534 9.521,227.225 9.602,227.603 9.701 M176.424 11.016 C 167.394 12.597,165.602 13.002,168.959 12.703 C 170.363 12.579,171.934 12.317,172.449 12.122 C 172.964 11.927,173.713 11.872,174.115 12.000 C 174.517 12.127,175.068 12.089,175.340 11.914 C 175.612 11.739,176.189 11.578,176.621 11.555 C 177.341 11.516,180.095 11.028,184.086 10.231 L 185.658 9.918 184.283 9.899 C 183.527 9.889,179.990 10.391,176.424 11.016 M231.238 10.176 C 231.670 10.360,233.350 10.614,234.971 10.741 C 236.845 10.888,237.457 10.853,236.653 10.646 C 234.785 10.165,230.298 9.775,231.238 10.176 M256.974 10.227 C 256.974 10.535,259.699 11.159,259.949 10.909 C 260.028 10.830,259.391 10.577,258.534 10.349 C 257.676 10.120,256.974 10.065,256.974 10.227 M238.605 11.273 C 238.983 11.372,239.293 11.599,239.293 11.777 C 239.293 11.956,239.956 12.079,240.766 12.051 C 241.577 12.024,243.212 12.123,244.401 12.273 C 245.943 12.467,245.605 12.332,243.222 11.802 C 240.369 11.167,236.506 10.724,238.605 11.273 M251.670 13.768 C 252.967 14.185,254.293 14.520,254.617 14.511 C 254.941 14.503,254.145 14.155,252.849 13.737 C 251.552 13.320,250.226 12.985,249.902 12.994 C 249.578 13.002,250.373 13.350,251.670 13.768 M158.656 14.652 C 156.123 15.322,154.129 15.950,154.226 16.046 C 154.492 16.312,159.164 15.316,160.570 14.694 C 161.251 14.392,162.047 14.143,162.338 14.139 C 162.630 14.136,163.134 13.962,163.458 13.752 C 164.317 13.197,163.758 13.302,158.656 14.652 M255.461 14.714 C 255.769 15.038,260.565 16.187,260.767 15.985 C 260.927 15.825,258.651 15.138,256.582 14.722 C 255.825 14.571,255.321 14.567,255.461 14.714 M280.943 15.717 C 280.943 15.933,281.208 16.110,281.532 16.110 C 281.857 16.110,282.122 15.933,282.122 15.717 C 282.122 15.501,281.857 15.324,281.532 15.324 C 281.208 15.324,280.943 15.501,280.943 15.717 M277.014 16.457 C 277.014 16.648,277.367 16.897,277.800 17.010 C 278.728 17.252,278.866 16.695,277.964 16.349 C 277.139 16.032,277.014 16.046,277.014 16.457 M150.098 17.092 C 149.198 17.439,148.994 17.627,149.509 17.638 C 149.941 17.647,150.737 17.401,151.277 17.092 C 152.502 16.392,151.916 16.392,150.098 17.092 M263.055 16.881 C 263.184 17.088,263.902 17.373,264.650 17.514 C 265.399 17.654,266.012 17.910,266.012 18.082 C 266.012 18.253,266.410 18.307,266.896 18.200 C 267.606 18.045,267.664 18.089,267.191 18.427 C 266.701 18.777,266.751 18.849,267.485 18.854 C 269.150 18.866,268.370 18.143,265.831 17.323 C 262.948 16.391,262.732 16.357,263.055 16.881 M132.197 18.259 C 131.777 18.576,131.641 18.841,131.893 18.848 C 132.640 18.868,133.595 18.411,133.595 18.033 C 133.595 17.518,133.063 17.604,132.197 18.259 M144.597 18.865 C 142.031 19.697,142.380 19.810,145.365 19.113 C 146.543 18.838,147.339 18.512,147.133 18.388 C 146.927 18.265,145.786 18.479,144.597 18.865 M268.762 18.636 C 268.762 18.729,269.779 19.099,271.022 19.459 C 272.264 19.819,273.458 20.249,273.674 20.415 C 273.890 20.581,274.597 20.832,275.246 20.973 C 277.143 21.385,275.469 20.528,272.212 19.420 C 269.410 18.467,268.762 18.320,268.762 18.636 M284.086 19.390 C 284.627 19.675,285.152 19.839,285.254 19.756 C 285.530 19.529,284.371 18.873,283.694 18.872 C 283.369 18.872,283.545 19.104,284.086 19.390 M139.170 20.701 C 138.238 21.030,137.532 21.357,137.602 21.426 C 137.840 21.664,141.061 20.663,141.061 20.351 C 141.061 20.180,141.017 20.053,140.963 20.070 C 140.909 20.087,140.102 20.371,139.170 20.701 M278.152 22.040 C 279.102 22.461,279.949 22.736,280.034 22.651 C 280.204 22.481,277.176 21.201,276.711 21.246 C 276.553 21.261,277.202 21.618,278.152 22.040 M134.774 22.397 C 133.802 22.805,133.284 23.149,133.623 23.161 C 133.963 23.173,134.935 22.836,135.784 22.413 C 137.748 21.433,137.096 21.423,134.774 22.397 M118.670 23.084 C 118.689 24.003,119.377 24.440,120.091 23.985 C 120.677 23.610,120.691 23.558,120.158 23.722 C 119.691 23.866,119.556 23.757,119.708 23.359 C 119.843 23.008,119.685 22.790,119.295 22.790 C 118.948 22.790,118.667 22.922,118.670 23.084 M294.695 23.599 C 294.695 24.044,294.872 24.299,295.088 24.165 C 295.305 24.031,295.481 23.667,295.481 23.356 C 295.481 23.045,295.305 22.790,295.088 22.790 C 294.872 22.790,294.695 23.154,294.695 23.599 M130.009 24.344 C 128.794 24.923,127.114 25.689,126.277 26.047 C 125.439 26.405,125.196 26.606,125.737 26.495 C 126.515 26.334,131.665 24.156,132.384 23.683 C 133.291 23.087,131.745 23.517,130.009 24.344 M282.122 23.772 C 282.391 24.096,282.849 24.361,283.140 24.361 C 283.471 24.361,283.575 24.605,283.418 25.014 C 283.219 25.535,283.344 25.621,284.039 25.439 C 284.966 25.196,289.587 26.580,289.587 27.100 C 289.587 27.523,291.911 28.456,292.213 28.154 C 292.346 28.021,291.235 27.360,289.744 26.687 C 288.253 26.013,285.951 24.949,284.628 24.322 C 281.908 23.034,281.420 22.927,282.122 23.772 M295.481 24.754 C 295.481 24.971,295.747 25.147,296.071 25.147 C 296.395 25.147,296.660 24.971,296.660 24.754 C 296.660 24.538,296.395 24.361,296.071 24.361 C 295.747 24.361,295.481 24.538,295.481 24.754 M298.232 24.498 C 298.232 24.572,298.510 25.191,298.850 25.873 C 299.502 27.180,300.196 27.515,300.196 26.523 C 300.196 26.198,300.036 25.933,299.840 25.933 C 299.644 25.933,299.577 25.580,299.690 25.147 C 299.847 24.544,299.702 24.361,299.064 24.361 C 298.606 24.361,298.232 24.423,298.232 24.498 M297.053 25.105 C 297.053 25.298,297.333 25.564,297.675 25.695 C 298.636 26.064,298.731 25.984,298.091 25.344 C 297.424 24.676,297.053 24.591,297.053 25.105 M114.122 26.510 C 113.475 27.000,113.457 27.089,114.005 27.099 C 114.360 27.106,114.752 26.847,114.877 26.523 C 115.158 25.790,115.076 25.789,114.122 26.510 M122.986 27.505 C 122.230 27.919,121.797 28.265,122.024 28.274 C 122.646 28.299,124.551 27.350,124.555 27.014 C 124.559 26.635,124.598 26.623,122.986 27.505 M110.413 27.337 C 110.413 27.460,110.678 27.826,111.002 28.150 C 111.526 28.674,111.591 28.649,111.591 27.926 C 111.591 27.464,111.336 27.112,111.002 27.112 C 110.678 27.112,110.413 27.213,110.413 27.337 M302.793 27.734 C 302.467 28.581,302.461 28.568,303.275 28.781 C 303.855 28.932,303.962 28.788,303.819 28.041 C 303.614 26.972,303.139 26.830,302.793 27.734 M117.387 30.134 C 116.361 30.706,115.588 31.240,115.670 31.322 C 115.795 31.447,119.294 29.670,119.810 29.219 C 120.380 28.723,118.961 29.259,117.387 30.134 M296.092 30.342 C 297.834 31.477,301.375 33.126,301.375 32.803 C 301.375 32.611,294.817 29.077,294.460 29.077 C 294.289 29.077,295.023 29.646,296.092 30.342 M306.090 30.213 C 306.090 30.406,306.326 30.655,306.614 30.765 C 306.902 30.876,307.138 30.718,307.138 30.414 C 307.138 30.111,306.902 29.862,306.614 29.862 C 306.326 29.862,306.090 30.020,306.090 30.213 M310.162 31.631 C 310.286 31.955,310.187 32.220,309.942 32.220 C 309.696 32.220,309.609 32.334,309.748 32.472 C 309.887 32.611,310.296 32.480,310.656 32.181 C 311.241 31.695,311.283 31.729,311.040 32.494 C 310.832 33.149,310.981 33.463,311.671 33.825 C 312.558 34.291,312.561 34.285,311.860 33.495 C 311.392 32.967,311.292 32.601,311.569 32.430 C 311.853 32.255,311.807 31.986,311.426 31.606 C 310.685 30.865,309.874 30.881,310.162 31.631 M110.020 34.054 C 107.081 35.699,97.446 41.664,97.446 41.839 C 97.446 42.233,98.903 41.738,99.300 41.209 C 99.860 40.462,107.694 35.756,108.377 35.756 C 108.632 35.756,108.841 35.613,108.841 35.437 C 108.841 35.261,109.464 34.873,110.225 34.574 C 111.351 34.132,113.321 32.597,112.733 32.619 C 112.645 32.622,111.424 33.268,110.020 34.054 M302.654 33.797 C 303.250 34.264,303.637 34.808,303.515 35.005 C 303.243 35.444,303.753 35.463,304.423 35.038 C 304.761 34.823,304.390 34.445,303.244 33.837 C 301.616 32.972,301.600 32.971,302.654 33.797 M313.949 33.792 C 313.949 34.008,313.662 34.185,313.311 34.185 C 312.789 34.185,312.762 34.291,313.163 34.774 C 313.432 35.098,313.870 35.363,314.136 35.363 C 314.402 35.363,315.108 35.815,315.703 36.368 C 316.299 36.920,316.887 37.272,317.009 37.149 C 317.131 37.027,316.891 36.669,316.474 36.354 C 315.887 35.910,315.850 35.774,316.306 35.747 C 316.631 35.728,316.277 35.497,315.521 35.234 C 314.568 34.902,314.181 34.547,314.261 34.077 C 314.324 33.704,314.280 33.399,314.163 33.399 C 314.045 33.399,313.949 33.576,313.949 33.792 M98.441 35.349 C 97.759 36.103,97.766 36.110,98.770 35.644 C 99.335 35.382,99.799 35.034,99.800 34.872 C 99.806 34.336,99.150 34.566,98.441 35.349 M318.140 35.625 C 317.663 36.103,317.869 36.521,318.468 36.291 C 318.792 36.167,319.057 35.907,319.057 35.714 C 319.057 35.302,318.516 35.250,318.140 35.625 M308.251 36.989 C 308.368 37.293,308.791 37.714,309.192 37.926 C 309.594 38.137,310.518 38.647,311.248 39.059 C 312.345 39.678,312.481 39.695,312.034 39.157 C 311.738 38.799,311.328 38.507,311.124 38.507 C 310.920 38.507,310.142 38.041,309.396 37.472 C 308.650 36.903,308.135 36.685,308.251 36.989 M317.485 37.542 C 317.485 37.599,318.325 38.136,319.352 38.735 C 320.378 39.334,321.449 40.103,321.731 40.443 C 322.165 40.966,322.178 40.925,321.815 40.177 C 321.580 39.691,321.216 39.293,321.008 39.293 C 320.799 39.293,320.629 39.064,320.629 38.785 C 320.629 38.505,319.921 38.088,319.057 37.857 C 318.193 37.626,317.485 37.484,317.485 37.542 M313.699 40.600 C 314.495 41.276,314.668 41.611,314.288 41.745 C 313.387 42.066,314.222 42.527,315.163 42.228 L 316.044 41.949 315.095 41.199 C 313.622 40.036,312.434 39.526,313.699 40.600 M323.206 41.441 C 323.625 41.759,324.145 42.018,324.361 42.018 C 324.578 42.018,324.411 41.759,323.992 41.441 C 323.572 41.124,323.052 40.864,322.836 40.864 C 322.620 40.864,322.786 41.124,323.206 41.441 M88.802 41.650 C 88.490 41.843,88.365 42.131,88.525 42.290 C 88.684 42.450,89.021 42.374,89.273 42.122 C 89.867 41.528,89.535 41.197,88.802 41.650 M91.356 45.956 C 81.212 53.217,75.804 57.835,65.458 68.071 C 62.668 70.832,60.515 73.220,60.674 73.379 C 60.833 73.537,61.135 73.359,61.346 72.983 C 61.556 72.607,61.985 72.299,62.299 72.299 C 62.612 72.299,62.868 72.034,62.868 71.710 C 62.868 70.987,69.906 64.047,70.639 64.047 C 70.929 64.047,71.075 63.900,70.964 63.720 C 70.852 63.539,72.280 61.992,74.135 60.281 C 75.991 58.571,77.707 56.986,77.949 56.760 C 79.115 55.671,85.687 50.482,87.426 49.278 C 88.507 48.530,90.452 47.135,91.749 46.179 C 93.045 45.223,94.321 44.432,94.583 44.421 C 94.846 44.410,95.250 44.047,95.481 43.615 C 96.041 42.570,96.261 42.444,91.356 45.956 M317.790 43.855 C 317.904 44.451,318.097 44.683,318.259 44.421 C 318.545 43.957,322.475 46.624,323.931 48.270 C 324.343 48.735,324.899 49.116,325.168 49.116 C 325.436 49.116,326.210 49.748,326.888 50.520 C 327.566 51.292,328.312 51.859,328.547 51.781 C 328.926 51.655,323.540 47.177,319.211 44.020 L 317.597 42.843 317.790 43.855 M83.902 43.595 C 83.610 44.068,85.144 44.915,85.685 44.580 C 85.955 44.414,85.937 44.147,85.629 43.776 C 85.101 43.140,84.240 43.049,83.902 43.595 M82.765 44.600 C 82.628 44.956,82.766 45.187,83.116 45.187 C 83.752 45.187,83.897 44.573,83.342 44.230 C 83.148 44.110,82.889 44.277,82.765 44.600 M328.094 45.149 C 328.851 45.817,329.636 46.364,329.838 46.365 C 330.351 46.366,328.838 45.003,327.677 44.417 C 326.978 44.064,327.091 44.262,328.094 45.149 M330.340 45.088 C 330.254 45.250,330.314 45.825,330.475 46.365 C 330.635 46.906,330.784 47.143,330.806 46.893 C 330.828 46.628,331.192 46.530,331.678 46.657 C 332.493 46.870,332.496 46.852,331.829 45.834 C 331.146 44.792,330.636 44.536,330.340 45.088 M81.873 46.879 C 81.661 47.258,80.969 47.663,80.335 47.778 C 78.945 48.030,77.588 49.135,78.202 49.515 C 78.803 49.886,77.566 50.833,76.842 50.555 C 76.457 50.407,76.340 50.522,76.486 50.904 C 76.829 51.798,78.131 51.022,81.231 48.075 C 81.497 47.821,81.921 47.546,82.174 47.461 C 82.426 47.377,82.549 47.057,82.446 46.749 C 82.297 46.301,82.182 46.328,81.873 46.879 M332.220 48.585 C 332.868 49.144,334.258 50.372,335.309 51.314 C 336.942 52.778,337.335 52.964,338.019 52.598 C 338.715 52.225,338.792 52.271,338.614 52.951 C 338.454 53.564,338.568 53.690,339.146 53.539 C 339.649 53.407,339.882 53.555,339.882 54.005 C 339.882 54.419,339.700 54.559,339.391 54.383 C 338.885 54.094,340.825 56.403,341.806 57.257 C 342.108 57.520,342.534 57.625,342.751 57.491 C 342.969 57.356,343.033 57.430,342.894 57.655 C 342.755 57.880,342.878 58.260,343.167 58.500 C 343.585 58.847,343.699 58.689,343.726 57.720 C 343.755 56.727,343.629 56.538,343.043 56.691 C 341.929 56.982,340.331 55.287,340.565 54.062 C 340.706 53.325,340.562 52.985,340.025 52.794 C 339.622 52.650,339.001 52.283,338.644 51.977 C 338.287 51.671,337.756 51.454,337.465 51.494 C 336.169 51.672,335.719 51.488,336.346 51.037 C 336.840 50.682,336.822 50.650,336.233 50.840 C 335.809 50.977,335.442 50.836,335.307 50.485 C 335.184 50.164,334.792 49.891,334.437 49.877 C 333.993 49.860,334.067 49.741,334.676 49.497 C 335.943 48.987,335.767 48.615,334.400 48.915 C 333.509 49.111,333.080 48.982,332.545 48.357 C 332.162 47.910,331.667 47.550,331.445 47.557 C 331.223 47.563,331.572 48.026,332.220 48.585 M75.147 52.423 C 74.661 52.888,74.263 53.387,74.263 53.531 C 74.263 53.676,74.733 53.358,75.307 52.826 C 75.881 52.294,76.279 51.795,76.191 51.717 C 76.103 51.639,75.634 51.957,75.147 52.423 M330.462 53.333 C 331.213 54.247,332.004 54.997,332.220 54.998 C 332.646 55.001,333.060 55.394,341.257 63.585 C 350.061 72.382,351.092 73.605,350.007 73.966 C 349.760 74.049,349.701 74.331,349.872 74.608 C 350.040 74.880,350.453 74.997,350.788 74.868 C 351.462 74.610,353.242 76.059,353.242 76.866 C 353.242 77.142,353.477 77.509,353.764 77.682 C 354.051 77.855,355.390 79.366,356.739 81.041 C 358.089 82.716,359.280 84.086,359.387 84.086 C 359.589 84.086,356.680 80.220,354.623 77.754 C 353.971 76.972,352.819 75.570,352.063 74.637 C 347.748 69.318,338.199 59.586,332.034 54.224 C 329.474 51.997,329.273 51.883,330.462 53.333 M71.341 55.685 C 70.902 56.287,70.514 56.531,70.424 56.262 C 70.254 55.753,69.544 55.613,69.554 56.090 C 69.583 57.485,72.692 56.258,72.692 54.852 C 72.692 54.315,72.053 54.709,71.341 55.685 M346.430 61.690 C 347.673 62.986,348.706 64.047,348.725 64.047 C 348.744 64.047,348.751 63.632,348.741 63.125 C 348.717 61.904,347.845 60.904,346.805 60.904 C 346.343 60.904,345.744 60.550,345.474 60.118 C 345.204 59.686,344.800 59.332,344.576 59.332 C 344.352 59.332,345.186 60.393,346.430 61.690 M63.916 62.541 C 63.520 62.973,63.301 63.432,63.429 63.560 C 63.667 63.798,64.798 62.518,64.821 61.984 C 64.838 61.580,64.744 61.638,63.916 62.541 M350.098 65.815 C 350.831 66.572,351.618 67.185,351.845 67.178 C 352.073 67.171,351.979 66.950,351.636 66.687 C 351.293 66.424,350.801 65.810,350.542 65.324 C 350.283 64.838,349.777 64.440,349.418 64.440 C 348.939 64.440,349.121 64.807,350.098 65.815 M59.804 66.483 C 59.235 67.051,59.191 67.583,59.711 67.583 C 59.920 67.583,60.279 67.230,60.511 66.798 C 60.974 65.932,60.545 65.742,59.804 66.483 M352.362 68.173 C 352.836 69.045,354.428 70.493,354.408 70.035 C 354.391 69.640,353.597 68.690,352.686 67.976 C 351.986 67.428,351.964 67.441,352.362 68.173 M54.473 72.549 C 53.854 73.082,53.437 73.607,53.546 73.716 C 53.654 73.825,54.233 73.460,54.831 72.906 C 56.247 71.593,55.940 71.286,54.473 72.549 M355.599 71.743 C 355.599 72.047,358.445 75.640,358.788 75.769 C 359.555 76.058,359.066 74.954,357.937 73.851 C 357.278 73.207,356.834 72.526,356.950 72.337 C 357.067 72.149,356.810 71.903,356.381 71.791 C 355.951 71.678,355.599 71.657,355.599 71.743 M58.302 75.558 C 55.916 78.201,53.289 81.320,51.286 83.890 C 49.893 85.677,49.800 85.867,50.900 84.676 C 53.207 82.178,53.975 81.291,55.998 78.782 C 57.044 77.485,58.001 76.334,58.125 76.224 C 58.789 75.634,60.224 73.870,60.040 73.870 C 59.922 73.870,59.139 74.630,58.302 75.558 M275.587 75.983 C 274.911 76.291,274.242 76.730,274.101 76.958 C 273.960 77.187,274.337 77.117,274.938 76.803 C 278.355 75.021,281.680 76.129,287.853 81.108 C 290.212 83.011,291.507 83.973,290.731 83.247 C 289.274 81.881,287.090 80.033,285.108 78.490 C 284.482 78.002,283.537 77.180,283.008 76.664 C 281.798 75.481,277.547 75.091,275.587 75.983 M359.966 76.585 C 359.520 76.867,359.574 77.096,360.260 77.832 C 360.722 78.328,361.100 78.858,361.100 79.010 C 361.100 79.511,362.248 79.739,362.524 79.293 C 362.687 79.029,362.614 78.968,362.340 79.137 C 362.068 79.305,361.886 79.162,361.886 78.782 C 361.886 78.432,361.718 78.250,361.513 78.377 C 361.308 78.504,360.948 78.249,360.713 77.811 C 360.426 77.274,360.420 77.014,360.693 77.014 C 360.917 77.014,361.100 76.837,361.100 76.621 C 361.100 76.140,360.689 76.127,359.966 76.585 M272.423 77.802 C 271.950 77.993,271.351 78.556,271.090 79.054 C 270.829 79.553,269.342 81.375,267.786 83.104 C 266.230 84.833,263.756 87.750,262.287 89.587 C 260.819 91.424,259.067 93.479,258.394 94.154 C 257.721 94.828,256.610 96.066,255.924 96.904 C 253.261 100.161,252.677 100.769,252.665 100.295 C 252.658 100.025,252.496 99.804,252.305 99.804 C 251.935 99.804,251.356 101.278,251.437 102.014 C 251.464 102.257,250.650 103.406,249.629 104.568 C 248.608 105.729,248.264 106.240,248.865 105.702 C 249.465 105.164,250.960 103.499,252.188 102.002 C 253.416 100.506,255.835 97.664,257.564 95.687 C 261.951 90.671,266.588 85.229,269.266 81.954 C 270.516 80.425,272.019 78.778,272.606 78.293 C 273.761 77.339,273.737 77.273,272.423 77.802 M130.099 78.186 C 133.509 78.625,135.210 79.844,139.419 84.864 C 144.223 90.594,146.629 93.123,143.982 89.661 C 142.939 88.297,141.943 87.093,141.770 86.986 C 141.596 86.878,141.454 86.437,141.454 86.005 C 141.454 85.572,141.295 85.317,141.100 85.437 C 140.514 85.800,138.302 82.994,138.587 82.250 C 138.773 81.767,138.678 81.654,138.231 81.826 C 137.518 82.100,134.589 79.306,135.061 78.802 C 135.227 78.624,135.098 78.562,134.774 78.665 C 134.450 78.768,133.616 78.615,132.920 78.326 C 132.225 78.036,130.810 77.823,129.777 77.851 L 127.898 77.903 130.099 78.186 M124.178 79.620 C 123.429 80.348,122.685 80.943,122.524 80.943 C 122.364 80.943,121.555 81.606,120.728 82.417 C 118.146 84.946,115.790 86.661,115.615 86.139 C 115.527 85.874,115.271 85.658,115.047 85.658 C 114.795 85.658,114.820 85.877,115.113 86.230 C 115.375 86.545,115.462 87.007,115.308 87.257 C 115.153 87.506,116.379 86.586,118.033 85.211 C 123.740 80.464,124.760 79.694,126.326 78.953 C 127.865 78.226,127.873 78.211,126.719 78.254 C 125.952 78.282,125.064 78.760,124.178 79.620 M45.972 80.747 C 45.972 81.071,46.149 81.336,46.365 81.336 C 46.582 81.336,46.758 81.071,46.758 80.747 C 46.758 80.422,46.582 80.157,46.365 80.157 C 46.149 80.157,45.972 80.422,45.972 80.747 M363.487 82.024 C 364.011 82.618,364.484 83.178,364.538 83.268 C 364.592 83.358,364.738 83.330,364.862 83.206 C 365.146 82.922,363.453 80.943,362.925 80.943 C 362.711 80.943,362.964 81.429,363.487 82.024 M44.794 82.089 C 44.794 82.503,45.015 82.917,45.285 83.007 C 45.668 83.136,45.657 83.317,45.237 83.826 C 44.886 84.251,44.852 84.479,45.139 84.479 C 45.381 84.479,45.580 84.309,45.580 84.102 C 45.580 83.894,45.965 83.365,46.435 82.927 C 46.906 82.489,47.161 82.001,47.003 81.843 C 46.845 81.685,46.551 81.815,46.350 82.133 C 46.043 82.618,45.984 82.600,45.979 82.024 C 45.975 81.645,45.707 81.336,45.383 81.336 C 45.059 81.336,44.794 81.675,44.794 82.089 M292.361 84.726 C 292.383 85.034,293.453 85.964,298.165 89.769 C 299.372 90.744,299.471 90.776,298.773 89.966 C 298.314 89.434,298.013 88.798,298.102 88.554 C 298.195 88.304,297.679 88.000,296.924 87.858 C 296.182 87.719,295.163 87.124,294.647 86.530 C 293.474 85.179,292.331 84.276,292.361 84.726 M360.234 85.656 C 360.603 86.303,361.048 86.833,361.225 86.834 C 361.402 86.836,361.169 86.306,360.707 85.658 C 359.629 84.143,359.373 84.142,360.234 85.656 M365.908 85.437 C 366.409 86.375,367.780 87.876,367.780 87.487 C 367.780 87.330,367.494 86.766,367.145 86.234 C 366.561 85.342,366.561 85.265,367.145 85.265 C 367.494 85.265,367.780 85.096,367.780 84.888 C 367.780 84.681,367.267 84.548,366.641 84.593 C 365.644 84.666,365.552 84.771,365.908 85.437 M42.786 86.935 C 42.324 87.815,42.326 87.815,43.165 87.071 C 44.101 86.239,44.187 86.051,43.629 86.051 C 43.420 86.051,43.041 86.449,42.786 86.935 M46.261 90.483 C 42.809 95.156,40.205 98.959,38.938 101.179 L 38.041 102.750 39.060 101.648 C 39.620 101.042,40.079 100.321,40.079 100.047 C 40.079 99.772,40.530 99.124,41.081 98.606 C 41.633 98.088,42.410 96.952,42.808 96.081 C 43.206 95.211,43.959 94.057,44.482 93.516 C 45.004 92.975,46.099 91.488,46.916 90.211 C 48.041 88.452,48.487 88.023,48.753 88.443 C 49.022 88.869,49.105 88.799,49.110 88.147 C 49.113 87.678,49.328 87.225,49.588 87.138 C 49.905 87.032,49.924 86.897,49.644 86.724 C 49.409 86.579,47.935 88.216,46.261 90.483 M361.343 87.841 C 360.980 88.785,361.061 89.076,361.499 88.409 C 361.843 87.885,361.929 87.885,362.273 88.409 C 362.486 88.733,362.663 88.799,362.666 88.555 C 362.677 87.716,361.611 87.141,361.343 87.841 M113.641 88.167 C 113.149 88.430,112.869 88.769,113.020 88.920 C 113.171 89.071,113.094 89.194,112.849 89.194 C 112.605 89.194,112.200 89.592,111.949 90.079 C 111.600 90.754,111.851 90.639,113.011 89.587 C 113.846 88.831,114.605 88.168,114.698 88.114 C 115.343 87.737,114.352 87.786,113.641 88.167 M40.275 90.373 C 39.884 90.806,39.762 91.159,40.004 91.159 C 40.246 91.159,40.633 90.806,40.864 90.373 C 41.096 89.941,41.218 89.587,41.136 89.587 C 41.053 89.587,40.666 89.941,40.275 90.373 M363.065 89.690 C 363.065 89.833,364.042 91.385,365.236 93.139 C 366.430 94.893,367.359 96.540,367.299 96.800 C 367.239 97.060,367.316 97.268,367.469 97.261 C 367.622 97.255,368.197 97.859,368.746 98.603 C 369.295 99.347,369.745 99.767,369.745 99.535 C 369.745 99.303,369.479 98.894,369.155 98.625 C 368.831 98.356,368.566 97.993,368.566 97.819 C 368.566 97.504,364.074 90.521,363.410 89.804 C 363.220 89.598,363.065 89.547,363.065 89.690 M369.352 90.759 C 369.352 90.958,369.583 91.261,369.866 91.434 C 370.149 91.607,370.612 92.323,370.896 93.026 C 371.384 94.235,372.102 94.761,372.102 93.910 C 372.102 93.694,371.961 93.517,371.788 93.517 C 371.615 93.517,371.256 92.915,370.990 92.179 C 370.546 90.951,369.352 89.916,369.352 90.759 M110.118 91.044 C 109.632 91.137,109.234 91.467,109.234 91.776 C 109.234 92.085,108.958 92.338,108.621 92.338 C 108.284 92.338,108.103 92.491,108.219 92.678 C 108.460 93.068,106.980 94.537,106.664 94.222 C 106.551 94.108,105.667 94.816,104.702 95.795 C 103.736 96.775,102.829 97.459,102.687 97.317 C 102.544 97.174,102.007 97.675,101.494 98.430 C 100.981 99.186,100.435 99.804,100.281 99.804 C 100.126 99.804,99.470 100.267,98.821 100.832 C 98.173 101.397,97.167 102.029,96.586 102.237 C 95.965 102.459,95.610 102.825,95.725 103.125 C 95.833 103.406,95.558 104.233,95.113 104.962 C 94.669 105.690,94.309 106.552,94.313 106.876 C 94.317 107.200,94.654 106.730,95.062 105.830 C 95.951 103.874,96.551 103.265,102.358 98.428 C 103.654 97.347,104.804 96.375,104.912 96.267 C 105.020 96.159,105.904 95.429,106.876 94.644 C 109.075 92.870,111.460 90.763,111.198 90.826 C 111.090 90.852,110.604 90.950,110.118 91.044 M301.223 92.202 C 305.905 96.581,307.323 97.605,307.039 96.405 C 306.702 94.977,306.093 94.277,306.082 95.305 C 306.073 96.043,306.049 96.041,305.394 95.249 C 305.021 94.797,304.052 94.031,303.242 93.547 C 302.431 93.063,301.763 92.549,301.756 92.404 C 301.749 92.260,301.263 91.815,300.675 91.416 C 300.088 91.018,300.334 91.371,301.223 92.202 M146.955 93.684 C 147.495 94.333,148.127 95.047,148.360 95.271 C 148.592 95.495,149.741 96.912,150.914 98.421 C 152.086 99.929,153.310 101.450,153.635 101.800 C 153.959 102.150,155.373 103.818,156.778 105.505 C 159.762 109.091,163.366 112.966,161.707 110.806 C 160.152 108.780,158.794 107.183,156.483 104.662 C 155.349 103.425,154.420 102.256,154.420 102.065 C 154.420 101.874,153.890 101.271,153.242 100.726 C 152.593 100.180,152.063 99.504,152.063 99.223 C 152.063 98.942,150.693 97.315,149.018 95.608 C 147.343 93.901,146.415 93.035,146.955 93.684 M308.620 98.625 C 312.166 102.956,311.695 107.230,307.088 112.512 C 305.176 114.705,304.726 115.409,305.449 115.080 C 305.997 114.830,306.708 114.073,307.028 113.397 C 307.349 112.722,308.083 111.730,308.660 111.193 C 312.289 107.814,312.163 101.270,308.406 98.035 C 307.708 97.434,307.758 97.573,308.620 98.625 M373.674 97.573 C 373.674 97.706,374.011 98.415,374.423 99.148 C 376.314 102.515,376.724 102.862,376.711 101.081 C 376.707 100.486,376.626 100.221,376.531 100.491 C 376.268 101.240,375.574 101.076,375.699 100.295 C 375.759 99.917,375.328 99.095,374.741 98.469 C 374.154 97.843,373.674 97.440,373.674 97.573 M34.770 98.238 C 34.634 98.458,34.359 98.536,34.158 98.412 C 33.956 98.287,33.792 98.373,33.792 98.602 C 33.792 99.242,35.250 99.094,35.506 98.428 C 35.758 97.770,35.156 97.614,34.770 98.238 M33.936 100.079 C 33.817 100.536,33.381 100.998,32.968 101.106 C 32.505 101.227,32.302 101.523,32.437 101.878 C 32.559 102.194,32.383 102.728,32.046 103.065 C 31.366 103.745,31.265 104.126,31.764 104.126 C 32.226 104.126,33.064 102.180,32.791 101.739 C 32.668 101.539,32.836 101.375,33.165 101.375 C 33.818 101.375,34.792 99.887,34.397 99.492 C 34.263 99.358,34.056 99.622,33.936 100.079 M370.020 100.884 C 370.158 101.262,370.824 102.456,371.501 103.536 C 372.177 104.617,372.978 106.111,373.282 106.856 C 374.068 108.786,376.088 112.452,376.266 112.273 C 376.502 112.038,370.283 100.196,369.924 100.196 C 369.839 100.196,369.882 100.506,370.020 100.884 M37.046 104.112 C 36.661 104.811,35.573 106.612,34.628 108.113 C 33.684 109.613,33.016 110.946,33.144 111.074 C 33.272 111.203,33.555 110.838,33.774 110.264 C 33.992 109.689,34.616 109.050,35.160 108.844 C 35.883 108.569,36.149 108.179,36.149 107.398 C 36.149 106.810,36.618 105.653,37.190 104.827 C 37.762 104.001,38.122 103.216,37.988 103.083 C 37.855 102.950,37.431 103.413,37.046 104.112 M29.628 105.883 C 29.820 106.646,29.744 106.806,29.278 106.627 C 28.951 106.502,28.684 106.595,28.684 106.834 C 28.684 107.073,28.855 107.269,29.064 107.269 C 29.274 107.269,29.328 107.579,29.185 107.957 C 28.952 108.572,28.984 108.581,29.492 108.040 C 31.064 106.364,31.297 104.912,29.993 104.912 C 29.542 104.912,29.447 105.163,29.628 105.883 M246.749 107.775 C 246.204 108.256,245.497 109.017,245.178 109.465 C 244.432 110.513,240.988 114.551,239.587 116.020 C 238.993 116.643,238.507 117.301,238.507 117.483 C 238.507 117.664,238.367 117.872,238.196 117.944 C 238.025 118.016,237.385 118.738,236.774 119.548 C 236.163 120.359,235.419 121.022,235.120 121.022 C 234.822 121.022,234.578 121.308,234.578 121.658 C 234.578 122.008,233.826 123.025,232.908 123.917 C 231.989 124.810,230.984 126.033,230.673 126.635 C 230.339 127.282,229.889 127.645,229.572 127.523 C 229.277 127.410,229.144 127.492,229.275 127.705 C 229.559 128.164,228.947 129.091,226.871 131.349 C 224.558 133.864,224.129 134.449,224.797 134.174 C 225.098 134.051,225.874 133.276,226.523 132.452 C 229.515 128.651,232.434 125.061,233.260 124.165 C 233.759 123.625,235.787 121.238,237.767 118.861 C 239.747 116.483,241.480 114.450,241.618 114.342 C 241.999 114.045,248.009 106.874,247.866 106.889 C 247.797 106.895,247.295 107.294,246.749 107.775 M93.672 108.669 C 93.533 109.223,93.606 110.063,93.834 110.536 C 94.190 111.272,94.253 111.129,94.276 109.528 C 94.305 107.468,94.061 107.120,93.672 108.669 M31.274 114.159 C 29.634 117.142,29.379 118.118,30.918 115.521 C 31.494 114.548,32.087 113.664,32.236 113.556 C 32.572 113.313,33.129 111.591,32.872 111.591 C 32.769 111.591,32.050 112.747,31.274 114.159 M376.437 113.017 C 376.421 113.594,377.609 116.445,377.972 116.699 C 378.126 116.807,378.668 117.910,379.177 119.150 C 379.685 120.390,380.165 121.342,380.242 121.264 C 380.319 121.187,380.034 120.261,379.608 119.206 C 378.528 116.536,376.452 112.482,376.437 113.017 M25.147 113.536 C 25.147 113.727,25.322 113.942,25.535 114.014 C 25.767 114.093,25.697 114.581,25.362 115.226 C 25.054 115.820,24.950 116.306,25.132 116.306 C 25.314 116.306,25.658 115.750,25.895 115.069 C 26.426 113.544,26.440 113.684,25.737 113.414 C 25.413 113.290,25.147 113.344,25.147 113.536 M164.682 114.833 C 165.005 115.103,166.277 116.562,167.509 118.075 C 169.796 120.884,173.000 124.509,172.126 123.298 C 171.859 122.929,171.758 122.439,171.901 122.208 C 172.044 121.977,172.015 121.834,171.837 121.890 C 171.435 122.016,169.352 120.221,169.352 119.749 C 169.352 119.559,169.528 119.513,169.745 119.646 C 169.961 119.780,170.138 119.683,170.138 119.431 C 170.138 119.179,169.872 119.075,169.548 119.199 C 169.224 119.323,168.959 119.294,168.959 119.133 C 168.959 118.733,164.779 114.342,164.399 114.342 C 164.231 114.342,164.358 114.563,164.682 114.833 M95.896 115.324 C 97.363 117.353,100.367 120.861,100.908 121.177 C 101.474 121.508,97.293 116.409,95.947 115.128 C 95.386 114.594,95.381 114.612,95.896 115.324 M382.930 116.012 C 383.261 117.090,383.427 117.293,383.729 116.991 C 384.068 116.652,383.513 115.128,383.051 115.128 C 382.825 115.128,382.774 115.503,382.930 116.012 M300.128 120.727 C 297.837 123.374,296.005 125.589,296.058 125.648 C 296.343 125.966,297.396 125.177,297.764 124.369 C 298.194 123.425,300.025 121.273,302.586 118.702 C 303.745 117.538,304.799 115.914,304.394 115.914 C 304.339 115.914,302.420 118.080,300.128 120.727 M384.347 117.604 C 384.034 117.982,384.120 118.121,384.696 118.165 C 385.480 118.224,385.737 117.702,385.113 117.316 C 384.922 117.198,384.577 117.327,384.347 117.604 M29.154 118.293 C 28.362 119.561,27.881 121.022,28.256 121.022 C 28.678 121.022,29.962 118.372,29.790 117.857 C 29.720 117.648,29.434 117.845,29.154 118.293 M385.517 121.415 C 385.517 121.739,385.669 122.358,385.855 122.790 C 386.067 123.285,386.192 123.358,386.192 122.986 C 386.192 122.662,386.040 122.043,385.855 121.611 C 385.642 121.116,385.517 121.043,385.517 121.415 M101.690 122.279 C 101.949 122.538,102.164 123.201,102.167 123.752 C 102.171 124.447,102.275 124.594,102.504 124.233 C 102.847 123.691,106.082 127.028,106.088 127.930 C 106.089 128.163,106.532 128.591,107.073 128.880 C 107.613 129.169,108.055 129.632,108.055 129.909 C 108.055 130.186,108.276 130.554,108.547 130.727 C 108.817 130.900,109.625 131.749,110.341 132.613 C 111.058 133.477,112.318 134.980,113.143 135.953 C 116.094 139.432,118.102 141.795,119.843 143.834 C 120.815 144.974,121.870 146.274,122.187 146.725 C 123.089 148.009,124.141 149.075,124.324 148.891 C 124.416 148.799,123.401 147.473,122.068 145.946 C 120.736 144.419,117.171 140.199,114.145 136.569 C 111.120 132.940,108.228 129.504,107.718 128.934 C 107.209 128.364,105.634 126.528,104.219 124.853 C 102.803 123.178,101.549 121.807,101.432 121.807 C 101.314 121.807,101.430 122.020,101.690 122.279 M380.370 122.275 C 380.361 122.641,380.546 123.059,380.781 123.204 C 381.016 123.349,381.124 123.790,381.021 124.184 C 380.917 124.579,381.078 124.994,381.379 125.110 C 382.125 125.396,382.039 124.629,381.139 122.986 C 380.694 122.172,380.380 121.882,380.370 122.275 M21.064 123.608 C 20.634 124.727,20.838 125.163,21.427 124.385 C 21.744 123.965,22.004 123.479,22.004 123.304 C 22.004 122.742,21.310 122.966,21.064 123.608 M25.030 126.950 C 24.216 128.718,23.614 130.228,23.691 130.306 C 23.928 130.542,25.933 127.279,25.933 126.658 C 25.933 126.339,26.121 125.726,26.352 125.296 C 26.582 124.866,26.712 124.339,26.640 124.125 C 26.569 123.911,25.845 125.183,25.030 126.950 M174.895 126.963 C 176.226 128.464,177.411 129.596,177.530 129.477 C 177.648 129.359,177.099 128.671,176.310 127.948 C 175.521 127.225,174.707 126.191,174.501 125.650 C 174.296 125.108,173.755 124.568,173.301 124.449 C 172.712 124.295,173.171 125.019,174.895 126.963 M381.970 125.933 C 381.978 126.149,382.324 127.033,382.739 127.898 C 383.155 128.762,383.385 129.028,383.251 128.487 C 382.974 127.375,381.950 125.332,381.970 125.933 M19.492 127.144 C 19.168 127.989,19.188 128.094,19.670 128.094 C 19.898 128.094,19.976 127.917,19.843 127.701 C 19.709 127.485,19.787 127.308,20.016 127.308 C 20.245 127.308,20.432 127.132,20.432 126.916 C 20.432 126.294,19.755 126.459,19.492 127.144 M291.215 131.192 C 286.014 137.198,285.888 137.378,286.667 137.677 C 287.045 137.822,287.171 137.747,287.003 137.476 C 286.857 137.238,286.892 136.931,287.081 136.793 C 287.271 136.655,287.603 136.252,287.819 135.898 C 288.035 135.543,289.538 133.709,291.159 131.822 C 294.401 128.047,295.622 126.523,295.403 126.523 C 295.324 126.523,293.439 128.624,291.215 131.192 M18.175 129.961 C 18.185 130.663,18.344 131.238,18.527 131.238 C 18.934 131.238,18.915 130.521,18.480 129.470 C 18.216 128.832,18.158 128.925,18.175 129.961 M383.518 130.170 C 383.506 130.555,383.765 131.510,384.092 132.293 C 384.419 133.076,384.597 133.805,384.488 133.914 C 384.379 134.023,384.492 134.356,384.739 134.654 C 384.986 134.952,385.515 136.117,385.913 137.244 C 386.432 138.709,386.568 138.901,386.390 137.919 C 386.056 136.065,383.543 129.288,383.518 130.170 M182.959 136.346 C 185.928 139.912,189.209 143.815,190.249 145.021 C 193.036 148.249,193.867 146.779,180.406 162.426 C 178.757 164.343,177.230 166.113,177.014 166.358 C 172.148 171.882,169.374 175.246,169.682 175.246 C 169.896 175.246,170.689 174.403,171.446 173.372 C 173.059 171.175,174.460 169.826,174.460 170.470 C 174.460 170.719,174.726 170.923,175.052 170.923 C 175.549 170.923,175.565 170.792,175.151 170.113 C 174.720 169.407,174.784 169.190,175.639 168.436 C 176.179 167.960,177.320 166.645,178.175 165.514 C 179.030 164.383,179.849 163.458,179.994 163.458 C 180.140 163.458,181.011 162.461,181.931 161.244 C 182.850 160.026,184.728 157.870,186.104 156.453 C 187.480 155.036,188.605 153.748,188.605 153.590 C 188.605 153.433,189.392 152.517,190.353 151.556 C 192.171 149.738,192.830 148.231,192.322 147.054 C 192.158 146.675,192.048 145.923,192.077 145.383 C 192.123 144.515,192.091 144.491,191.804 145.178 C 191.484 145.943,191.472 145.942,191.038 145.131 C 190.796 144.678,190.718 144.187,190.866 144.039 C 191.014 143.891,190.859 143.876,190.520 144.006 C 190.112 144.162,189.543 143.766,188.824 142.824 C 188.230 142.044,187.401 141.019,186.983 140.546 C 186.565 140.073,185.529 138.899,184.681 137.937 C 183.460 136.554,183.232 136.075,183.591 135.643 C 183.948 135.214,183.913 135.126,183.430 135.230 C 183.074 135.308,181.713 134.209,180.188 132.613 C 178.726 131.083,179.956 132.740,182.959 136.346 M22.052 134.235 C 21.538 135.363,21.822 136.089,22.412 135.156 C 22.761 134.604,22.936 133.202,22.656 133.202 C 22.583 133.202,22.311 133.667,22.052 134.235 M389.784 134.533 C 389.784 134.616,390.048 135.191,390.371 135.810 C 390.951 136.923,391.223 136.302,390.724 135.003 C 390.519 134.467,389.784 134.100,389.784 134.533 M222.804 136.051 L 221.885 137.328 223.123 136.174 C 224.436 134.951,224.552 134.774,224.042 134.774 C 223.867 134.774,223.310 135.349,222.804 136.051 M20.694 137.590 C 20.339 138.495,20.112 139.300,20.191 139.379 C 20.269 139.457,20.629 138.785,20.989 137.885 C 21.349 136.984,21.576 136.179,21.492 136.096 C 21.409 136.013,21.050 136.685,20.694 137.590 M283.476 140.177 C 280.510 143.589,278.850 145.802,279.436 145.564 C 279.725 145.446,280.570 144.518,281.315 143.500 C 282.998 141.203,284.180 140.184,284.522 140.737 C 284.693 141.014,284.861 141.005,285.043 140.710 C 285.191 140.471,285.124 140.275,284.895 140.275 C 284.275 140.275,284.393 139.451,285.130 138.636 C 285.487 138.241,285.703 137.917,285.610 137.917 C 285.517 137.917,284.556 138.934,283.476 140.177 M391.356 139.489 C 391.356 139.921,391.532 140.275,391.749 140.275 C 391.965 140.275,392.141 139.921,392.141 139.489 C 392.141 139.057,391.965 138.703,391.749 138.703 C 391.532 138.703,391.356 139.057,391.356 139.489 M218.632 140.906 C 218.001 141.686,216.827 143.056,216.023 143.951 C 215.219 144.847,213.572 146.817,212.364 148.330 C 211.156 149.843,209.869 151.349,209.504 151.677 C 209.139 152.006,207.720 153.686,206.350 155.410 C 203.270 159.288,205.791 156.604,211.107 150.345 C 213.102 147.996,215.928 144.677,217.387 142.969 C 218.846 141.262,220.039 139.780,220.039 139.677 C 220.039 139.277,219.738 139.540,218.632 140.906 M386.668 139.931 C 386.653 140.282,386.906 141.321,387.230 142.240 C 387.554 143.158,387.819 144.408,387.819 145.016 C 387.819 145.625,387.978 146.221,388.173 146.341 C 388.367 146.461,388.736 147.488,388.993 148.624 C 389.670 151.619,389.835 152.143,390.035 151.943 C 390.250 151.727,388.450 144.488,387.426 141.454 C 387.025 140.265,386.684 139.580,386.668 139.931 M18.899 142.691 C 18.371 144.205,18.366 144.081,18.968 144.312 C 19.320 144.447,19.468 144.052,19.468 142.979 C 19.468 141.137,19.445 141.125,18.899 142.691 M392.927 145.360 C 392.927 145.805,393.104 146.169,393.320 146.169 C 393.536 146.169,393.713 145.914,393.713 145.603 C 393.713 145.291,393.536 144.927,393.320 144.794 C 393.104 144.660,392.927 144.915,392.927 145.360 M17.113 147.937 C 16.742 148.910,16.505 149.908,16.588 150.156 C 16.670 150.403,16.958 149.867,17.229 148.965 C 17.499 148.063,17.888 147.429,18.094 147.556 C 18.299 147.683,18.468 147.423,18.468 146.978 C 18.468 145.618,17.825 146.073,17.113 147.937 M277.934 146.671 C 277.752 146.979,276.602 148.363,275.378 149.746 C 273.089 152.332,271.494 154.188,266.411 160.185 C 264.793 162.093,262.229 165.085,260.713 166.834 C 254.148 174.409,251.404 177.733,252.472 176.817 C 253.102 176.277,253.872 175.481,254.184 175.049 C 254.495 174.617,255.516 173.515,256.452 172.600 C 257.388 171.685,258.153 170.789,258.153 170.608 C 258.153 170.081,260.340 167.780,260.841 167.780 C 261.091 167.780,261.297 167.461,261.297 167.071 C 261.297 166.006,264.035 163.441,264.083 164.461 C 264.102 164.883,264.293 164.610,264.509 163.851 C 265.061 161.906,268.893 157.171,269.915 157.171 C 270.145 157.171,270.334 156.906,270.334 156.582 C 270.334 156.257,270.469 155.992,270.634 155.992 C 270.799 155.992,271.108 155.654,271.321 155.241 C 271.535 154.827,273.275 152.695,275.189 150.502 C 277.103 148.309,278.578 146.424,278.467 146.312 C 278.356 146.201,278.116 146.362,277.934 146.671 M124.802 149.757 C 125.179 150.458,126.348 151.852,132.107 158.478 C 134.899 161.690,135.864 163.066,135.700 163.605 C 135.549 164.100,135.625 164.250,135.930 164.062 C 136.421 163.758,137.636 164.862,139.049 166.897 C 139.537 167.599,140.322 168.374,140.794 168.618 C 141.742 169.108,141.960 169.395,137.903 164.820 C 136.303 163.016,135.299 161.814,131.827 157.550 C 128.120 152.996,124.212 148.662,124.802 149.757 M15.542 153.670 C 15.173 154.986,14.961 156.153,15.072 156.264 C 15.254 156.446,15.601 155.367,16.327 152.358 C 16.834 150.257,16.204 151.310,15.542 153.670 M394.499 152.409 C 394.499 152.842,394.676 153.305,394.892 153.438 C 395.108 153.572,395.285 153.327,395.285 152.895 C 395.285 152.463,395.108 152.000,394.892 151.866 C 394.676 151.733,394.499 151.977,394.499 152.409 M390.361 155.599 C 390.661 157.962,391.391 160.803,391.636 160.558 C 391.821 160.373,390.558 153.916,390.281 153.635 C 390.175 153.527,390.211 154.411,390.361 155.599 M9.430 157.367 C 9.430 157.692,9.607 157.957,9.823 157.957 C 10.039 157.957,10.216 157.692,10.216 157.367 C 10.216 157.043,10.039 156.778,9.823 156.778 C 9.607 156.778,9.430 157.043,9.430 157.367 M395.705 157.442 C 395.690 157.916,395.855 158.413,396.071 158.546 C 396.535 158.833,396.535 158.449,396.071 157.367 C 395.745 156.610,395.732 156.612,395.705 157.442 M13.804 160.078 C 13.540 161.125,13.409 162.066,13.512 162.170 C 13.774 162.432,14.619 159.181,14.434 158.625 C 14.351 158.377,14.067 159.030,13.804 160.078 M202.486 159.861 C 200.835 161.524,195.162 168.101,192.928 170.943 C 192.173 171.905,190.802 173.451,189.883 174.380 C 188.964 175.308,188.212 176.206,188.212 176.374 C 188.212 176.851,186.450 178.389,185.904 178.389 C 185.635 178.389,185.529 178.574,185.669 178.799 C 185.808 179.025,185.696 179.511,185.420 179.880 C 184.137 181.593,186.929 178.549,190.572 174.263 C 196.022 167.851,197.460 166.179,200.970 162.181 C 203.925 158.815,204.692 157.640,202.486 159.861 M391.840 162.672 C 391.840 163.428,391.921 163.738,392.019 163.360 C 392.118 162.981,392.118 162.362,392.019 161.984 C 391.921 161.606,391.840 161.916,391.840 162.672 M13.058 163.851 C 13.058 164.607,13.139 164.917,13.237 164.538 C 13.336 164.160,13.336 163.541,13.237 163.163 C 13.139 162.785,13.058 163.094,13.058 163.851 M396.464 163.631 C 396.464 163.942,396.640 164.307,396.857 164.440 C 397.073 164.574,397.250 164.319,397.250 163.874 C 397.250 163.429,397.073 163.065,396.857 163.065 C 396.640 163.065,396.464 163.320,396.464 163.631 M8.067 164.359 C 7.899 164.746,7.872 165.174,8.006 165.308 C 8.405 165.707,8.727 165.147,8.543 164.373 C 8.381 163.686,8.359 163.686,8.067 164.359 M12.041 168.899 C 11.656 170.920,11.415 172.646,11.505 172.736 C 11.797 173.028,13.039 167.123,12.888 166.161 C 12.807 165.647,12.426 166.879,12.041 168.899 M392.438 167.976 C 392.541 168.517,392.694 168.959,392.777 168.959 C 392.860 168.959,392.927 168.517,392.927 167.976 C 392.927 167.436,392.775 166.994,392.589 166.994 C 392.403 166.994,392.335 167.436,392.438 167.976 M141.508 169.891 C 141.586 170.296,142.446 171.264,143.418 172.042 C 145.172 173.445,144.996 173.137,142.440 170.334 C 141.628 169.443,141.400 169.335,141.508 169.891 M393.210 173.674 C 393.731 183.269,394.061 186.823,393.848 180.550 C 393.738 177.308,393.498 173.507,393.316 172.102 C 393.059 170.114,393.035 170.462,393.210 173.674 M6.287 172.692 C 6.287 173.016,6.464 173.281,6.680 173.281 C 6.896 173.281,7.073 173.016,7.073 172.692 C 7.073 172.367,6.896 172.102,6.680 172.102 C 6.464 172.102,6.287 172.367,6.287 172.692 M11.061 174.116 C 11.028 174.683,10.914 175.744,10.807 176.473 L 10.612 177.800 11.025 176.481 C 11.253 175.755,11.367 174.695,11.279 174.123 L 11.120 173.084 11.061 174.116 M144.990 174.067 C 144.990 174.283,145.167 174.460,145.383 174.460 C 145.599 174.460,145.790 174.946,145.807 175.540 C 145.824 176.135,145.927 176.401,146.035 176.133 C 146.185 175.762,146.436 175.750,147.085 176.084 C 147.685 176.393,147.537 176.102,146.583 175.098 C 145.117 173.556,144.990 173.474,144.990 174.067 M168.166 176.719 C 164.989 180.760,158.499 187.819,157.960 187.819 C 157.603 187.819,155.999 186.272,154.398 184.381 C 152.796 182.490,150.898 180.299,150.179 179.512 C 149.460 178.725,148.606 177.752,148.281 177.351 C 147.856 176.827,147.780 176.804,148.010 177.270 C 148.186 177.626,149.833 179.629,151.670 181.720 C 153.507 183.811,155.169 185.862,155.365 186.277 C 155.560 186.693,155.880 187.033,156.075 187.033 C 156.271 187.033,156.331 187.196,156.208 187.394 C 155.118 189.158,159.480 187.914,160.666 186.123 C 161.343 185.099,165.534 180.321,167.770 178.024 C 168.521 177.252,169.168 176.400,169.209 176.130 C 169.318 175.402,169.109 175.521,168.166 176.719 M398.035 179.348 C 398.035 180.549,398.212 181.532,398.428 181.532 C 398.644 181.532,398.821 180.659,398.821 179.591 C 398.821 178.523,398.644 177.540,398.428 177.407 C 398.184 177.256,398.035 177.992,398.035 179.348 M248.110 181.609 C 246.394 183.586,244.284 186.013,243.421 187.003 C 242.558 187.992,242.219 188.492,242.667 188.113 C 243.116 187.734,243.601 187.543,243.745 187.687 C 243.890 187.832,244.008 187.677,244.008 187.343 C 244.008 187.009,244.715 186.006,245.580 185.116 C 246.444 184.225,247.151 183.400,247.151 183.283 C 247.151 183.089,249.019 180.944,250.819 179.073 C 251.215 178.661,251.470 178.254,251.385 178.169 C 251.300 178.084,249.826 179.632,248.110 181.609 M10.323 179.961 C 10.323 180.933,10.400 181.331,10.493 180.845 C 10.587 180.359,10.587 179.563,10.493 179.077 C 10.400 178.590,10.323 178.988,10.323 179.961 M181.736 184.104 C 180.228 185.931,178.872 187.426,178.723 187.426 C 178.575 187.426,178.083 188.025,177.631 188.757 C 177.178 189.489,176.457 190.179,176.027 190.292 C 175.597 190.404,175.246 190.788,175.246 191.146 C 175.246 191.503,175.069 191.686,174.853 191.552 C 174.637 191.418,174.460 191.594,174.460 191.943 C 174.460 192.292,173.367 193.847,172.031 195.399 C 170.695 196.951,169.460 198.400,169.287 198.619 C 167.206 201.244,166.904 201.516,166.288 201.319 C 165.801 201.163,165.757 201.204,166.125 201.469 C 166.513 201.748,166.331 202.164,165.339 203.255 C 164.629 204.037,163.272 205.655,162.325 206.849 C 161.377 208.044,159.997 209.379,159.257 209.816 C 158.516 210.252,158.025 210.794,158.164 211.019 C 158.303 211.245,158.196 211.731,157.925 212.100 C 156.754 213.694,160.113 209.975,164.594 204.715 C 180.374 186.195,181.134 185.310,184.417 181.631 C 184.851 181.144,185.042 180.754,184.843 180.764 C 184.643 180.774,183.245 182.277,181.736 184.104 M9.922 183.301 C 9.927 184.165,10.007 184.472,10.101 183.984 C 10.195 183.495,10.192 182.788,10.093 182.412 C 9.995 182.036,9.918 182.436,9.922 183.301 M4.960 185.000 C 4.786 185.503,4.748 186.018,4.876 186.146 C 5.283 186.553,5.569 185.953,5.420 185.004 L 5.276 184.086 4.960 185.000 M398.974 189.980 C 398.975 192.790,399.037 193.888,399.113 192.420 C 399.189 190.952,399.188 188.653,399.112 187.312 C 399.035 185.970,398.973 187.171,398.974 189.980 M9.221 192.829 C 8.918 200.033,9.185 219.532,9.593 219.940 C 10.091 220.438,10.119 219.693,9.745 215.914 C 9.522 213.662,9.447 206.406,9.568 198.919 C 9.802 184.477,9.670 182.160,9.221 192.829 M393.750 194.695 C 393.727 198.802,393.547 203.222,393.351 204.519 C 392.913 207.424,392.395 215.594,392.667 215.322 C 393.360 214.630,394.655 190.842,394.122 188.605 C 393.906 187.699,393.779 189.779,393.750 194.695 M240.874 190.079 C 240.369 190.673,238.873 192.397,237.550 193.910 C 233.504 198.535,231.735 200.786,232.147 200.786 C 232.363 200.786,233.198 199.869,234.003 198.748 C 235.574 196.562,237.356 194.515,239.906 191.967 C 241.236 190.638,242.341 188.998,241.905 188.998 C 241.843 188.998,241.379 189.484,240.874 190.079 M4.358 192.554 L 4.393 194.303 4.776 192.972 C 5.036 192.066,5.025 191.508,4.740 191.224 C 4.445 190.928,4.333 191.318,4.358 192.554 M398.035 202.381 C 398.035 203.606,398.186 204.275,398.428 204.126 C 398.644 203.992,398.821 203.098,398.821 202.138 C 398.821 201.178,398.644 200.393,398.428 200.393 C 398.212 200.393,398.035 201.287,398.035 202.381 M229.868 202.941 C 229.138 203.694,228.640 204.410,228.761 204.531 C 228.883 204.652,229.549 204.036,230.241 203.162 C 231.787 201.209,231.634 201.119,229.868 202.941 M226.276 207.151 C 225.331 208.275,223.851 210.005,222.986 210.995 C 222.122 211.985,220.619 213.746,219.646 214.909 C 218.674 216.072,215.049 220.286,211.591 224.272 C 208.134 228.258,205.040 231.898,204.716 232.361 C 204.393 232.824,203.801 233.556,203.400 233.988 C 203.000 234.420,200.622 237.161,198.115 240.079 C 195.608 242.996,192.336 246.753,190.843 248.428 C 189.350 250.103,188.280 251.470,188.465 251.467 C 188.851 251.459,190.179 250.109,191.773 248.103 C 192.379 247.340,193.019 246.682,193.196 246.639 C 193.372 246.597,193.478 246.446,193.431 246.305 C 193.384 246.164,193.638 245.810,193.996 245.519 C 194.561 245.060,194.612 245.080,194.388 245.678 C 194.246 246.058,194.314 246.365,194.540 246.365 C 194.765 246.365,194.878 246.056,194.792 245.678 C 194.638 245.008,195.636 243.384,197.375 241.478 C 198.810 239.904,201.852 236.433,203.185 234.849 C 204.139 233.716,204.531 233.477,204.802 233.867 C 205.047 234.219,205.087 234.121,204.930 233.558 C 204.771 232.985,205.022 232.414,205.754 231.681 C 206.334 231.102,207.215 230.075,207.713 229.400 C 208.731 228.020,213.378 222.798,215.029 221.177 C 215.624 220.594,216.110 219.952,216.110 219.750 C 216.110 219.548,216.596 218.940,217.191 218.397 C 218.652 217.064,220.039 215.395,220.039 214.970 C 220.039 214.406,221.148 214.148,221.378 214.659 C 221.504 214.940,221.568 214.892,221.537 214.538 C 221.453 213.579,222.287 211.909,223.154 211.302 C 223.598 210.991,224.360 210.183,224.849 209.506 C 225.337 208.829,226.326 207.563,227.047 206.692 C 227.767 205.821,228.275 205.108,228.176 205.108 C 228.076 205.108,227.221 206.028,226.276 207.151 M397.742 209.234 C 397.746 210.098,397.826 210.406,397.920 209.917 C 398.014 209.428,398.011 208.721,397.912 208.345 C 397.814 207.969,397.737 208.369,397.742 209.234 M243.011 210.524 C 242.570 210.895,241.633 212.038,240.929 213.065 C 240.224 214.091,239.503 214.931,239.326 214.931 C 239.149 214.931,238.554 215.594,238.004 216.405 C 237.454 217.215,236.326 218.597,235.496 219.475 C 232.606 222.536,230.216 225.335,227.995 228.262 C 227.245 229.250,226.221 230.279,225.720 230.549 C 225.218 230.818,224.688 231.437,224.542 231.924 C 224.395 232.411,223.808 233.345,223.238 234.000 C 222.667 234.655,222.921 234.479,223.801 233.607 C 224.681 232.736,226.272 230.948,227.337 229.633 C 228.402 228.319,231.845 224.252,234.988 220.596 C 238.130 216.940,241.395 213.109,242.242 212.083 C 243.844 210.140,244.744 209.799,245.587 210.815 C 245.861 211.144,246.179 211.319,246.294 211.204 C 247.247 210.251,244.106 209.601,243.011 210.524 M246.562 212.089 C 246.778 212.247,247.597 213.173,248.382 214.145 C 249.167 215.118,250.228 216.364,250.739 216.914 C 251.251 217.464,252.289 218.677,253.045 219.610 C 253.802 220.543,255.128 222.107,255.992 223.086 C 256.857 224.065,257.819 225.238,258.130 225.694 C 258.442 226.150,258.816 226.611,258.961 226.719 C 259.106 226.827,260.685 228.684,262.470 230.845 C 267.035 236.372,268.572 238.202,271.709 241.852 C 273.222 243.611,276.203 247.115,278.333 249.637 C 282.216 254.235,283.682 255.693,281.256 252.543 C 280.543 251.618,279.652 250.513,279.275 250.087 C 275.205 245.492,274.263 244.354,274.263 244.033 C 274.263 243.827,273.416 242.809,272.381 241.770 C 271.346 240.732,269.750 238.910,268.835 237.721 C 267.919 236.532,266.512 234.830,265.707 233.937 C 264.902 233.045,263.672 231.630,262.974 230.794 C 262.276 229.957,260.906 228.371,259.929 227.268 C 258.952 226.165,258.153 225.099,258.153 224.899 C 258.153 224.700,257.667 224.091,257.073 223.547 C 256.478 223.003,254.586 220.886,252.868 218.842 C 251.149 216.799,249.424 214.810,249.034 214.422 C 248.644 214.035,248.041 213.283,247.693 212.753 C 247.345 212.222,246.860 211.791,246.615 211.794 C 246.330 211.798,246.311 211.904,246.562 212.089 M4.322 213.752 C 4.322 214.486,4.427 214.591,4.794 214.224 C 5.160 213.857,5.160 213.648,4.794 213.281 C 4.427 212.914,4.322 213.019,4.322 213.752 M156.207 214.047 C 153.142 217.528,151.670 219.310,151.670 219.542 C 151.670 219.686,151.813 219.636,151.989 219.430 C 152.164 219.225,153.512 217.687,154.984 216.012 C 156.456 214.337,157.547 212.967,157.409 212.967 C 157.271 212.967,156.730 213.453,156.207 214.047 M396.672 218.190 C 396.504 218.577,396.477 219.005,396.612 219.139 C 397.011 219.538,397.332 218.978,397.149 218.204 C 396.986 217.517,396.965 217.517,396.672 218.190 M391.621 219.726 C 391.239 221.283,390.845 224.961,391.084 224.743 C 391.379 224.475,392.225 219.206,392.008 218.989 C 391.917 218.898,391.743 219.230,391.621 219.726 M5.012 221.022 C 5.115 221.562,5.267 222.004,5.350 222.004 C 5.433 222.004,5.501 221.562,5.501 221.022 C 5.501 220.481,5.349 220.039,5.163 220.039 C 4.976 220.039,4.909 220.481,5.012 221.022 M149.629 221.629 C 148.915 222.503,147.711 223.886,146.955 224.702 C 146.198 225.518,144.695 227.230,143.615 228.506 C 139.762 233.056,138.167 234.584,137.801 234.075 C 137.573 233.758,137.516 233.873,137.633 234.414 C 137.755 234.979,137.209 235.954,135.873 237.557 C 134.808 238.836,133.393 240.589,132.729 241.454 L 131.521 243.026 132.853 241.647 C 133.585 240.888,135.595 238.590,137.318 236.539 C 140.999 232.159,141.032 232.120,145.961 226.523 C 149.818 222.143,151.495 220.039,151.129 220.039 C 151.019 220.039,150.344 220.755,149.629 221.629 M396.083 221.788 C 396.074 222.633,396.188 222.830,396.504 222.513 C 396.815 222.203,396.819 221.874,396.516 221.354 C 396.147 220.718,396.093 220.772,396.083 221.788 M9.922 222.986 C 9.927 223.851,10.007 224.158,10.101 223.669 C 10.195 223.181,10.192 222.473,10.093 222.098 C 9.995 221.722,9.918 222.122,9.922 222.986 M390.029 223.787 C 389.894 224.138,389.799 224.721,389.818 225.081 C 389.836 225.442,390.007 225.215,390.198 224.578 C 390.568 223.338,390.437 222.724,390.029 223.787 M10.307 226.326 C 10.307 227.083,10.388 227.392,10.487 227.014 C 10.586 226.636,10.586 226.017,10.487 225.639 C 10.388 225.260,10.307 225.570,10.307 226.326 M390.429 226.016 C 390.296 226.511,390.205 227.358,390.225 227.898 C 390.247 228.477,390.403 228.164,390.605 227.137 C 390.966 225.296,390.838 224.486,390.429 226.016 M10.677 228.684 C 10.664 229.224,10.801 230.373,10.979 231.238 C 11.188 232.246,11.313 232.457,11.327 231.827 C 11.339 231.287,11.203 230.138,11.025 229.273 C 10.816 228.265,10.691 228.054,10.677 228.684 M394.786 228.528 C 394.628 228.686,394.499 229.086,394.499 229.417 C 394.499 229.859,394.615 229.903,394.936 229.583 C 395.177 229.342,395.306 228.942,395.223 228.694 C 395.140 228.445,394.943 228.371,394.786 228.528 M389.587 231.041 C 389.438 231.720,389.398 232.358,389.498 232.458 C 389.598 232.558,389.793 232.075,389.931 231.385 C 390.069 230.695,390.109 230.057,390.020 229.968 C 389.931 229.879,389.737 230.362,389.587 231.041 M6.047 232.837 C 6.179 233.181,6.287 233.625,6.287 233.824 C 6.287 234.022,6.464 234.185,6.680 234.185 C 7.327 234.185,7.123 232.716,6.440 232.454 C 5.976 232.276,5.871 232.379,6.047 232.837 M388.802 234.185 C 388.659 234.833,388.359 235.363,388.135 235.363 C 387.911 235.363,387.825 235.734,387.943 236.188 C 388.062 236.641,387.640 238.758,387.007 240.891 C 386.373 243.024,385.853 245.084,385.852 245.469 C 385.851 245.854,385.512 246.680,385.100 247.306 C 384.688 247.931,384.443 248.682,384.555 248.976 C 384.668 249.269,384.520 249.510,384.227 249.511 C 383.875 249.512,383.666 250.079,383.613 251.181 L 383.532 252.849 384.415 250.688 C 385.391 248.301,385.610 247.594,387.586 240.472 C 389.102 235.006,389.550 233.006,389.257 233.006 C 389.149 233.006,388.944 233.536,388.802 234.185 M11.623 234.834 C 11.776 235.665,12.217 237.849,12.603 239.686 L 13.305 243.026 13.080 240.275 C 12.956 238.762,12.703 237.115,12.517 236.615 C 12.332 236.115,12.181 235.285,12.181 234.772 C 12.181 234.258,11.993 233.722,11.763 233.580 C 11.478 233.404,11.433 233.803,11.623 234.834 M218.075 239.746 C 216.238 241.913,214.141 244.299,213.416 245.049 C 212.691 245.799,212.186 246.501,212.294 246.609 C 212.402 246.718,214.640 244.320,217.268 241.281 C 219.896 238.243,221.904 235.768,221.730 235.782 C 221.557 235.796,219.912 237.580,218.075 239.746 M392.927 236.958 C 392.927 237.403,393.104 237.658,393.320 237.525 C 393.536 237.391,393.713 237.027,393.713 236.716 C 393.713 236.404,393.536 236.149,393.320 236.149 C 393.104 236.149,392.927 236.513,392.927 236.958 M7.859 241.038 C 7.859 241.349,8.035 241.713,8.251 241.847 C 8.468 241.980,8.644 241.726,8.644 241.281 C 8.644 240.836,8.468 240.472,8.251 240.472 C 8.035 240.472,7.859 240.726,7.859 241.038 M391.356 242.829 C 391.356 243.261,391.532 243.615,391.749 243.615 C 391.965 243.615,392.141 243.261,392.141 242.829 C 392.141 242.397,391.965 242.043,391.749 242.043 C 391.532 242.043,391.356 242.397,391.356 242.829 M130.188 244.501 C 127.215 247.543,125.637 249.443,126.523 248.915 C 126.847 248.722,127.464 248.113,127.895 247.563 C 128.325 247.012,129.364 245.810,130.204 244.892 C 131.998 242.929,131.987 242.660,130.188 244.501 M13.401 243.670 C 13.343 244.022,15.184 250.906,15.908 253.045 C 16.473 254.715,16.498 254.737,16.364 253.438 C 16.286 252.682,15.936 251.267,15.585 250.295 C 15.235 249.322,14.610 247.377,14.196 245.972 C 13.781 244.568,13.424 243.532,13.401 243.670 M211.485 247.414 C 210.873 247.660,209.678 249.888,209.991 250.200 C 210.115 250.324,210.216 250.233,210.216 249.997 C 210.216 249.762,210.674 249.025,211.233 248.360 C 211.793 247.695,212.191 247.165,212.117 247.182 C 212.044 247.199,211.760 247.304,211.485 247.414 M389.784 247.741 C 389.784 248.065,389.961 248.330,390.177 248.330 C 390.393 248.330,390.570 248.065,390.570 247.741 C 390.570 247.417,390.393 247.151,390.177 247.151 C 389.961 247.151,389.784 247.417,389.784 247.741 M9.430 248.527 C 9.430 248.851,9.607 249.116,9.823 249.116 C 10.039 249.116,10.216 248.851,10.216 248.527 C 10.216 248.202,10.039 247.937,9.823 247.937 C 9.607 247.937,9.430 248.202,9.430 248.527 M123.474 252.076 C 123.288 252.408,122.281 253.561,121.236 254.639 C 120.190 255.716,119.422 256.684,119.527 256.790 C 119.633 256.895,120.670 255.875,121.833 254.522 C 122.996 253.170,124.129 251.933,124.351 251.774 C 124.612 251.587,124.588 251.483,124.283 251.479 C 124.023 251.476,123.659 251.745,123.474 252.076 M211.100 252.042 C 211.262 252.248,211.395 252.912,211.395 253.517 C 211.395 254.122,211.591 254.617,211.830 254.617 C 212.071 254.617,212.161 254.310,212.033 253.929 C 211.905 253.551,212.372 253.920,213.071 254.749 C 213.770 255.577,215.756 257.894,217.485 259.896 C 221.145 264.134,222.004 265.178,222.004 265.388 C 222.004 265.472,222.579 266.154,223.281 266.905 C 223.983 267.655,225.208 269.043,226.002 269.989 C 226.796 270.935,228.321 272.703,229.390 273.918 C 230.460 275.133,231.402 276.282,231.484 276.472 C 231.566 276.662,232.149 277.259,232.779 277.800 C 233.936 278.791,228.482 272.179,217.541 259.325 C 217.078 258.781,215.727 257.190,214.538 255.790 C 212.699 253.623,210.197 250.896,211.100 252.042 M187.032 252.850 C 186.525 253.390,186.291 253.831,186.511 253.831 C 187.013 253.831,188.407 252.323,188.146 252.062 C 188.040 251.956,187.539 252.311,187.032 252.850 M388.695 252.333 C 388.938 253.062,389.784 253.182,389.784 252.489 C 389.784 252.146,389.504 251.866,389.162 251.866 C 388.820 251.866,388.610 252.076,388.695 252.333 M7.928 253.307 C 7.998 253.668,8.320 254.035,8.644 254.123 C 9.168 254.266,9.168 254.237,8.644 253.867 C 8.245 253.584,8.213 253.448,8.546 253.444 C 8.816 253.441,9.037 253.261,9.037 253.045 C 9.037 252.829,8.759 252.652,8.419 252.652 C 8.053 252.652,7.853 252.920,7.928 253.307 M381.167 258.648 C 380.025 261.510,378.601 264.912,378.001 266.208 C 377.402 267.505,376.612 269.273,376.246 270.138 C 375.880 271.002,375.122 272.381,374.560 273.202 C 373.999 274.023,373.490 275.173,373.430 275.756 C 373.312 276.889,375.501 273.017,377.199 269.086 C 380.948 260.410,383.585 253.788,383.375 253.578 C 383.302 253.505,382.309 255.787,381.167 258.648 M181.880 258.995 C 176.020 265.848,175.679 266.242,172.340 270.039 C 170.677 271.930,169.480 273.477,169.680 273.477 C 169.880 273.477,170.495 272.903,171.045 272.200 C 173.043 269.651,173.982 268.753,174.510 268.888 C 174.807 268.964,174.918 268.953,174.758 268.863 C 174.338 268.627,175.179 267.193,176.586 265.745 C 177.254 265.058,178.193 263.983,178.673 263.357 C 180.126 261.466,181.471 260.118,181.907 260.118 C 182.133 260.118,182.318 259.835,182.318 259.490 C 182.318 258.931,184.480 256.536,184.760 256.784 C 184.822 256.839,185.159 256.285,185.510 255.554 C 185.861 254.822,186.106 254.224,186.054 254.224 C 186.002 254.224,184.124 256.371,181.880 258.995 M286.538 259.394 C 292.223 266.100,292.446 266.345,292.000 265.422 C 291.791 264.990,290.808 263.755,289.815 262.677 C 288.822 261.600,287.911 260.406,287.790 260.025 C 287.669 259.644,287.386 259.332,287.161 259.332 C 286.937 259.332,286.851 259.076,286.971 258.763 C 287.109 258.405,287.001 258.266,286.681 258.389 C 286.395 258.498,285.586 257.809,284.834 256.813 C 284.099 255.839,283.274 254.952,283.002 254.840 C 282.729 254.729,284.320 256.778,286.538 259.394 M11.395 255.599 C 11.395 255.923,11.572 256.189,11.788 256.189 C 12.004 256.189,12.181 255.923,12.181 255.599 C 12.181 255.275,12.004 255.010,11.788 255.010 C 11.572 255.010,11.395 255.275,11.395 255.599 M16.674 255.992 C 16.850 257.387,19.386 264.238,19.548 263.754 C 19.609 263.570,19.322 262.440,18.909 261.242 C 18.497 260.044,18.226 258.549,18.306 257.921 C 18.444 256.848,18.433 256.838,18.133 257.760 C 17.836 258.673,17.767 258.603,17.169 256.778 C 16.773 255.570,16.582 255.267,16.674 255.992 M386.787 257.535 C 386.543 257.800,386.222 258.446,386.074 258.969 C 385.854 259.744,385.964 259.681,386.664 258.628 C 387.531 257.324,387.608 256.643,386.787 257.535 M117.913 258.431 C 117.646 259.016,117.080 259.738,116.654 260.036 C 116.229 260.334,115.450 261.226,114.925 262.018 C 114.399 262.810,113.311 264.253,112.507 265.226 C 111.703 266.198,111.412 266.640,111.861 266.208 C 112.310 265.776,113.892 263.984,115.376 262.226 C 119.645 257.170,119.501 257.367,118.920 257.367 C 118.632 257.367,118.179 257.846,117.913 258.431 M20.068 266.306 C 20.128 266.907,21.554 269.729,21.582 269.301 C 21.618 268.752,20.492 266.012,20.230 266.012 C 20.125 266.012,20.052 266.144,20.068 266.306 M293.070 267.175 C 293.424 267.549,294.774 269.138,296.071 270.705 C 297.367 272.272,301.169 276.785,304.519 280.734 C 307.868 284.683,311.758 289.300,313.163 290.993 C 314.568 292.686,316.133 294.521,316.641 295.071 C 317.149 295.621,317.893 296.690,318.293 297.446 C 318.694 298.202,319.030 298.620,319.040 298.374 C 319.060 297.844,316.803 294.497,315.337 292.886 C 314.768 292.260,313.597 290.968,312.734 290.014 C 311.870 289.059,311.258 288.034,311.373 287.734 C 311.488 287.434,311.425 287.286,311.232 287.405 C 311.040 287.524,310.379 287.003,309.763 286.247 C 309.148 285.490,307.984 284.120,307.176 283.202 C 306.368 282.284,305.705 281.311,305.702 281.041 C 305.700 280.771,305.432 280.550,305.108 280.550 C 304.784 280.550,304.519 280.389,304.519 280.191 C 304.519 279.993,303.635 278.901,302.556 277.763 C 301.476 276.625,300.378 275.208,300.115 274.614 C 299.852 274.020,299.507 273.614,299.348 273.712 C 299.190 273.810,298.641 273.274,298.129 272.520 C 297.617 271.767,296.723 270.777,296.143 270.321 C 295.563 269.864,295.088 269.233,295.088 268.918 C 295.088 268.603,294.818 268.241,294.487 268.114 C 294.148 267.984,293.975 267.604,294.089 267.242 C 294.236 266.780,294.032 266.586,293.360 266.547 C 292.489 266.497,292.469 266.539,293.070 267.175 M109.627 267.976 C 109.627 268.409,109.492 268.762,109.328 268.762 C 109.164 268.762,108.787 269.160,108.491 269.646 C 107.985 270.475,108.019 270.469,109.022 269.548 C 110.499 268.192,111.012 267.191,110.230 267.191 C 109.889 267.191,109.627 267.532,109.627 267.976 M382.546 268.590 C 381.765 269.372,381.766 269.380,382.701 269.380 C 383.128 269.380,383.563 269.158,383.667 268.887 C 383.967 268.105,383.228 267.909,382.546 268.590 M16.124 269.450 C 16.147 269.931,17.260 271.745,17.270 271.316 C 17.288 270.484,16.788 269.155,16.457 269.155 C 16.266 269.155,16.116 269.288,16.124 269.450 M22.746 272.768 C 23.854 275.737,24.723 277.502,24.740 276.817 C 24.745 276.601,24.472 275.894,24.132 275.246 C 23.792 274.597,23.289 273.191,23.014 272.122 C 22.739 271.052,22.325 270.113,22.094 270.036 C 21.863 269.959,22.156 271.188,22.746 272.768 M106.974 271.206 C 106.488 271.441,106.090 271.827,106.090 272.064 C 106.090 272.301,105.692 272.957,105.206 273.521 C 104.720 274.085,103.615 275.384,102.750 276.407 C 101.886 277.431,100.530 279.003,99.738 279.901 C 98.945 280.798,97.757 282.151,97.097 282.908 C 96.176 283.963,95.895 284.118,95.886 283.572 C 95.879 283.170,95.692 282.974,95.455 283.121 C 95.224 283.263,95.135 283.640,95.257 283.958 C 95.531 284.673,94.919 285.881,93.501 287.426 C 87.089 294.415,86.022 296.459,86.847 300.179 C 87.439 302.847,88.656 304.812,90.740 306.463 C 91.625 307.164,93.264 308.605,94.381 309.664 C 95.498 310.724,96.542 311.591,96.702 311.591 C 96.862 311.591,97.492 312.084,98.103 312.686 C 98.714 313.288,99.789 314.184,100.491 314.677 C 101.194 315.170,101.768 315.827,101.768 316.137 C 101.768 316.446,102.044 316.699,102.381 316.699 C 102.744 316.699,102.879 316.884,102.713 317.153 C 102.542 317.430,102.605 317.500,102.875 317.333 C 103.344 317.043,105.389 318.181,105.167 318.609 C 105.007 318.917,106.368 320.254,106.778 320.190 C 106.940 320.165,108.134 321.049,109.430 322.154 C 114.387 326.378,115.707 327.308,116.692 327.273 C 117.605 327.240,117.587 327.210,116.465 326.885 C 115.442 326.588,107.928 320.759,106.680 319.294 C 106.464 319.040,104.443 317.336,102.189 315.507 C 94.297 309.102,93.606 308.521,91.157 306.234 C 86.336 301.731,85.854 296.509,89.852 292.093 C 90.463 291.418,92.024 289.589,93.320 288.030 C 95.767 285.087,99.245 281.005,104.836 274.516 C 106.631 272.432,108.046 270.739,107.979 270.754 C 107.913 270.768,107.461 270.972,106.974 271.206 M379.568 274.067 C 379.568 274.391,379.745 274.656,379.961 274.656 C 380.177 274.656,380.354 274.391,380.354 274.067 C 380.354 273.743,380.177 273.477,379.961 273.477 C 379.745 273.477,379.568 273.743,379.568 274.067 M18.075 274.460 C 18.075 274.784,18.251 275.049,18.468 275.049 C 18.684 275.049,18.861 274.784,18.861 274.460 C 18.861 274.136,18.684 273.870,18.468 273.870 C 18.251 273.870,18.075 274.136,18.075 274.460 M168.063 275.231 C 167.554 275.979,165.647 278.295,163.825 280.377 C 162.002 282.460,160.360 284.456,160.175 284.813 C 159.990 285.170,160.477 284.754,161.256 283.890 C 162.036 283.026,162.965 282.053,163.322 281.729 C 164.489 280.669,165.067 279.982,165.968 278.585 C 166.465 277.815,167.151 277.235,167.527 277.267 C 168.017 277.308,168.136 277.122,167.963 276.579 C 167.833 276.170,167.872 275.834,168.048 275.832 C 168.225 275.830,168.574 275.388,168.824 274.850 C 169.461 273.476,169.149 273.632,168.063 275.231 M19.253 277.507 C 19.253 277.831,19.519 278.316,19.843 278.585 C 20.322 278.983,20.432 278.965,20.432 278.485 C 20.432 278.161,20.167 277.676,19.843 277.407 C 19.363 277.009,19.253 277.028,19.253 277.507 M371.794 278.962 C 370.724 280.684,369.550 282.976,368.473 285.447 C 367.771 287.057,368.708 285.581,370.968 281.517 C 373.400 277.143,373.916 275.549,371.794 278.962 M24.754 277.482 C 24.754 278.052,26.682 281.409,26.698 280.868 C 26.710 280.503,26.542 280.094,26.326 279.961 C 26.110 279.827,25.933 279.396,25.933 279.003 C 25.933 278.610,25.668 278.069,25.344 277.800 C 25.020 277.531,24.754 277.388,24.754 277.482 M234.150 279.568 C 234.369 280.000,235.890 281.857,237.530 283.694 C 239.171 285.530,240.990 287.771,241.573 288.673 C 242.156 289.575,242.934 290.396,243.303 290.498 C 243.672 290.600,242.169 288.560,239.963 285.964 C 234.581 279.631,233.683 278.642,234.150 279.568 M376.823 280.845 C 376.820 281.331,376.994 281.729,377.210 281.729 C 377.703 281.729,377.703 281.312,377.210 280.550 C 376.902 280.073,376.828 280.130,376.823 280.845 M26.793 281.961 C 27.102 283.039,29.666 287.624,29.775 287.295 C 29.843 287.092,29.541 286.289,29.105 285.512 C 28.668 284.734,28.411 283.786,28.534 283.405 C 28.722 282.821,28.691 282.804,28.334 283.301 C 28.101 283.625,27.907 283.703,27.904 283.474 C 27.901 283.245,27.622 282.715,27.284 282.295 C 26.946 281.876,26.725 281.725,26.793 281.961 M22.010 285.363 C 22.023 286.401,22.752 287.092,23.162 286.454 C 23.403 286.079,23.388 285.785,23.118 285.618 C 22.846 285.450,22.887 285.286,23.236 285.147 C 23.545 285.025,23.397 284.921,22.888 284.903 C 22.402 284.886,22.007 285.093,22.010 285.363 M158.564 286.542 C 158.154 287.028,156.927 288.487,155.839 289.784 C 154.751 291.081,153.243 292.805,152.489 293.615 C 151.735 294.425,151.220 295.088,151.344 295.088 C 151.730 295.088,154.419 292.501,154.436 292.114 C 154.445 291.913,155.594 290.511,156.989 288.998 C 159.170 286.634,159.880 285.658,159.419 285.658 C 159.359 285.658,158.974 286.056,158.564 286.542 M366.994 286.637 C 366.994 287.717,365.520 290.766,364.998 290.766 C 364.678 290.766,363.015 293.991,363.227 294.203 C 363.360 294.336,364.696 292.276,367.031 288.337 C 367.961 286.767,368.038 286.429,367.558 286.030 C 367.092 285.643,366.994 285.748,366.994 286.637 M30.823 289.784 C 32.705 293.067,33.105 293.552,32.768 292.141 C 32.613 291.493,32.161 290.732,31.764 290.449 C 31.366 290.167,31.041 289.702,31.041 289.417 C 31.041 289.131,30.739 288.655,30.369 288.359 C 29.937 288.012,30.099 288.521,30.823 289.784 M244.008 291.369 C 244.008 291.662,246.678 294.303,246.975 294.303 C 247.108 294.303,246.547 293.595,245.728 292.731 C 244.239 291.159,244.008 290.976,244.008 291.369 M369.150 293.418 C 368.725 294.229,368.224 295.002,368.036 295.138 C 367.849 295.273,367.871 295.491,368.085 295.624 C 368.299 295.756,368.691 295.342,368.955 294.704 C 369.220 294.065,369.682 293.338,369.983 293.089 C 370.577 292.596,370.715 291.945,370.227 291.945 C 370.060 291.945,369.575 292.608,369.150 293.418 M33.933 295.088 C 34.286 295.629,34.954 296.774,35.416 297.634 C 37.431 301.381,38.900 302.939,38.900 301.329 C 38.900 301.113,38.745 301.032,38.556 301.149 C 38.153 301.398,36.156 298.651,36.135 297.818 C 36.126 297.505,35.483 296.542,34.705 295.678 C 33.927 294.813,33.580 294.548,33.933 295.088 M247.151 294.772 C 247.151 295.176,249.584 298.040,250.230 298.396 C 250.590 298.595,250.102 297.887,249.147 296.824 C 248.192 295.762,247.352 294.818,247.281 294.728 C 247.210 294.638,247.151 294.658,247.151 294.772 M361.797 295.972 C 360.751 297.354,359.797 299.018,360.052 299.018 C 360.187 299.018,361.794 296.773,362.790 295.194 C 363.418 294.196,362.740 294.728,361.797 295.972 M148.163 298.723 C 143.199 304.484,142.051 305.909,143.023 305.108 C 144.694 303.730,145.198 303.169,145.754 302.068 C 146.052 301.476,146.800 300.769,147.416 300.496 C 148.032 300.224,148.456 299.792,148.358 299.538 C 148.260 299.283,148.892 298.267,149.762 297.278 C 150.632 296.290,151.256 295.481,151.150 295.481 C 151.043 295.481,149.699 296.940,148.163 298.723 M367.600 298.598 C 367.476 298.799,367.554 299.074,367.774 299.210 C 368.242 299.500,368.959 299.132,368.959 298.602 C 368.959 298.123,367.895 298.120,367.600 298.598 M250.963 299.549 C 251.492 300.444,253.218 302.372,253.827 302.748 C 254.144 302.944,253.628 302.185,252.680 301.061 C 251.000 299.068,250.329 298.478,250.963 299.549 M319.195 301.033 C 319.221 302.194,319.110 303.674,318.950 304.322 L 318.658 305.501 319.236 304.519 C 319.872 303.439,320.029 300.312,319.489 299.461 C 319.274 299.122,319.165 299.703,319.195 301.033 M358.710 300.491 C 357.311 302.057,355.992 304.024,355.992 304.545 C 355.992 304.793,355.727 304.894,355.403 304.769 C 355.079 304.645,354.791 304.715,354.764 304.924 C 354.737 305.133,354.693 305.466,354.666 305.664 C 354.639 305.862,354.219 306.369,353.733 306.791 C 353.247 307.213,352.849 307.816,352.849 308.131 C 352.849 308.701,351.348 310.343,350.786 310.389 C 350.624 310.402,350.495 310.503,350.499 310.613 C 350.524 311.239,349.210 313.163,348.758 313.163 C 348.464 313.163,347.936 313.767,347.586 314.506 C 347.235 315.245,346.448 316.270,345.837 316.785 C 345.225 317.299,344.554 318.026,344.345 318.400 C 343.630 319.676,335.493 327.701,334.913 327.701 C 334.595 327.701,334.433 327.861,334.554 328.056 C 334.860 328.550,330.573 332.646,323.969 338.169 C 323.104 338.892,321.581 340.192,320.585 341.058 C 319.588 341.924,318.616 342.641,318.424 342.650 C 318.232 342.660,317.191 343.488,316.110 344.489 C 313.927 346.514,314.181 346.375,317.800 343.570 C 319.162 342.514,320.930 341.155,321.729 340.550 C 332.303 332.544,349.756 314.067,358.084 302.063 C 360.066 299.205,360.233 298.787,358.710 300.491 M362.831 303.004 C 362.087 303.843,362.087 303.845,362.967 303.383 C 363.453 303.128,363.851 302.749,363.851 302.540 C 363.851 301.982,363.663 302.068,362.831 303.004 M40.162 304.962 C 41.089 306.286,42.262 307.989,42.770 308.747 C 45.330 312.568,51.535 320.200,54.964 323.746 C 56.607 325.444,56.815 325.582,55.892 324.361 C 55.238 323.497,54.330 322.453,53.874 322.041 C 53.418 321.630,53.045 321.055,53.045 320.764 C 53.045 320.474,52.871 320.236,52.658 320.236 C 51.976 320.236,49.552 317.328,49.298 316.205 C 49.162 315.609,48.909 315.209,48.735 315.317 C 48.388 315.531,46.565 313.336,45.498 311.421 C 45.129 310.758,44.819 310.383,44.810 310.587 C 44.785 311.145,42.829 308.375,42.829 307.782 C 42.829 307.500,42.678 307.269,42.493 307.269 C 42.308 307.269,41.413 306.208,40.503 304.912 C 39.594 303.615,38.766 302.554,38.664 302.554 C 38.561 302.554,39.236 303.637,40.162 304.962 M254.241 303.423 C 254.232 303.576,254.619 304.071,255.103 304.521 C 255.857 305.223,255.899 305.398,255.397 305.752 C 254.905 306.100,254.918 306.131,255.479 305.952 C 255.915 305.812,256.565 306.219,257.369 307.135 C 258.043 307.902,258.661 308.464,258.742 308.383 C 258.823 308.302,257.847 307.090,256.574 305.690 C 255.300 304.289,254.250 303.269,254.241 303.423 M33.792 303.858 C 33.792 304.400,34.732 306.090,35.034 306.090 C 35.548 306.090,35.429 305.708,34.578 304.626 C 34.145 304.076,33.792 303.731,33.792 303.858 M316.110 308.215 C 314.813 309.536,312.792 311.410,311.618 312.381 C 310.444 313.351,308.670 314.853,307.674 315.717 C 306.679 316.582,304.992 317.996,303.925 318.861 C 301.074 321.170,298.296 323.895,299.290 323.406 C 299.765 323.173,300.263 322.803,300.398 322.585 C 300.533 322.366,300.806 322.288,301.005 322.411 C 301.204 322.534,301.269 322.381,301.150 322.071 C 301.012 321.712,301.477 321.174,302.432 320.585 C 303.255 320.077,304.384 319.216,304.940 318.672 C 306.644 317.003,309.405 314.634,312.033 312.587 C 314.620 310.572,318.664 306.561,318.664 306.010 C 318.664 305.594,318.789 305.486,316.110 308.215 M139.827 308.481 C 138.669 309.820,136.511 312.305,135.033 314.004 C 133.554 315.703,132.518 317.092,132.729 317.092 C 132.941 317.092,133.532 316.555,134.042 315.899 C 134.553 315.242,135.478 314.137,136.098 313.443 C 136.718 312.749,138.116 311.120,139.206 309.823 C 140.295 308.527,141.467 307.259,141.811 307.007 C 142.154 306.754,142.322 306.435,142.184 306.296 C 142.046 306.158,140.985 307.141,139.827 308.481 M358.189 309.430 C 357.835 309.971,357.698 310.413,357.885 310.413 C 358.071 310.413,358.425 309.971,358.671 309.430 C 358.917 308.890,359.054 308.448,358.976 308.448 C 358.897 308.448,358.543 308.890,358.189 309.430 M258.951 308.889 C 258.944 309.024,259.646 309.908,260.511 310.854 C 261.375 311.800,262.083 312.893,262.083 313.284 C 262.083 313.675,262.245 313.895,262.444 313.772 C 262.871 313.508,264.440 315.388,264.440 316.163 C 264.440 316.458,264.650 316.699,264.906 316.699 C 265.162 316.699,265.808 317.097,266.341 317.583 C 266.874 318.070,265.913 316.805,264.205 314.772 C 259.951 309.709,258.964 308.604,258.951 308.889 M355.305 313.007 C 354.286 314.169,354.137 314.673,355.031 313.931 C 355.588 313.469,356.566 311.975,356.301 311.991 C 356.239 311.995,355.791 312.452,355.305 313.007 M42.006 315.844 C 42.245 316.291,42.634 316.775,42.870 316.921 C 43.178 317.112,43.177 316.957,42.866 316.376 C 42.627 315.930,42.238 315.445,42.002 315.299 C 41.694 315.108,41.695 315.263,42.006 315.844 M352.532 316.330 C 352.066 317.077,352.088 317.106,352.831 316.709 C 353.273 316.472,353.635 316.108,353.635 315.900 C 353.635 315.257,353.063 315.480,352.532 316.330 M130.435 319.548 C 127.748 322.788,125.252 325.361,123.969 326.215 C 123.320 326.646,123.114 326.892,123.510 326.761 C 123.905 326.630,124.579 326.523,125.006 326.523 C 125.460 326.523,125.675 326.347,125.522 326.101 C 125.217 325.607,126.819 323.772,127.555 323.772 C 127.831 323.772,128.353 323.148,128.715 322.386 C 129.077 321.624,129.749 320.696,130.209 320.323 C 130.991 319.690,132.608 317.485,132.291 317.485 C 132.211 317.485,131.377 318.414,130.435 319.548 M267.205 318.959 C 267.197 319.229,267.854 320.124,268.664 320.948 C 270.532 322.847,273.562 326.399,274.038 327.249 C 274.239 327.606,274.681 328.113,275.021 328.377 C 275.465 328.721,275.494 328.859,275.124 328.868 C 274.841 328.875,274.714 329.049,274.842 329.256 C 274.970 329.463,275.302 329.544,275.581 329.437 C 275.859 329.330,276.508 329.792,277.022 330.463 C 278.119 331.894,280.540 333.090,282.957 333.394 C 284.629 333.604,284.617 333.593,282.547 333.004 C 278.853 331.953,277.823 330.992,268.089 319.495 C 267.610 318.930,267.212 318.689,267.205 318.959 M45.892 320.825 C 46.367 321.726,47.937 323.137,47.937 322.663 C 47.937 322.489,47.384 321.828,46.707 321.193 C 45.849 320.387,45.603 320.276,45.892 320.825 M344.459 325.404 C 341.989 328.127,342.352 328.212,345.000 325.531 C 346.168 324.347,346.938 323.379,346.710 323.379 C 346.482 323.379,345.469 324.290,344.459 325.404 M293.124 327.887 C 289.965 330.513,287.581 332.181,286.444 332.562 C 285.232 332.968,284.967 333.161,285.600 333.178 C 286.552 333.203,290.372 331.265,290.373 330.757 C 290.374 330.284,292.871 329.112,293.713 329.189 C 294.489 329.259,294.489 329.256,293.724 328.936 C 292.913 328.597,294.503 326.568,295.637 326.494 C 295.876 326.479,296.574 325.860,297.190 325.119 C 297.806 324.378,298.248 323.780,298.172 323.789 C 298.097 323.798,295.825 325.642,293.124 327.887 M49.509 325.117 C 49.509 325.429,51.962 327.737,52.122 327.576 C 52.333 327.366,50.210 324.951,49.814 324.951 C 49.646 324.951,49.509 325.026,49.509 325.117 M62.487 331.729 C 67.115 336.287,73.737 342.148,78.357 345.776 C 79.065 346.332,79.080 346.316,78.636 345.481 C 78.377 344.995,77.964 344.597,77.718 344.597 C 77.255 344.597,73.771 341.719,69.025 337.415 C 65.995 334.667,65.297 333.868,65.489 333.366 C 65.618 333.030,65.425 332.934,64.897 333.072 C 64.338 333.218,63.908 332.958,63.393 332.159 C 62.275 330.426,61.558 329.666,61.041 329.666 C 60.781 329.666,60.205 329.180,59.762 328.585 C 58.578 326.997,57.677 326.130,57.212 326.130 C 56.986 326.130,59.360 328.649,62.487 331.729 M118.566 327.586 C 119.052 327.679,119.848 327.679,120.334 327.586 C 120.820 327.492,120.422 327.415,119.450 327.415 C 118.477 327.415,118.080 327.492,118.566 327.586 M55.955 332.089 C 56.325 332.665,56.895 333.239,57.222 333.364 C 57.621 333.517,57.729 333.861,57.552 334.418 C 57.331 335.114,57.415 335.205,58.081 334.993 C 58.604 334.828,59.050 334.981,59.397 335.446 C 59.685 335.833,60.275 336.415,60.707 336.739 C 62.342 337.965,58.747 334.063,56.183 331.827 L 55.281 331.041 55.955 332.089 M336.127 333.760 C 335.708 334.066,335.469 334.421,335.596 334.548 C 335.723 334.675,336.148 334.424,336.540 333.991 C 337.375 333.068,337.203 332.972,336.127 333.760 M333.490 336.346 C 333.120 336.778,332.948 337.126,333.108 337.119 C 333.517 337.102,334.774 336.115,334.774 335.811 C 334.774 335.315,334.150 335.574,333.490 336.346 M330.000 339.403 C 329.666 339.774,329.057 340.302,328.645 340.575 C 328.234 340.849,328.461 340.806,329.150 340.480 C 330.374 339.901,331.082 339.202,330.765 338.885 C 330.678 338.798,330.333 339.031,330.000 339.403 M66.481 342.216 C 67.012 343.067,67.583 343.289,67.583 342.646 C 67.583 342.438,67.222 342.074,66.780 341.837 C 66.037 341.440,66.014 341.469,66.481 342.216 M326.748 342.052 C 326.331 342.367,326.096 342.729,326.224 342.858 C 326.352 342.986,326.825 342.723,327.276 342.272 C 328.211 341.337,327.877 341.197,326.748 342.052 M323.507 344.801 C 322.390 346.076,322.967 346.069,324.165 344.794 C 324.673 344.253,324.924 343.815,324.725 343.818 C 324.525 343.822,323.977 344.264,323.507 344.801 M69.818 345.244 C 69.404 345.658,69.497 346.955,69.941 346.955 C 70.157 346.955,70.337 346.557,70.340 346.071 C 70.345 345.339,70.418 345.288,70.763 345.776 C 71.102 346.255,71.151 346.260,71.027 345.801 C 70.850 345.147,70.210 344.852,69.818 345.244 M321.248 346.613 C 320.832 347.017,320.677 347.348,320.905 347.348 C 321.358 347.348,322.406 346.233,322.158 346.014 C 322.073 345.939,321.664 346.208,321.248 346.613 M80.610 347.402 C 82.534 349.173,88.421 353.207,87.426 352.072 C 86.994 351.579,85.403 350.366,83.890 349.376 C 82.377 348.386,81.051 347.480,80.943 347.364 C 80.835 347.247,80.393 346.911,79.961 346.616 C 79.528 346.322,79.821 346.676,80.610 347.402 M312.967 346.647 C 312.534 346.897,311.650 347.620,311.002 348.253 L 309.823 349.405 311.670 348.175 C 313.902 346.688,314.871 345.546,312.967 346.647 M75.835 349.632 C 75.835 349.839,76.277 350.297,76.817 350.651 C 77.358 351.005,77.800 351.114,77.800 350.893 C 77.800 350.672,77.635 350.491,77.435 350.491 C 77.234 350.491,76.792 350.213,76.452 349.874 C 76.113 349.534,75.835 349.425,75.835 349.632 M308.448 349.752 C 307.908 349.966,306.935 350.634,306.287 351.235 C 305.639 351.837,304.224 352.828,303.143 353.437 C 301.176 354.547,298.728 356.385,299.218 356.385 C 299.361 356.385,300.215 355.879,301.115 355.260 C 302.014 354.642,304.298 353.127,306.189 351.895 C 308.080 350.663,309.627 349.578,309.627 349.484 C 309.627 349.277,309.668 349.268,308.448 349.752 M316.896 349.767 C 316.680 349.967,316.150 350.374,315.718 350.672 C 315.286 350.969,315.021 351.300,315.128 351.406 C 315.236 351.512,315.848 351.181,316.488 350.670 C 317.127 350.158,317.570 349.664,317.470 349.572 C 317.370 349.480,317.112 349.567,316.896 349.767 M313.360 352.456 C 312.968 352.888,312.813 353.242,313.015 353.242 C 313.216 353.242,313.684 352.888,314.054 352.456 C 314.424 352.024,314.579 351.670,314.399 351.670 C 314.218 351.670,313.751 352.024,313.360 352.456 M79.764 352.837 C 79.764 353.060,79.908 353.242,80.083 353.242 C 80.258 353.242,80.801 353.613,81.288 354.067 C 81.775 354.521,82.280 354.786,82.410 354.656 C 82.540 354.527,82.572 354.376,82.482 354.321 C 82.392 354.266,81.744 353.819,81.041 353.327 C 80.339 352.835,79.764 352.614,79.764 352.837 M311.320 353.711 C 310.846 353.940,310.365 354.372,310.250 354.670 C 310.126 354.994,310.514 354.865,311.209 354.350 C 312.783 353.187,312.817 352.987,311.320 353.711 M90.766 354.572 C 90.766 354.655,91.252 355.036,91.847 355.418 L 92.927 356.114 92.179 355.267 C 91.516 354.518,90.766 354.149,90.766 354.572 M84.283 356.201 C 85.824 357.464,86.398 357.455,85.032 356.189 C 84.449 355.648,83.776 355.213,83.538 355.220 C 83.299 355.228,83.635 355.669,84.283 356.201 M307.900 356.221 C 307.753 356.604,307.841 356.784,308.128 356.688 C 308.716 356.492,309.039 355.599,308.523 355.599 C 308.312 355.599,308.032 355.879,307.900 356.221 M93.910 356.543 C 93.910 356.629,94.500 357.048,95.221 357.474 C 95.942 357.899,97.002 358.556,97.578 358.933 C 99.516 360.203,98.646 359.281,96.533 357.826 C 94.587 356.485,93.910 356.154,93.910 356.543 M296.955 357.003 C 296.361 357.325,295.874 357.754,295.874 357.956 C 295.874 358.158,296.493 357.958,297.250 357.512 C 299.270 356.319,299.018 355.883,296.955 357.003 M86.534 357.637 C 86.730 358.225,87.623 358.548,87.623 358.032 C 87.623 357.821,87.343 357.540,87.001 357.409 C 86.618 357.262,86.438 357.350,86.534 357.637 M305.703 357.466 C 305.714 358.003,306.437 358.920,306.668 358.689 C 306.977 358.380,306.484 357.171,306.048 357.171 C 305.855 357.171,305.700 357.304,305.703 357.466 M100.393 360.544 C 103.129 362.269,107.473 364.373,106.918 363.704 C 106.626 363.353,106.168 363.065,105.901 363.065 C 105.633 363.065,104.771 362.628,103.984 362.094 C 103.198 361.561,102.554 361.202,102.554 361.297 C 102.554 361.392,101.910 361.033,101.124 360.499 C 100.337 359.965,99.498 359.534,99.258 359.541 C 99.018 359.547,99.528 359.999,100.393 360.544 M291.123 360.510 C 288.433 362.034,284.467 363.851,283.830 363.851 C 283.513 363.851,283.355 364.014,283.478 364.213 C 283.686 364.549,279.646 366.656,279.049 366.523 C 278.666 366.438,276.645 367.429,275.093 368.464 C 274.360 368.952,273.830 369.351,273.914 369.350 C 274.890 369.338,292.247 360.754,293.484 359.672 C 294.071 359.158,292.566 359.692,291.123 360.510 M91.945 361.025 C 91.945 361.236,92.225 361.516,92.567 361.648 C 92.950 361.795,93.130 361.707,93.034 361.420 C 92.838 360.832,91.945 360.509,91.945 361.025 M94.303 363.458 C 94.303 363.950,94.720 363.950,95.481 363.458 C 95.958 363.150,95.902 363.076,95.187 363.071 C 94.700 363.068,94.303 363.242,94.303 363.458 M294.794 363.863 C 294.307 364.058,293.910 364.401,293.910 364.624 C 293.910 365.270,294.629 365.096,295.481 364.244 C 296.330 363.395,296.174 363.308,294.794 363.863 M110.806 365.756 C 110.806 366.310,126.008 373.141,126.390 372.759 C 126.624 372.524,122.272 370.489,119.883 369.715 C 118.500 369.268,115.892 368.123,114.087 367.171 C 112.282 366.219,110.806 365.582,110.806 365.756 M289.980 366.684 C 288.607 367.462,288.607 367.463,289.784 367.201 C 290.963 366.938,291.846 366.361,291.526 366.063 C 291.432 365.975,290.737 366.255,289.980 366.684 M105.750 369.016 C 106.104 369.309,106.481 369.813,106.589 370.138 C 106.750 370.623,106.836 370.603,107.075 370.022 C 107.417 369.195,107.377 369.145,106.090 368.770 C 105.226 368.519,105.185 368.548,105.750 369.016 M272.299 369.155 C 272.712 369.653,272.631 369.745,271.776 369.745 C 270.566 369.745,268.686 370.520,268.260 371.194 C 268.092 371.460,267.339 371.793,266.586 371.934 C 265.468 372.144,264.229 372.888,264.997 372.888 C 265.410 372.888,270.476 370.902,270.892 370.577 C 271.126 370.395,271.810 370.128,272.413 369.984 C 273.379 369.753,273.441 369.652,272.933 369.144 C 272.175 368.386,271.668 368.396,272.299 369.155 M111.856 372.262 C 111.512 373.160,113.013 374.288,113.745 373.680 C 114.506 373.049,114.502 372.640,113.732 372.345 C 113.382 372.211,113.225 372.277,113.362 372.500 C 113.494 372.713,113.308 372.888,112.948 372.888 C 112.527 372.888,112.374 372.677,112.519 372.299 C 112.644 371.974,112.593 371.709,112.407 371.709 C 112.221 371.709,111.973 371.958,111.856 372.262 M127.158 372.813 C 126.921 373.197,135.106 376.224,135.450 375.880 C 135.582 375.747,135.484 375.639,135.231 375.639 C 134.977 375.639,133.854 375.196,132.734 374.656 C 131.614 374.116,130.411 373.674,130.061 373.674 C 129.710 373.674,129.080 373.414,128.661 373.097 C 127.782 372.432,127.434 372.367,127.158 372.813 M262.083 373.498 C 261.110 373.804,259.872 374.063,259.332 374.073 C 258.491 374.088,258.446 374.147,259.020 374.481 C 259.499 374.761,260.325 374.649,261.924 374.087 C 265.325 372.891,265.447 372.437,262.083 373.498 M276.452 374.097 C 276.929 374.624,277.245 374.747,277.346 374.444 C 277.432 374.187,277.260 373.822,276.963 373.634 C 275.983 373.013,275.701 373.268,276.452 374.097 M257.597 375.193 C 257.481 375.380,256.755 375.635,255.983 375.760 C 254.183 376.052,249.050 377.668,249.259 377.877 C 249.459 378.077,256.374 376.129,257.957 375.426 C 258.659 375.115,258.867 374.893,258.471 374.878 C 258.106 374.864,257.712 375.006,257.597 375.193 M137.917 376.782 C 138.684 377.217,145.572 379.181,146.243 379.156 C 146.790 379.136,144.778 378.433,141.847 377.619 C 140.874 377.349,139.672 376.970,139.176 376.776 C 138.025 376.327,137.122 376.332,137.917 376.782 M264.047 377.996 C 264.047 378.212,264.312 378.389,264.637 378.389 C 264.961 378.389,265.226 378.212,265.226 377.996 C 265.226 377.780,264.961 377.603,264.637 377.603 C 264.312 377.603,264.047 377.780,264.047 377.996 M242.436 379.399 C 239.519 380.134,236.656 380.738,236.074 380.741 C 235.493 380.744,234.908 380.923,234.774 381.139 C 234.641 381.356,234.739 381.532,234.992 381.532 C 235.726 381.532,248.723 378.339,248.723 378.159 C 248.723 377.866,247.811 378.046,242.436 379.399 M261.886 378.782 C 261.391 378.995,261.318 379.120,261.690 379.120 C 262.014 379.120,262.633 378.968,263.065 378.782 C 263.560 378.569,263.633 378.444,263.261 378.444 C 262.937 378.444,262.318 378.596,261.886 378.782 M147.348 379.513 C 148.053 379.924,154.465 381.226,154.688 381.003 C 154.774 380.917,153.997 380.579,152.962 380.252 C 150.777 379.561,146.455 378.992,147.348 379.513 M256.483 380.433 C 255.673 380.649,255.010 380.984,255.010 381.179 C 255.010 381.656,255.690 381.629,255.992 381.139 C 256.371 380.526,257.420 380.677,258.044 381.434 C 258.526 382.020,258.581 382.027,258.412 381.482 C 258.304 381.130,258.413 380.644,258.655 380.402 C 259.196 379.861,258.604 379.870,256.483 380.433 M134.618 380.822 C 135.073 381.105,135.367 381.557,135.273 381.827 C 135.015 382.567,135.831 382.418,136.117 381.673 C 136.422 380.875,136.414 380.867,134.970 380.560 C 133.876 380.327,133.851 380.345,134.618 380.822 M155.655 381.105 C 155.294 381.328,155.586 381.516,156.583 381.703 C 157.383 381.853,158.137 381.876,158.259 381.754 C 158.381 381.632,158.133 381.532,157.708 381.532 C 157.283 381.532,156.766 381.363,156.559 381.156 C 156.350 380.947,155.947 380.924,155.655 381.105 M231.631 381.925 C 230.629 382.356,231.662 382.356,233.006 381.925 C 233.796 381.672,233.834 381.608,233.202 381.599 C 232.770 381.593,232.063 381.740,231.631 381.925 M167.780 383.513 C 171.778 384.162,175.668 384.644,176.424 384.583 C 177.233 384.518,176.100 384.251,173.674 383.936 C 171.405 383.642,169.371 383.291,169.155 383.157 C 168.939 383.023,168.409 382.894,167.976 382.871 C 167.544 382.847,165.688 382.717,163.851 382.580 C 161.385 382.397,162.414 382.641,167.780 383.513 M224.931 382.752 C 224.847 382.882,223.492 383.111,221.918 383.261 C 216.631 383.764,214.188 384.110,213.904 384.394 C 213.416 384.881,215.478 384.708,222.285 383.689 C 230.291 382.491,230.740 382.386,227.570 382.458 C 226.202 382.489,225.014 382.621,224.931 382.752 M148.919 384.676 C 148.919 384.892,149.185 385.069,149.509 385.069 C 149.833 385.069,150.098 384.892,150.098 384.676 C 150.098 384.460,149.833 384.283,149.509 384.283 C 149.185 384.283,148.919 384.460,148.919 384.676 M208.448 384.676 L 205.697 384.930 209.037 384.993 C 210.874 385.028,212.642 384.885,212.967 384.676 C 213.628 384.249,213.072 384.249,208.448 384.676 M241.257 384.676 C 241.257 384.892,241.523 385.069,241.847 385.069 C 242.171 385.069,242.436 384.892,242.436 384.676 C 242.436 384.460,242.171 384.283,241.847 384.283 C 241.523 384.283,241.257 384.460,241.257 384.676 M179.068 384.959 C 179.765 385.046,181.003 385.048,181.818 384.963 C 182.634 384.878,182.063 384.807,180.550 384.805 C 179.037 384.803,178.370 384.873,179.068 384.959 M187.740 385.361 C 189.533 385.434,192.362 385.434,194.027 385.360 C 195.691 385.287,194.224 385.227,190.766 385.228 C 187.308 385.228,185.947 385.288,187.740 385.361 M200.110 385.358 C 201.143 385.439,202.734 385.438,203.646 385.356 C 204.558 385.273,203.713 385.207,201.768 385.208 C 199.823 385.209,199.077 385.277,200.110 385.358 M154.813 386.248 C 154.813 386.464,155.079 386.640,155.403 386.640 C 155.727 386.640,155.992 386.464,155.992 386.248 C 155.992 386.031,155.727 385.855,155.403 385.855 C 155.079 385.855,154.813 386.031,154.813 386.248 M234.971 386.248 C 234.971 386.464,235.225 386.640,235.537 386.640 C 235.848 386.640,236.212 386.464,236.346 386.248 C 236.479 386.031,236.225 385.855,235.780 385.855 C 235.335 385.855,234.971 386.031,234.971 386.248 M164.244 387.819 C 165.018 388.320,165.928 388.320,165.619 387.819 C 165.485 387.603,164.989 387.429,164.515 387.432 C 163.815 387.437,163.764 387.510,164.244 387.819 M225.737 387.819 C 225.870 388.035,226.224 388.212,226.523 388.212 C 226.821 388.212,227.175 388.035,227.308 387.819 C 227.447 387.596,227.108 387.426,226.523 387.426 C 225.937 387.426,225.598 387.596,225.737 387.819 M167.191 388.212 C 167.046 388.446,167.475 388.594,168.248 388.577 C 169.331 388.554,169.417 388.494,168.762 388.212 C 167.696 387.754,167.474 387.754,167.191 388.212 M217.780 388.876 C 218.158 388.975,218.777 388.975,219.155 388.876 C 219.533 388.777,219.224 388.696,218.468 388.696 C 217.711 388.696,217.402 388.777,217.780 388.876 M176.736 389.493 C 177.681 389.795,178.153 389.785,178.484 389.453 C 178.829 389.108,178.514 389.008,177.191 389.038 L 175.442 389.078 176.736 389.493 M212.574 389.391 C 212.574 389.607,212.839 389.784,213.163 389.784 C 213.487 389.784,213.752 389.961,213.752 390.177 C 213.752 390.393,213.959 390.570,214.211 390.570 C 214.463 390.570,214.553 390.453,214.411 390.311 C 214.269 390.169,214.349 389.815,214.590 389.525 C 214.940 389.103,214.782 388.998,213.801 388.998 C 213.126 388.998,212.574 389.175,212.574 389.391 M182.122 389.784 C 181.975 390.022,182.518 390.177,183.497 390.177 C 184.476 390.177,185.019 390.022,184.872 389.784 C 184.739 389.568,184.120 389.391,183.497 389.391 C 182.874 389.391,182.255 389.568,182.122 389.784 M205.305 389.784 C 205.154 390.028,205.890 390.177,207.246 390.177 C 208.447 390.177,209.430 390.000,209.430 389.784 C 209.430 389.568,208.557 389.391,207.489 389.391 C 206.421 389.391,205.438 389.568,205.305 389.784 ", stroke: "none", fill: "#e5e247", "fill-rule": "evenodd" }))));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$J,
    GroupsIcon: Icon$K,
    HamburgerIcon: Icon$L,
    HamburgerCloseIcon: Icon$M,
    HomeIcon: Icon$N,
    IfoIcon: Icon$O,
    InfoIcon: Icon$P,
    LanguageIcon: Icon$Q,
    LogoIcon: Logo,
    MoonIcon: Icon$R,
    MoreIcon: Icon$S,
    NftIcon: Icon$T,
    PoolIcon: Icon$U,
    SunIcon: Icon$V,
    TelegramIcon: Icon$W,
    TicketIcon: Icon$X,
    TradeIcon: Icon$Y,
    TwitterIcon: Icon$Z,
    AuditIcon: Icon$_,
    GooseIcon: Icon$$,
    LayerIcon: Icon$10,
    RoadmapIcon: Icon$11,
    PresaleIcon: Icon$12,
    MediumIcon: Icon$13,
    ReferralIcon: Icon$14,
    XtmcIcon: Icon$15
});

var MenuButton = styled(Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled(Link$1)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$q, { className: "mobile-icon" }),
        React.createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$M, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$L, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$y;

var links = [
    {
        label: 'Home',
        icon: 'HomeIcon',
        href: '/',
    },
    {
        label: 'Trade',
        icon: 'TradeIcon',
        items: [
            {
                label: 'Exchange',
                href: 'https://exchange.xtmcswap.com/',
            },
            {
                label: 'Liquidity',
                href: 'https://exchange.xtmcswap.com/#/pool',
            },
        ],
    },
    {
        label: 'Farms',
        icon: 'FarmIcon',
        href: '/farms',
    },
    {
        label: 'Staking',
        icon: 'PoolIcon',
        href: '/staking',
    },
    // {
    //   label: 'Pools',
    //   icon: 'PoolIcon',
    //   href: '/pools',
    // },
    {
        label: 'Lottery',
        icon: 'TicketIcon',
        href: '/lottery',
    },
    {
        label: 'Presale',
        icon: 'PresaleIcon',
        href: 'https://presale.xtmcswap.com/',
    },
    {
        label: 'Games',
        icon: 'NftIcon',
        items: [
            {
                label: 'The King of The Forest',
                href: '/game',
            },
        ],
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: 'Project Info',
                href: 'https://xtmcswap.com/',
            },
            {
                label: 'Litepaper',
                href: 'http://litepaper.xtmcswap.com/',
            },
            {
                label: 'Donation Vault',
                href: 'https://xtmcswap.com/dov/',
            },
            {
                label: 'Marketing Vault',
                href: '.https://xtmcswap.com/mav/',
            },
        ],
    },
    // {
    //   label: "IFO",
    //   icon: "IfoIcon",
    //   items: [
    //     {
    //       label: "Next",
    //       href: "/ifo",
    //     },
    //     {
    //       label: "History",
    //       href: "/ifo/history",
    //     },
    //   ],
    // },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            // {
            //   label: "Voting",
            //   href: "https://voting.pancakeswap.finance",
            // },
            {
                label: 'Github',
                href: 'https://github.com//#',
            },
            {
                label: 'Docs',
                href: 'https://docs.xtmcswap.com/',
            },
            {
                label: 'Medium',
                href: 'https://xtmcswap.medium.com/',
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        href: "https://t.me/XTMCSWAPAIRDROP"
    },
    {
        label: "Medium",
        icon: "MediumIcon",
        href: "https://xtmcswap.medium.com/",
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/xtmcswap/",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React.createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$8, null) : React.createElement(Icon$7, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
Icons$1.MoonIcon; Icons$1.SunIcon; var LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled.a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; var cakePriceUsd = _a.cakePriceUsd; _a.cakePriceTreeUsd; var currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang; _a.priceLink; var priceLinkTree = _a.priceLinkTree;
    if (!isPushed) {
        return (React.createElement(Container$4, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$l, null))));
    }
    return (React.createElement(Container$4, null,
        React.createElement(SocialEntry, null,
            React.createElement(Flex, null,
                cakePriceUsd ? (React.createElement(PriceLink, { href: priceLinkTree, target: "_blank" },
                    React.createElement(Icon$w, { width: "24px", mr: "8px" }),
                    React.createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 })),
                React.createElement(Dropdown, { position: "top", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                        React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                    // Safari fix
                    style: { minHeight: "32px", height: "auto" } }, lang.language)); })))),
        React.createElement(SettingsEntry, null,
            React.createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "10px" : 0;
                // if (social.items) {
                //   return (
                //     <Dropdown key={social.label} position="top-right" target={<Icon {...iconProps} mr={mr} />}>
                //       {social.items.map((item) => (
                //         <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                //           {item.label}
                //         </Link>
                //       ))}
                //     </Dropdown>
                //   );
                // }
                return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React.createElement(Icon, __assign({}, iconProps))));
            })))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$2;

var StyledPanel = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$16,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$19,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$17,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$18,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$1a,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1b,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://docs.xtmcswap.com/", external: true },
            React.createElement(Icon$o, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$E;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { size: "sm", variant: "secondary", style: { color: '#f7eb00' }, onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { size: "sm", variant: "tertiary", style: { color: 'black', backgroundColor: '#f7eb00' }, onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon$1c = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React.createElement(Icon$1c, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: username },
            React.createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: username },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, cakePriceTreeUsd = _a.cakePriceTreeUsd, links = _a.links, priceLink = _a.priceLink, priceLinkTree = _a.priceLinkTree, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper$1, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, cakePriceTreeUsd: cakePriceTreeUsd, pushNav: setIsPushed, links: links, priceLink: priceLink, priceLinkTree: priceLinkTree }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$3, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$J;

var ResetCSS = createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#f7eb00",
    primaryBright: "#f7eb00",
    primaryDark: "#f7eb00",
    secondary: "#f7eb00",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", tertiary: "#EFF4F5", text: "#191326", textDisabled: "#BDC2C4", textSubtle: "#f7eb00", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#f7eb00", background: "#343135", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#EAE2FC", textDisabled: "#666171", textSubtle: "#c9c4d4", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

export { Icon$4 as AddIcon, Alert, Icon$5 as ArrowBackIcon, Icon$6 as ArrowDownIcon, Icon$7 as ArrowDropDownIcon, Icon$8 as ArrowDropUpIcon, Icon$9 as ArrowForwardIcon, Icon$a as AutoRenewIcon, BackgroundImage, GridLayout as BaseLayout, Icon$b as BinanceIcon, Icon$2 as BlockIcon, Breadcrumbs, Icon$c as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$e as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$d as CardViewIcon, GridLayout$1 as CardsLayout, Checkbox, Icon as CheckmarkCircleIcon, Icon$f as CheckmarkIcon, Icon$g as ChevronDownIcon, Icon$h as ChevronLeftIcon, Icon$i as ChevronRightIcon, Icon$j as ChevronUpIcon, Icon$k as CloseIcon, Icon$l as CogIcon, Icon$m as CommunityIcon, Icon$n as CopyIcon, CopyToClipboard, Dropdown, Icon$1 as ErrorIcon, Flex, Icon$x as GooseRoundIcon, Heading, Icon$o as HelpIcon, IconButton, Image, Icon$3 as InfoIcon, Input, Link, LinkExternal, Icon$p as ListViewIcon, Icon$q as LogoIcon, Icon$r as LogoRoundIcon, Menu, Icon$s as MinusIcon, Modal, ModalProvider, Icon$t as OpenNewIcon, Icon$v as PancakeRoundIcon, Icon$w as PancakeRoundTreeIcon, Icon$u as PancakesIcon, Icon$y as PrizeIcon, Progress, Icon$B as ProgressBunny, Radio, Icon$z as RemoveIcon, ResetCSS, Icon$F as SearchIcon, Skeleton, Spinner, Svg, Icon$G as SwapVertIcon, Icon$H as SyncAltIcon, Tag, Text, Icon$D as Ticket, Icon$E as TicketRound, ToastContainer, Toggle, Icon$A as VerifiedIcon, Icon$I as WarningIcon, Icon$C as Won, variants$1 as alertVariants, byTextAscending, byTextDescending, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
