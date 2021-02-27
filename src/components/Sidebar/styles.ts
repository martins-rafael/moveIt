import styled, { css } from 'styled-components';
import { HiOutlineLightBulb } from 'react-icons/hi';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 7rem;
  background: linear-gradient(180deg, #21262d 0%, rgba(13, 17, 23, 0) 100%);

  img {
    margin: 2rem;
  }

  div {
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

        &:first-child {
          color: ${theme.colors.purple};
        }

        &:hover {
          color: ${theme.colors.purple};
        }
      `}
    }
  }
`;

export const LightSwitch = styled(HiOutlineLightBulb)`
  cursor: pointer;
`;
