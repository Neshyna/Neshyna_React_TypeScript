import "./styles.css";
import { ButtonProps } from "./types";

// interface ButtonProps {
//   name?: string,
//   type: 'submit' | 'button' | 'reset',
//   onClick: () => void
// }

function Button({ name = "SEND", type, onClick }: ButtonProps) {

  return (
    <button className="main-button" type={type} onClick={onClick}>
      {name}
    </button>
  );
}
export default Button;

