import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme["base-button"]};
  border-radius: 8px;
  text-align: center;

  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme["purple"]};
  }

  span {
    color: ${({ theme }) => theme["base-title"]};
    margin: 0 0.25rem;
  }
`;
