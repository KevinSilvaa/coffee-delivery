import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 8px;
      position: relative;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme["white"]};
        background: ${({ theme }) => theme["yellow-dark"]};
        font-size: 0.75rem;
        font-weight: 700;
        border-radius: 9999px;
        padding: 0.125rem;
        transform: translate(50%, -50%);
      }
     
      &:first-child {
        background: ${({ theme }) => theme["purple-light"]};
        color: ${({ theme }) => theme["purple-dark"]};
        font-size: 0.875rem;
        display: flex;
        gap: 0.25rem;
      }

      &:last-child {
        background: ${({ theme }) => theme["yellow-light"]};
        color: ${({ theme }) => theme["yellow-dark"]};
      }
    }
  }
`;
