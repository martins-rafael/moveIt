import styled, { css } from 'styled-components';

interface LightSwitchProps {
  activeTheme: string;
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 7rem;
  background: ${({ theme }) => theme.gradient};

  img {
    margin: 2rem;
  }

  > nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
