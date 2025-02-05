// В компоненте Card.tsx должны быть:
// карточка, в которой будет уже вписано ваше имя и фамлиия
// под именем и фамилией вы должны вызвать компонент Message
import Message from "../Message/Message";
import { useContext } from "react";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";
import { CardWrapper, NameWrapper, FirstName, LastName } from "./styles";
import { CardProps } from "./types";

function Card({ text }: CardProps) {
  const { data } = useContext(BlogManagementContext);
  return (
    <CardWrapper>
      <NameWrapper>
        <FirstName>First Name: {data.firstName}</FirstName>
        <LastName>Last Name: {data.lastName}</LastName>
      </NameWrapper>
      {text && <Message text={text} />}
    </CardWrapper>
  );
}
export default Card;
