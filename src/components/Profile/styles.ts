import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  img.avatar {
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.title};
    }

    p {
      margin-top: 0.5rem;
      font-size: 1rem;

      div {
        margin: 0;
      }

      img {
        padding-right: 0.5rem !important;
      }
    }
  }
`;
