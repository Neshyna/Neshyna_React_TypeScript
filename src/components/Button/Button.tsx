import "./styles.css";
import { ButtonProps } from "./types";

function Button({ name = "SEND", type, onClick }: ButtonProps) {
  return (
    <button className="main-button" type={type} onClick={onClick}>
      {name}
    </button>
  );
}
export default Button;
