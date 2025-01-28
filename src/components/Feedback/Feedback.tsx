import "./styles.css";
import Button from "../Button/Button";

import { useState } from "react";

import {
  FeedbackWrapper,
  ButtonWrapper,
  NumberLikes,
  NumberDislikes,
  LikeWrapper,
  DislikeWrapper,
} from "./styles";

function Feedback() {
  const [numberOfLikes, setNumberOfLikes] = useState<number>(0);
  const [numberOfDislikes, setNumberOfDislikes] = useState<number>(0);

  const clickLike = (): void => {
    setNumberOfLikes((prevState: number) => prevState + 1);
  };

  const clickDislike = (): void => {
    setNumberOfDislikes((prevState: number) => prevState + 1);
  };

  const resetResults = (): void => {
    setNumberOfLikes(0);
    setNumberOfDislikes(0);
  };

  return (
    <FeedbackWrapper>
      <LikeWrapper>
        <NumberLikes>{numberOfLikes}</NumberLikes>
        <ButtonWrapper>
          <Button name="Like" type="button" onClick={clickLike} />
        </ButtonWrapper>
      </LikeWrapper>
      <DislikeWrapper>
        <ButtonWrapper>
          <Button name="Dislike" type="button" onClick={clickDislike} />
        </ButtonWrapper>
        <NumberDislikes>{numberOfDislikes}</NumberDislikes>
      </DislikeWrapper>
      <div className="reset-wrapper">
        <div className="button-wrapper">
          <Button name="Reset Results" type="button" onClick={resetResults} />
        </div>
      </div>
    </FeedbackWrapper>
  );
}
export default Feedback;
