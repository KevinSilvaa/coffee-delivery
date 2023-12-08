import styled from "styled-components";

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InputContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
  border-radius: 4px;
  background: ${({ theme }) => theme["base-input"]};
  font-size: 0.875rem;
  line-height: 1.3;
  border: 1px solid ${({ theme }) => theme["base-button"]};
  transition: all 0.2s ease-in-out;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme["yellow-dark"]};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme['base-button']};
  }

  input {
    background: transparent;
    color: ${({ theme }) => theme["base-text"]};
    width: 100%;
    padding: 0.75rem;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme["base-label"]};
    }
  }

  span {
    font-size: 0.875rem;
    font-style: italic;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-label"]};
    padding-right: 0.75rem;
  }
`;
