import styled from "@emotion/styled";

export const HW9Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 20px;
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  padding: 20px;
  background-color: #75e1ed;
`;
export const ResultContainer = styled.div`
  font-size: 34px;
  padding: 20px;
  background-color: rgb(103, 180, 139);
  width: 300px;
  text-align: center;
`;

const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  padding: 20px;
  background-color: rgb(159, 196, 176);
`;
export const NameBlock = styled.div`
  ${Blocks}
`;

export const AgeBlock = styled.div`
  ${Blocks}
`;
