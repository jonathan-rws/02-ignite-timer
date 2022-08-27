import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 41rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  line-height: 1.6;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`
export const BasedInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }
  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BasedInput)`
  width: 100%;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesInput = styled(BasedInput)`
  width: 2.4rem;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 1rem;
  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separetor = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const BasedInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0 2px solid transparent;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-500']};

  &:focus-within {
    border-color: ${(props) => props.theme['green-500']};
  }
`

export const InputTaskBox = styled(BasedInputBox)`
  flex: 1;
`
export const InputMinuteBox = styled(BasedInputBox)``

export const SubmitButton = styled.button`
  height: 4rem;
  width: 100%;
  border-radius: 8px;
  background: ${(props) => props.theme['green-500']};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1rem;
  font-weight: bold;
  gap: 0.5rem;
  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
  &:disabled {
    filter: opacity(0.7);
    cursor: not-allowed;
  }
`
