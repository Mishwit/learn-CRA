import React from "react";
import classNames from "classnames";

import "./styles.css";

export const Button = ({ onClick, text, type, variant, disabled }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={classNames("button", {
      button_red: variant === "red",
      button_count: variant === "count",
      button_reset: variant === "reset",
      button_disabled: disabled === true,
    })}
  >
    {text}
  </button>
);
