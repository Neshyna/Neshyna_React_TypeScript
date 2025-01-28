import Button from "../Button/Button";
import "./styles.css";
import { useState } from "react";
import { CounterWrappper, ButtonWrapper, ResultContainer } from "./styles.ts";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const onPlusClick = (): void => {
    setCounter((prevValue) => {
      return prevValue + 1;
    });
  };

  console.log("counter in Counter Component", counter);

  const onMinusClick = (): void => {
    setCounter((prevValue) => prevValue - 1);
  };

  return (
    <CounterWrappper>
      <ButtonWrapper>
        <Button name="-" type="button" onClick={onMinusClick} />
      </ButtonWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtonWrapper>
        <Button name="+" type="button" onClick={onPlusClick} />
      </ButtonWrapper>
    </CounterWrappper>
  );
}

export default Counter;
