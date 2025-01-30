import styled from "@emotion/styled/macro";

export const PageWrapper = styled.div `
display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 20px;
  padding: 40px;
  font-size: 25px;
`

export const InfoContainer = styled.div `
display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 700px;
  height: 700px;
  background-color: grey;
  `

export const Error = styled.div `
  width: 700px;
  padding: 20px;
  background-color: red;
  color: black;
  `

export const FactBlock = styled.div `
width: 500px;
display: flex;
text-align: center;
padding: 20px;
background-color: aqua;
`

export const ButtonWrapper = styled.div`
  width: 700px;
  font-size: 25px;
`;
