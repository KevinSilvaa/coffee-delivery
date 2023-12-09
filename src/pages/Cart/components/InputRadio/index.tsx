// Styling Imports
import { InputRadioContainer } from "./styles";

// Strategic Imports
import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";

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
