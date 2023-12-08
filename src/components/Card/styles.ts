import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  width: 256px;
  height: 310px;
  border-radius: 8px 36px;
  background: ${({ theme }) => theme["base-card"]};

  img {
    width: 120px;
    height: 120px;
    margin-top: calc(-1.25rem - 1.25rem);
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    font-size: 0.675rem;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    background: ${({ theme }) => theme["yellow-light"]};
    color: ${({ theme }) => theme["yellow-dark"]};
    margin-top: 0.75rem;
  }
`;

export const CardInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin-top: 1rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-label"]};
  }
`;

export const CardControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  color: ${({ theme }) => theme["base-text"]};

  &:first-child {
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    line-height: 1.3;
  }

  span:nth-child(2) {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;
  }
`;

export const OrderButtonsContainer = styled.div<{ $isItemAdded: boolean }>`
  display: flex;
  gap: 0.5rem;
  
  button:nth-child(2) {
    display: flex;
    padding: 0.5rem;
    color: ${({ theme }) => theme["white"]};
    background: ${({ theme, $isItemAdded }) => 
      $isItemAdded ? theme["yellow-dark"] : theme["purple-dark"]};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: ${({ theme, $isItemAdded }) => 
        $isItemAdded ? theme["yellow"] : theme["purple"]};
    }
  }
`;
