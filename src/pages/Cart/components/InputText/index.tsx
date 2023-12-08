// Styling Imports
import { InputBox, InputContainer } from "./styles";

// Strategic Imports
import { FocusEvent, HTMLAttributes, InputHTMLAttributes, useState } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export const InputText = ({ optional, onFocus, onBlur, containerProps, ...rest }: InputProps) => {

  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBLur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <InputBox {...containerProps}>
      <InputContainer data-state={isFocused ? "focused" : "blurred"}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBLur}
          {...rest}
        />

        {optional ? <span>Opcional</span> : null}
      </InputContainer>
    </InputBox>
  );
}
