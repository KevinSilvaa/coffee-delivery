// Styling Imports
import { InputHTMLAttributes } from "react";

// Strategic Imports
import { InputRadioContainer } from "./styles";

type InputRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
}

export const InputRadio = ({ children, isSelected, ...rest }: InputRadioProps) => {

  return (
    <InputRadioContainer data-state={isSelected}>
      <input 
        type="radio"
        {...rest} 
      />
      {children}
    </InputRadioContainer>
  );
}
