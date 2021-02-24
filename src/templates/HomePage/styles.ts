import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  height: 100vh;
  max-width: 992px;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`;
