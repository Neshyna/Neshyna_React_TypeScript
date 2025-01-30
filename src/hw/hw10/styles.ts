import styled from "@emotion/styled";

export const HW10Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  min-width: 600px;
  padding: 20px;
  border: 2px solid black;
  background-color: green;
`;

export const Response = styled.img`
  width: 600px;
`;

export const ErrorContainer = styled.div`
  width: 600px;
  padding: 20px;
  background-color: gray;
  color: red;
  font-size: 20px;
`;
