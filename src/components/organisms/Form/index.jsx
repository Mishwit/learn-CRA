import React from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";

import "./styles.css";

export const Form = () => (
  <form action="#" method="post">
    <Input type="email" placeholder="E-mail" />
    <Input type="password" placeholder="Password" />
    <Input type="password" placeholder="Repeat password" />
    <Button
      type="submit"
      text="Send"
      variant="red"
      onClick={() => alert("Thanks for authorized")}
    />
  </form>
);
