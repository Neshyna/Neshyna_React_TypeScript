// .animal-card-wrapper {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 20px;
//   min-width: 300px;
//   min-height: 400px;
//   background-color: rgb(145, 218, 211);
//   border-radius: 6px;
//   font-size: 24px;
// }
// .card-image {
//   width: 100px;
// }

import styled from "@emotion/styled";

export const AnimalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-width: 300px;
  min-height: 400px;
  background-color: rgb(145, 218, 211);
  border-radius: 6px;
  font-size: 24px;
`;
export const CardImg = styled.img`
  width: 100px;
`;
