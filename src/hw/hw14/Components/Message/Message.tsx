// Компонент Message.tsx должен отображать
// сообщение из стейта, которое вы кладете при клике на
// кнопку "Post"
import { MessageWrapper } from "./styles";
import Card from "../Card/Card";
import MessageProps from "./types";

function Message({ text }: MessageProps) {
  return (
    <MessageWrapper>
      <Card text={text} />
    </MessageWrapper>
  );
}
export default Message;
