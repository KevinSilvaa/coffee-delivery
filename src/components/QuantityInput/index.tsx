// Styling Imports
import { QuantityInputContainer } from "./styles";

// Icons Imports
import { Minus, Plus } from "phosphor-react";

interface QuantityInputProps {
  quantity: number;
  decrementQuantity: () => void;
  incrementQuantity: () => void;
}

export function QuantityInput({ decrementQuantity, quantity, incrementQuantity }: QuantityInputProps) {

  return (
    <QuantityInputContainer>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  );
}
