import "./styles.css";
import { InputProps } from "./types";
import { InputContainer, InputField } from "./styles";

function Input({ name, type, placeholder, label, id }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <InputField id={id} name={name} type={type} placeholder={placeholder} />
    </InputContainer>
  );
}
export default Input;
