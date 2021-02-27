import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const Container = styled.div`
  position: relative;
  padding: 2rem 3rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
  background: linear-gradient(180deg, #21262d 0%, #0d1117 100%);
  border-radius: 5px;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.purple};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    margin-top: 0.25rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0;
    background: transparent;
    border: none;
  }
`;
