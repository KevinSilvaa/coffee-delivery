// Styling Imports
import {
  CartContainer,
  CartFormContainer,
  FormInfos,
  FormHeading,
  FormInputsContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  PaymentMethodInputsContainer,
  CartCheckoutContainer,
  CheckoutContainer,
  CartProducts,
  ProductContainer,
  ProductInfo,
  CartTotalPrice,
  CartPriceInfos,
  TotalPrice,
  CheckoutButton
} from "./styles.ts";

// Components Imports
import { InputText } from "./components/InputText/index.tsx";
import { InputRadio } from "./components/InputRadio/index.tsx";
import { QuantityInput } from "../../components/QuantityInput/index.tsx";

// Strategic Imports
import { SubmitHandler, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "../../hooks/useCart.tsx";
import { coffees } from '../../../data.json'

// Icons Imports
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Trash } from "phosphor-react";

type FormInputsProps = {
  zipcode: number;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
}

const newOrderFormValidationSchema = zod.object({
  zipcode: zod.number(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentMethod: zod.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Escolha um método de pagamento válido",
  }),
});

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>;

const shippingPrice = 3.5;

export function Cart() {
  const {
    cart,
    checkoutCart,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart();

  const itemsInCart = cart.map(item => {
    const itemInfo = coffees.find(coffee => coffee.id === item.id);

    if (!itemInfo) {
      throw new Error("Invalid coffee.");
    }

    return {
      ...itemInfo,
      quantity: item.quantity,
    };
  });

  const totalCartPrice = itemsInCart.reduce((prevValue, currentItem) => {
    return (prevValue += currentItem.price * currentItem.quantity);
  }, 0)

  const {
    register,
    handleSubmit,
    watch
  } = useForm<FormInputsProps>({
    resolver: zodResolver(newOrderFormValidationSchema),
  });

  const selectedPaymentMethod = watch("paymentMethod");

  function handleIncrementQuantity(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleDecrementQuantity(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleRemoveItem(itemId: string) {
    removeItem(itemId);
  }

  const handleCheckout: SubmitHandler<FormInputsProps> = (data) => {
    if (cart.length === 0) {
      return alert("Adicione pelo menos um item no carrinho para continuar com a compra");
    }

    checkoutCart(data);
  }

  return (
    <CartContainer>
      <CartFormContainer>
        <h2>Complete seu pedido</h2>

        <form id="order-form" onSubmit={handleSubmit(handleCheckout)}>
          <FormInfos>
            <FormHeading>
              <MapPinLine size={22} />

              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeading>
            <FormInputsContainer>
              <InputText
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: "zipcode" } }}
                {...register("zipcode", { valueAsNumber: true })}
              />

              <InputText
                placeholder="Rua"
                containerProps={{ style: { gridArea: "street" } }}
                {...register("street")}
              />

              <InputText
                placeholder="Número"
                type="number"
                containerProps={{ style: { gridArea: "number" } }}
                {...register("number")}
              />

              <InputText
                placeholder="Complemento"
                containerProps={{ style: { gridArea: "complement" } }}
                optional
                {...register("complement")}
              />

              <InputText
                placeholder="Bairro"
                containerProps={{ style: { gridArea: "neighborhood" } }}
                {...register("neighborhood")}
              />

              <InputText
                placeholder="Cidade"
                containerProps={{ style: { gridArea: "city" } }}
                {...register("city")}
              />

              <InputText
                placeholder="UF"
                containerProps={{ style: { gridArea: "state" } }}
                {...register("state")}
              />
            </FormInputsContainer>
          </FormInfos>

          <PaymentMethodContainer>
            <PaymentMethodHeading>
              <CurrencyDollar size={22} />

              <div>
                <span>Pagamento</span>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </PaymentMethodHeading>

            <PaymentMethodInputsContainer>
              <InputRadio
                isSelected={selectedPaymentMethod === "credit"}
                {...register("paymentMethod")}
                value="credit"
              >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </InputRadio>

              <InputRadio
                isSelected={selectedPaymentMethod === "debit"}
                {...register("paymentMethod")}
                value="debit"
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </InputRadio>

              <InputRadio
                isSelected={selectedPaymentMethod === "cash"}
                {...register("paymentMethod")}
                value="cash"
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </InputRadio>
            </PaymentMethodInputsContainer>

          </PaymentMethodContainer>
        </form>
      </CartFormContainer>


      <CartCheckoutContainer>
        <h2>Cafés selecionados</h2>

        <CheckoutContainer>
          <CartProducts>

            {itemsInCart.map(item => (
              <ProductContainer key={item.id}>
                <div>
                  <img src={item.image} />

                  <ProductInfo>
                    <h3>{item.title}</h3>

                    <div>
                      <QuantityInput
                        decrementQuantity={() => handleDecrementQuantity(item.id)}
                        incrementQuantity={() => handleIncrementQuantity(item.id)}
                        quantity={item.quantity}
                      />

                      <button id="removeProduct" onClick={() => { handleRemoveItem(item.id) }}>
                        <Trash />
                        <span>Remover</span>
                      </button>
                    </div>
                  </ProductInfo>

                </div>

                <span id="coffeePrice">R$ {item.price.toFixed(2)}</span>
              </ProductContainer>
            ))
            }

            <CartTotalPrice>
              <CartPriceInfos>
                <span>Total de itens</span>
                <span>
                  {new Intl.NumberFormat("pt-br", {
                    currency: "BRL",
                    style: "currency",
                  }).format(totalCartPrice)}
                </span>
              </CartPriceInfos>

              <CartPriceInfos>
                <span>Entrega</span>
                <span>
                  {new Intl.NumberFormat("pt-br", {
                    currency: "BRL",
                    style: "currency",
                  }).format(shippingPrice)}
                </span>
              </CartPriceInfos>

              <TotalPrice>
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat("pt-br", {
                    currency: "BRL",
                    style: "currency",
                  }).format(totalCartPrice + shippingPrice)}
                </span>
              </TotalPrice>
            </CartTotalPrice>

            <CheckoutButton type="submit" form="order-form">
              Confirmar pedido
            </CheckoutButton>
          </CartProducts>

        </CheckoutContainer>
      </CartCheckoutContainer>
    </CartContainer>
  );
}
