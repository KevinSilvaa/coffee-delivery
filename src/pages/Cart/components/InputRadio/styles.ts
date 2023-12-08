import styled from "styled-components";

export const InputRadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme["base-button"]};
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["base-hover"]};
  }

  &[data-state="selected"] {
    background: ${({ theme }) => theme["purple-light"]};
    color: ${({ theme }) => theme["purple"]};
  }

  input[type="radio"] {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme["purple"]};
  }

  span {
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${({ theme }) => theme["base-text"]};
  }
`;
