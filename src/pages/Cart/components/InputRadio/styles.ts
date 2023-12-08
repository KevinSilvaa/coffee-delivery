import styled from "styled-components";

export const InputRadioContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  width: 100%;
  border-radius: 8px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme["base-button"]};
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["base-hover"]};
  }

  &[data-state="true"] {
    background: ${({ theme }) => theme["purple-light"]};
    border-color: ${({ theme }) => theme["purple"]};
  }

  input[type="radio"] {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme["purple"]};
  }

  span {
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.75rem;
    line-height: 1.6;
  }
`;
