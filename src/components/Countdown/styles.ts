import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 8.5rem;
    text-align: center;
    background: ${({ theme }) => theme.colors.backgroundLight};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid ${({ theme }) => theme.colors.background};
      }

      &:last-child {
        border-left: 1px solid ${({ theme }) => theme.colors.background};
      }
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
  height: 5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.purple};
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.purpleDark};
  }
`;
