// Styling Imports
import { CardContainer, CardInfosContainer, CardControlsContainer, TagsContainer, OrderButtonsContainer, Price } from "./styles";

// Components Imports
import { QuantityInput } from "../QuantityInput";

//  Strategic Imports
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";

// Icons Imports
import { Check, ShoppingCart } from "phosphor-react";

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
  const [isItemAdded, setIsItemAdded] = useState(false);

  const { addItem } = useCart();

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity(state => state - 1);
    }
  }

  function handleIncrementQuantity() {
    setQuantity(state => state + 1);
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    }
  }, [isItemAdded]);

  return (
    <CardContainer>
      <img src={coffee.image} alt={`Imagem de um ${coffee.title}`} />

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

        <OrderButtonsContainer $isItemAdded={isItemAdded}>
          <QuantityInput
            decrementQuantity={handleDecrementQuantity}
            incrementQuantity={handleIncrementQuantity}
            quantity={quantity}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <Check
                size={22}
                weight="fill"
              />
            ) : (
              <ShoppingCart size={22} weight="fill" />
            )}
          </button>
        </OrderButtonsContainer>
      </CardControlsContainer>
    </CardContainer>
  );
}
