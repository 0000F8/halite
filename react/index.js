import React from "react";
import { Button as AriaButton, Switch as AriaSwitch, TextField, Label, Input, TextArea, ToggleButton } from "react-aria-components";
var cx = (...parts) => parts.filter(Boolean).join(" ");
var Icon = ({ children, className, ...rest }) => /* @__PURE__ */ React.createElement("svg", { className: cx("h-ic", className), viewBox: "0 0 24 24", "aria-hidden": "true", ...rest }, children);
var Check = (props) => /* @__PURE__ */ React.createElement(Icon, { ...props }, /* @__PURE__ */ React.createElement("path", { d: "M5 12.5l4.5 4.5L19 7.5" }));
var Chevron = ({ className, ...rest }) => /* @__PURE__ */ React.createElement(Icon, { className: cx("chev", className), ...rest }, /* @__PURE__ */ React.createElement("path", { d: "M9 5l7 7-7 7" }));
var Button = ({ className, tone, onClick, onPress, children, ...rest }) => /* @__PURE__ */ React.createElement(AriaButton, { className: cx("h-button", tone, className), onPress: onPress || onClick, ...rest }, children);
var Field = ({ label, multiline, rows = 2, className, inputClassName, value, onChange, ...rest }) => /* @__PURE__ */ React.createElement(TextField, { className, value, onChange, ...rest }, label && /* @__PURE__ */ React.createElement(Label, { className: "h-field" }, label), multiline ? /* @__PURE__ */ React.createElement(TextArea, { className: cx("h-input", inputClassName), rows }) : /* @__PURE__ */ React.createElement(Input, { className: cx("h-input", inputClassName) }));
var Composer = ({ label, labelId, multiline, rows = 2, quiet, value, onChange, onSubmit, placeholder, disabled, maxLength, actionLabel, actionDisabled, onAction, inputId, className }) => /* @__PURE__ */ React.createElement("div", { className: cx("h-composer", quiet && "quiet", className) }, multiline ? /* @__PURE__ */ React.createElement("textarea", { id: inputId, "aria-label": label, rows, placeholder, value, disabled, maxLength, onChange: (e) => onChange(e.target.value) }) : /* @__PURE__ */ React.createElement(
  "input",
  {
    id: inputId,
    "aria-label": label,
    placeholder,
    value,
    disabled,
    maxLength,
    onChange: (e) => onChange(e.target.value),
    onKeyDown: (e) => {
      if (e.key === "Enter" && onSubmit) {
        e.preventDefault();
        onSubmit();
      }
    }
  }
), /* @__PURE__ */ React.createElement(AriaButton, { onPress: onAction, isDisabled: actionDisabled }, actionLabel));
var Chip = ({ className, children, onClick, onPress, ...rest }) => /* @__PURE__ */ React.createElement(AriaButton, { className: cx("h-chip", className), onPress: onPress || onClick, ...rest }, children);
var ChipGroup = ({ className, children, ...rest }) => /* @__PURE__ */ React.createElement("div", { className: cx("h-chips", className), ...rest }, children);
var Switch = ({ children, className, ...rest }) => /* @__PURE__ */ React.createElement(AriaSwitch, { className: cx("h-switch", className), ...rest }, /* @__PURE__ */ React.createElement("span", { className: "track" }, /* @__PURE__ */ React.createElement("i", null)), children);
var ListGroup = ({ className, children, ...rest }) => /* @__PURE__ */ React.createElement("div", { className: cx("h-group", className), ...rest }, children);
var ListRow = ({ icon, title, subtitle, value, mono, running, chevron, onPress, onClick, className, children, ...rest }) => {
  const inner = /* @__PURE__ */ React.createElement(React.Fragment, null, icon, /* @__PURE__ */ React.createElement("span", { className: "t" }, /* @__PURE__ */ React.createElement("b", null, title), subtitle && /* @__PURE__ */ React.createElement("small", null, subtitle)), children, (value != null || running) && /* @__PURE__ */ React.createElement("span", { className: cx("v", mono && "mono") }, running && /* @__PURE__ */ React.createElement("span", { className: "h-run", "aria-hidden": "true" }), value), (chevron || chevron === void 0 && (onPress || onClick)) && /* @__PURE__ */ React.createElement(Chevron, null));
  const press = onPress || onClick;
  if (press) {
    return /* @__PURE__ */ React.createElement(AriaButton, { className: cx("h-row", className), onPress: press, ...rest }, inner);
  }
  return /* @__PURE__ */ React.createElement("div", { className: cx("h-row", className), ...rest }, inner);
};
var Option = ({ title, subtitle, selected, onPress, onClick, className, ...rest }) => /* @__PURE__ */ React.createElement("button", { type: "button", className: cx("h-option", className), role: "radio", "aria-checked": selected ? "true" : "false", onClick: onPress || onClick, ...rest }, /* @__PURE__ */ React.createElement("b", null, title), subtitle && /* @__PURE__ */ React.createElement("small", null, subtitle), /* @__PURE__ */ React.createElement(Check, null));
var SectionLabel = ({ children, aside, id, className, as: Tag2 = "h2" }) => /* @__PURE__ */ React.createElement(Tag2, { id, className: cx("h-label", className) }, children, aside != null && /* @__PURE__ */ React.createElement("span", null, aside));
var Tag = ({ brand, className, children, ...rest }) => /* @__PURE__ */ React.createElement("span", { className: cx("h-tag", brand && "brand", className), ...rest }, children);
var Avatar = ({ size = 40, tint, src, letter, presence, children, className, style, ...rest }) => {
  const disc = /* @__PURE__ */ React.createElement(
    "span",
    {
      className: cx("h-avatar", letter && !src && !children && "letter", className),
      style: { width: size, height: size, fontSize: Math.round(size * 0.37), ...tint ? { "--h-tint": tint } : null, ...style },
      ...rest
    },
    src ? /* @__PURE__ */ React.createElement("img", { src, alt: "" }) : children || letter
  );
  if (!presence) return disc;
  return /* @__PURE__ */ React.createElement("span", { className: "h-avatar-wrap" }, disc, /* @__PURE__ */ React.createElement("span", { className: "h-pres", "data-status": presence === true ? "online" : presence, "aria-hidden": "true" }));
};
var AvatarCluster = ({ width = 176, height = 128, children, className, ...rest }) => /* @__PURE__ */ React.createElement("div", { className: cx("h-cluster", className), style: { width, height }, ...rest }, children);
var Stage = React.forwardRef(({ height = 196, tint, state = "idle", tag, children, className, style, ...rest }, ref) => /* @__PURE__ */ React.createElement(
  "div",
  {
    ref,
    className: cx("h-stage", state === "busy" && "busy", className),
    style: { height, ...tint ? { "--h-tint": tint } : null, ...style },
    ...rest
  },
  tag != null && /* @__PURE__ */ React.createElement("span", { className: cx("h-stage-tag", state === "busy" && "busy", state === "no" && "no"), "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("i", null), tag),
  /* @__PURE__ */ React.createElement("div", { className: "h-stage-body" }, children)
));
Stage.displayName = "Stage";
var Hero = ({ portrait, name, subtitle, tint, children, className, style, ...rest }) => /* @__PURE__ */ React.createElement("div", { className: cx("h-hero", className), style: { ...tint ? { "--h-tint": tint } : null, ...style }, ...rest }, /* @__PURE__ */ React.createElement("div", { className: "h-portrait" }, portrait, /* @__PURE__ */ React.createElement("span", { className: "ground" })), /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement("span", null, name)), subtitle && /* @__PURE__ */ React.createElement("p", { className: "h-sub" }, subtitle), children);
var QuickAction = ({ icon, label, pressed, pop, onPress, onClick, className, ...rest }) => {
  const handler = onPress || onClick;
  const body = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: cx("c", pop && "pop") }, icon), /* @__PURE__ */ React.createElement("b", null, label));
  if (pressed !== void 0) {
    return /* @__PURE__ */ React.createElement(ToggleButton, { className: cx("h-qa", className), isSelected: !!pressed, onChange: handler, ...rest }, body);
  }
  return /* @__PURE__ */ React.createElement(AriaButton, { className: cx("h-qa", className), onPress: handler, ...rest }, body);
};
var QuickRow = ({ children, className }) => /* @__PURE__ */ React.createElement("div", { className: cx("h-quick", className) }, children);
var HaliteRoot = ({ className, children, ...rest }) => /* @__PURE__ */ React.createElement("div", { className: cx("h-root", className), ...rest }, children);
export {
  Avatar,
  AvatarCluster,
  Button,
  Check,
  Chevron,
  Chip,
  ChipGroup,
  Composer,
  Field,
  HaliteRoot,
  Hero,
  Icon,
  ListGroup,
  ListRow,
  Option,
  QuickAction,
  QuickRow,
  SectionLabel,
  Stage,
  Switch,
  Tag
};
