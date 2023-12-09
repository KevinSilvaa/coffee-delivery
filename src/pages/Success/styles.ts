import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 5rem;
`;

export const OrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const OrderHeading = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme["yellow-dark"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }

  span {
    color: ${({ theme }) => theme["base-subtitle"]};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`;

export const OrderInfos = styled.div`
  border: 1px solid transparent;
  border-radius: 8px 40px;
  width: 100%;

  background-origin: border-box;
  background-image: ${({ theme }) => `linear-gradient(to bottom right, ${theme["yellow"]}, ${theme["purple"]})`};
`;

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme["white"]};
  color: ${({ theme }) => theme["white"]};
  border-radius: 8px 40px;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      border-radius: 9999px;
      
    }
    &:nth-child(1) svg {
      background: ${({ theme }) => theme["purple"]};
    }

    &:nth-child(2) svg {
      background: ${({ theme }) => theme["yellow"]};
    }

    &:nth-child(3) svg {
      background: ${({ theme }) => theme["yellow-dark"]};
    }
  }
`;

export const ContentTexts = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme["base-text"]};
  line-height: 1.3;
`;
