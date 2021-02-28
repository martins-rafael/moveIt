import styled, { css } from 'styled-components';

interface ChallengeButtonProps {
  result: 'failed' | 'succeeded';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
  height: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }

  img {
    margin-bottom: 1rem;
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    padding: 0 2rem 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.purple};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLine};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  strong {
    padding: 1.5rem 0 1rem;
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    line-height: 1.5;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const ChallengeButton = styled.button<ChallengeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  ${(props) =>
    props.result === 'succeeded' &&
    css`
      background: ${({ theme }) => theme.colors.green};
    `}

  ${(props) =>
    props.result === 'failed' &&
    css`
      background: ${({ theme }) => theme.colors.red};
    `}
`;
