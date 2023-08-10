import React, { useState, useEffect } from "react";

import { Button } from "../../atoms/Button";

import "./styles.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const [isDisabled1, setIsDisabled1] = useState(true);
  const [isDisabled2, setIsDisabled2] = useState(true);
  const [isDisabled3, setIsDisabled3] = useState(true);

  useEffect(() => {
    setIsDisabled1(count < 1);
    setIsDisabled2(count < 2);
    setIsDisabled3(count < 3);
  }, [count]);

  const inc = (value) => setCount(count + value);

  const dec = (value) => {
    if (count > value) {
      setCount(count - value);
    } else {
      setCount(0);
    }
  };

  const res = () => setCount(0);

  return (
    <div>
      <div className="counterArea">
        <Button
          type="submit"
          text=" -3 "
          variant="count"
          disabled={isDisabled3}
          onClick={() => dec(3)}
        />
        <Button
          type="submit"
          text=" -2 "
          variant="count"
          disabled={isDisabled2}
          onClick={() => dec(2)}
        />
        <Button
          type="submit"
          text=" -1 "
          variant="count"
          disabled={isDisabled1}
          onClick={() => dec(1)}
        />
        <div className="countDisplay">{count}</div>
        <Button
          type="submit"
          text=" +1 "
          variant="count"
          onClick={() => inc(1)}
        />
        <Button
          type="submit"
          text=" +2 "
          variant="count"
          onClick={() => inc(2)}
        />
        <Button
          type="submit"
          text=" +3 "
          variant="count"
          onClick={() => inc(3)}
        />
      </div>
      <Button
        type="submit"
        text="Reset"
        variant="reset"
        disabled={isDisabled1}
        onClick={res}
      />
    </div>
  );
};
