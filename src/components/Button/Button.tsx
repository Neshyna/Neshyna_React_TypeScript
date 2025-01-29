import { ButtonProps } from "./types";
import { MainButton } from "./styles.ts";

function Button({ name = "SEND", type, onClick , disabled=false}: ButtonProps) {
  return (
    <MainButton type={type} onClick={onClick} disabled={disabled}>
      {name}
    </MainButton>
  );
}
export default Button;
