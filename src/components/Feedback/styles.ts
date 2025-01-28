import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  min-width: 300px;
  padding: 20px;
  background-color: rgb(184, 222, 235);
  border: 2px solid rgb(70, 67, 234);
  border-radius: 4px;
`;

export const ButtonWrapper = styled.button`
  width: 100px;
`;

const GeneralLikes = css`
  font-size: 24px;
  font-weight: bold;
`;

const GeneralWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const NumberLikes = styled.div`
  ${GeneralLikes}
`;

export const NumberDislikes = styled.div`
  ${GeneralLikes}
`;

export const LikeWrapper = styled.div`
  ${GeneralWrapper}
`;

export const DislikeWrapper = styled.div`
  ${GeneralWrapper}
`;

export const ResetWrapper = styled.div``;
