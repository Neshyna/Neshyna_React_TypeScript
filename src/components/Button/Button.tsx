import { ButtonProps } from "./types";
import { MainButton } from "./styles.ts";

function Button({ name = "SEND", type, onClick , disabled}: ButtonProps) {
  return (
    <MainButton type={type} onClick={onClick} disabled={false}>
      {name}
    </MainButton>
  );
}
export default Button;
