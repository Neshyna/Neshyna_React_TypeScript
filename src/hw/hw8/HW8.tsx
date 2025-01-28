import { ButtonProps } from "./types.ts";
import { MainButton } from "./styles.ts";

function Button({ name = "SEND", type, onClick, disabled}: ButtonProps) {
  return (
    <div>
      <MainButton disabled={true} type={type} onClick={onClick}>
        {name}
      </MainButton>
      <MainButton type={type} onClick={onClick}>
        {name}
      </MainButton>
    </div>
  );
}
export default Button;
