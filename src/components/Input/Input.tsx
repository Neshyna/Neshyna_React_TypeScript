import "./styles.css";
import { InputProps } from "./types";

function Input({ name, type, placeholder, label, id }: InputProps) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}
export default Input;
