import styled from '@emotion/styled';
import { css } from '@emotion/react';

//Интерфейс для пропсов(тоже объект) стилизованного компонента BoxInfo
interface BoxInfoStyledProps {
  primary?: boolean
}

//шаблоны стилей для переиспользования
const boxBasicStyles = css`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 20px;
`

export const BoxInfo = styled.div<BoxInfoStyledProps>`
//подстановка переменной, которая содержит шаблон стилей
 ${boxBasicStyles}
 min-width: 300px;
 min-height: 300px;
 /* background-color: rebeccapurple; */
 //Добавление логики, через props, для использования различных значений свойств
 background-color: ${(props) => props.primary ? 'rebeccapurple' : 'purple'};
 /* border: 2px solid purple; */
 border: ${({ primary }) => primary ? '2px solid purple' : '6px solid grey'};

 //пример работы с псевдоклассом
 &:hover{
  background-color: #EC4DFA
 }
`;

export const ContentContainer = styled.div`
 //подстановка переменной, которая содержит шаблон стилей
 ${boxBasicStyles}
 flex-direction: column;
 gap: 20px;
 border-color: grey;
`

export const Image = styled.img`
 width: 30px;
`

export const Text = styled.p`
  font-size: 24px;
  color: red;
`
