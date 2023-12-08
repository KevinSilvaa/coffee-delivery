// Styling Imports
import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";

// Strategic Imports
import { InputRadioContainer } from "./styles";

type InputRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
}

export const InputRadio = forwardRef(function Radio(
  { children, isSelected, ...rest }: InputRadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <InputRadioContainer data-state={isSelected}>
      <input
        type="radio"
        ref={ref}
        {...rest}
      />
      {children}
    </InputRadioContainer>
  );
});
