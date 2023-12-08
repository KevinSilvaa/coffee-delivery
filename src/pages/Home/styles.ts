import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;

  #bg-image {
    position: absolute;
    top: 2rem;
    left: calc(0px - 10rem);
    height: 544px;
    width: calc(100% + 20rem);
  }
`;

export const BannerContainer = styled.section`
  display: flex;
  gap: 3.5rem;
  padding: 5.75rem 0;
`;

export const BannerInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${({ theme }) => theme["base-title"]};
  }

  > p {
    font-size: 1.25rem;
    line-height: 1.3;
  }
`;

export const BannerBenefits = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.25rem 2.5rem;
  margin-top: 3rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: fit-content;

    svg {
      padding: 8px;
      border-radius: 999px;
      color: ${({ theme }) => theme["white"]};  
    }

    &:nth-child(1) svg {
      background: ${({ theme }) => theme["yellow-dark"]};
    }

    &:nth-child(2) svg {
      background: ${({ theme }) => theme["base-text"]};
    }

    &:nth-child(3) svg {
      background: ${({ theme }) => theme["yellow"]};
    }

    &:nth-child(4) svg {
      background: ${({ theme }) => theme["purple"]};
    }

    span {
      color: ${({  theme }) => theme["base-text"]};
      line-height: 1.3;
    }
  }
`;

export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 2rem 0 8rem;
`;

export const CoffeeCardsContainer = styled.div`
  display: flex;
  gap: 2.5rem 2rem;
  flex-wrap: wrap;
`;
