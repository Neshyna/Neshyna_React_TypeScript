import styled from "@emotion/styled";

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
  overflow: auto;
  border-radius: 5px;
  `

export const Error = styled.div `
  width: 600px;
  padding: 20px;
  background-color: red;
  color: black;
  border-radius: 5px;
  `

export const FactBlock = styled.div `
width: 500px;
display: flex;
text-align: center;
padding: 20px;
background-color: aqua;
border-radius: 5px;
`

export const ButtonWrapper = styled.div`
  width: 700px;
  font-size: 25px;
`;
