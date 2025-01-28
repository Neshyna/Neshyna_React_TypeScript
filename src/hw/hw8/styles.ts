// Задача*

// нужно расширить компонент Button:
// передать ему prop disabled.
// Если disabled === true, то Button становится
// серой (оттенок подберите свой)

// cоздайте компонент Homework08 в папке
// homeworks, в нем должно быть 2 компонента
// кнопки - Button. Первая кнопка должна быть обычной,
//  а вторая цвета - disabled

import styled from "@emotion/styled";
import { css } from "@emotion/react";

// in case I need to create several buttons
const GeneralButton = css`
  width: 100%;
  min-height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  border-radius: 4px;
  color: white;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  cursor: pointer;
`;

export const MainButton = styled.button`
  ${GeneralButton}
  background: ${(props) => (props.disabled ? "grey" : "  #1f27f5 ")};
`;


