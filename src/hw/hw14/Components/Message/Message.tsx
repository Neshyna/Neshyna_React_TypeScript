// Компонент Message.tsx должен отображать
// сообщение из стейта, которое вы кладете при клике на
// кнопку "Post"
import { MessageComponent, MessageWrapper } from "./styles";
import Card from "../Card/Card";
import { useContext } from 'react';
import { BlogManagementContext } from '../BlogManagement/BlogManagement';


function Message() {
  const message = useContext(BlogManagementContext)
  return (
    <MessageWrapper>
       <MessageComponent>{message}</MessageComponent>
    </MessageWrapper>
  );
}
export default Message;
