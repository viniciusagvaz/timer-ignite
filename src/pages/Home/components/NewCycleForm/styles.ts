import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.25rem;
  font-weight: bold;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
  }
`

export const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 768px) {
    width: 78%;
    background-color: ${(props) => props.theme['gray-600']};
    border-radius: 4px;
    margin: 0 0.4rem;
    padding: 0.8rem;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinuteAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 3rem;
    -webkit-outer-spin-button,
    -webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`
