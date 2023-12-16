// Styling Imports
import {
  SuccessContainer,
  OrderContainer,
  OrderHeading,
  OrderInfos,
  OrderContent,
  ContentTexts
} from "./styles";

// Strategic Imports
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

// Icons Imports
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";

// Image Imports
import successImage from "/assets/success-ilustration.png";

export function Success() {
  const { orderId } = useParams();
  const { orders } = useCart();

  const orderWithSameId = orders.find(order => String(order.id) === orderId);

  if (!orderWithSameId?.id) {
    return null;
  }

  const paymentMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro",
  };

  return (
    <SuccessContainer>
      <OrderContainer>
        <OrderHeading>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </OrderHeading>

        <OrderInfos>
          <OrderContent>
            <div>
              <MapPin
                size={32}
                weight="fill"
              />

              <ContentTexts>
                <span>
                  Entrega em{" "}
                  <strong>{orderWithSameId.street}, {orderWithSameId.number}</strong>
                </span>
                <span>{orderWithSameId.neighborhood} - {orderWithSameId.city}, {orderWithSameId.state}</span>
              </ContentTexts>
            </div>

            <div>
              <Clock
                size={32}
                weight="fill"
              />

              <ContentTexts>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </ContentTexts>
            </div>

            <div>
              <CurrencyDollar
                size={32}
                weight="fill"
              />

              <ContentTexts>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod[orderWithSameId.paymentMethod]}</strong>
              </ContentTexts>
            </div>
          </OrderContent>
        </OrderInfos>

      </OrderContainer>

      <img src={successImage} />
    </SuccessContainer>
  );
}
