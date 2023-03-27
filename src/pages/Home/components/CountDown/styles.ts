import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 8rem;
    line-height: 6rem;
  }

  @media (max-width: 600px) {
    font-size: 5rem;
    line-height: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    line-height: 2rem;
  }

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
