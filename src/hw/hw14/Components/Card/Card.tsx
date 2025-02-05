// В компоненте Card.tsx должны быть:
// карточка, в которой будет уже вписано ваше имя и фамлиия
// под именем и фамилией вы должны вызвать компонент Message
import Message from "../Message/Message";
import { useContext } from "react";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";
import { CardWrapper, NameWrapper, FirstName, LastName } from "./styles";

function Card() {
  const postedData = useContext(BlogManagementContext);
  return (
    <CardWrapper>
      <NameWrapper>
        <FirstName>First Name: Masha</FirstName>
        <LastName>Last Name:Neshyna </LastName>
      </NameWrapper>
      <Message />
    </CardWrapper>
  );
}
export default Card;
