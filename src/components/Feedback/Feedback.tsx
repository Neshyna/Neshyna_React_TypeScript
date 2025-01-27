import "./styles.css";
import Button from "../Button/Button";

import { useState } from "react";

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
    <div className="feedback-wrapper">
      <div className="like-wrapper">
        <div className="number-likes">{numberOfLikes}</div>
        <div className="button-wrapper">
          <Button name="Like" type="button" onClick={clickLike} />
        </div>
      </div>
      <div className="dislike-wrapper">
        <div className="button-wrapper">
          <Button name="Dislike" type="button" onClick={clickDislike} />
        </div>
        <div className="number-dislike">{numberOfDislikes}</div>
      </div>
      <div className="reset-wrapper">
        <div className="button-wrapper">
          <Button name="Reset Results" type="button" onClick={resetResults} />
        </div>
      </div>
    </div>
  );
}
export default Feedback;
