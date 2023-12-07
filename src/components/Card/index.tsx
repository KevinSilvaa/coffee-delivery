// Styling Imports
import { CardContainer, CardInfosContainer, CardControlsContainer, TagsContainer, OrderButtonsContainer, Price } from "./styles";

// Components Imports
import { QuantityInput } from "../QuantityInput";

//  Strategic Imports
import { useState } from "react";

// Icons Imports
import { ShoppingCart } from "phosphor-react";

interface CoffeeProps {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  }
}

export function Card({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity(state => state - 1);
    }
  }

  function handleIncrementQuantity() {
    setQuantity(state => state + 1);
  }

  return (
    <CardContainer>
      <img src={`/src/${coffee.image}`} alt={`Imagem de um ${coffee.title}`} />

      <TagsContainer>
        {coffee.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>

      <CardInfosContainer>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </CardInfosContainer>

      <CardControlsContainer>
        <Price>
          <span>R$ </span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <OrderButtonsContainer>
          <QuantityInput
            decrementQuantity={handleDecrementQuantity}
            incrementQuantity={handleIncrementQuantity}
            quantity={quantity}
          />

          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </OrderButtonsContainer>
      </CardControlsContainer>
    </CardContainer>
  );
}
