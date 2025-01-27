import "./styles.css";
import { ButtonProps } from "./types";
import { MainButton } from "./styles";

function Button({ name = "SEND", type, onClick }: ButtonProps) {
  return (
    <MainButton type={type} onClick={onClick}>
    {name}
  </MainButton>
  );
}
export default Button;
