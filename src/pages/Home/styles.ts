import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  flex: 1;
  margin: 0 auto;
`

export const BaseCountdownButton = styled.button`
  color: ${(props) => props.theme['gray-100']};

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  gap: 0.5rem;

  padding: 1rem;
  border: 0;
  border-radius: 8px;

  cursor: pointer;
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:hover {
    background: ${(props) => props.theme['red-700']};
  }
`
