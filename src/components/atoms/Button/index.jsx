import React from "react";
import classNames from "classnames";

import "./styles.css";

export const Button = ({ onClick, text, type, variant }) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames("button", {
      button_green: variant === "green",
      button_red: variant === "red",
      button_count: variant === "count",
      button_reset: variant === "reset",
    })}
  >
    {text}
  </button>
);
