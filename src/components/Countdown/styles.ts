import styled, { css } from 'styled-components';

interface CountdownButtonProps {
  active: boolean;
}

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${theme.colors.title};

    > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      font-size: 8.5rem;
      text-align: center;
      background: ${theme.colors.backgroundLight};
      box-shadow: ${theme.boxShadow};
      border-radius: 5px;

      span {
        flex: 1;

        &:first-child {
          border-right: 1px solid ${theme.colors.background};
        }

        &:last-child {
          border-left: 1px solid ${theme.colors.background};
        }
      }
    }

    > span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
    }
  `}
`;

export const CountdownButton = styled.button`
  ${({ theme }) => css<CountdownButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
    height: 5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #c9d1d9;
    background: ${theme.colors.purple};
    border: none;
    border-radius: 5px;
    transition: background-color 0.2s;

    svg,
    img {
      margin-left: 8px;
    }

    &:not(:disabled):hover {
      background: ${theme.colors.purpleDark};
    }

    &:disabled {
      background: ${theme.colors.backgroundLight};
      border-bottom: 4px solid ${theme.colors.green};
      cursor: not-allowed;
    }

    ${(props) =>
      props.active &&
      css`
        color: ${theme.colors.text};
        background: ${theme.colors.backgroundLight};

        &:not(:disabled):hover {
          svg {
            color: #ffffff;
          }

          color: #ffffff;
          background: ${theme.colors.red};
        }
      `}
  `}
`;
