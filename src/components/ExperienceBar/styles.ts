import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    position: relative;
    flex: 1;
    margin: 0 1.5rem;
    height: 4px;
    background: ${({ theme }) => theme.colors.grayLine};
    border-radius: 4px;

    div {
      height: 4px;
      background: ${({ theme }) => theme.colors.green};
      border-radius: 4px;
    }
  }
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;
