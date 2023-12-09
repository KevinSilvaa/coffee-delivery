import styled from "styled-components";

export const CartContainer = styled.main`
  display: flex;
  gap: 2rem;
  margin: 2.5rem 0 5rem;

  h2 {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;
  }
`;

export const CartFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${({ theme }) => theme["base-card"]};
  padding: 2.5rem;
  width: 100%;
`;

const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    color: ${({ theme }) => theme["base-subtitle"]};
    line-height: 1.3;
  }
  
  p {
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`;

export const FormInfos = styled(FormContainer)``;

export const FormHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme["yellow-dark"]};
  }
`;

export const FormInputsContainer = styled.div`
  display: grid;
  grid-template-areas:
  "zipcode _ _"
  "street street street"
  "number complement complement"
  "neighborhood city state";
  gap: 1rem 0.75rem;
`;

export const PaymentMethodContainer = styled(FormContainer)``;

export const PaymentMethodHeading = styled(Heading)`
  svg {
    color: ${({ theme }) => theme["purple-dark"]};
  }
`;

export const PaymentMethodInputsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const CartCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  min-width: 448px;
  width: 100%;
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 8px 48px;
  margin-top: 1rem;
`;

export const CartProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.25rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme["base-button"]};

  > div {
    display: flex;
    gap: 1.25rem;
    
    img {
      width: 4rem;
      height: 4rem;
    }
  }

  #coffeePrice {
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-text"]};
    align-self: flex-start;
    justify-self: flex-end;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  div {
    display: flex;
    gap: 0.5rem;

    #removeProduct {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background: ${({ theme }) => theme["base-button"]};
      color: ${({ theme }) => theme["base-text"]};
      border: none;
      border-radius: 8px;
      font-size: 0.75rem;
      line-height: 1.6;
      text-transform: uppercase;
      padding: 0 0.5rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      svg {
        color: ${({ theme }) => theme["purple"]};
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;

export const CartTotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CartTotalPriceInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  line-height: 1.3;
  color: ${({ theme }) => theme["base-text"]};

  span:first-child {
    font-size: 0.875rem;
  }
`;

export const CartPriceInfos = styled(CartTotalPriceInfos)``;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme["base-subtitle"]};
`;

export const CheckoutButton = styled.button`
  background: ${({ theme }) => theme["yellow"]};
  color: ${({ theme }) => theme["white"]};
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  line-height: 1.6;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme["yellow-dark"]};
  }
`;
