import styled, { css } from 'styled-components';

interface LightSwitchProps {
  activeTheme: string;
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 7rem;
  background: ${({ theme }) => theme.gradient};

  @media (max-width: 1160px) {
    right: 0;
    width: 100%;
    height: 7rem;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.background};
  }

  img {
    margin: 2rem;
  }

  > nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1160px) {
      flex-direction: row;
    }

    svg {
      ${({ theme }) => css`
        margin: 1rem 2rem;
        color: ${theme.colors.text};
        transition: color 0.2s;

        &:hover {
          color: ${theme.colors.purple};
        }
      `}
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
`;

export const LightSwitch = styled.div<LightSwitchProps>`
  svg {
    cursor: pointer;
  }

  ${({ activeTheme }) =>
    activeTheme === 'dark' &&
    css`
      svg:hover {
        color: #ffff00 !important;
      }
    `}
`;
