import {
  Container,
  CountdownContainer,
  FormContainer,
  MinutesInput,
  Separetor,
  TaskInput,
  InputTaskBox,
  InputMinuteBox,
  SubmitButton,
} from './styles'
import { Minus, Play, Plus } from 'phosphor-react'

export function Home() {
  return (
    <Container>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTaskBox>
            <TaskInput
              type="text"
              id="task"
              placeholder="Dê um nome para o seu projeto"
              list="task-sugestions"
            />
          </InputTaskBox>
          <datalist id="task-sugestions">
            <option value="Trabalhar no primeiro projeto" />
            <option value="Criar repositório no github" />
            <option value="Mudar para um projeto mais novo" />
          </datalist>
          <label htmlFor="minutes">Durante</label>
          <InputMinuteBox>
            <Minus size={16} />
            <MinutesInput
              type="number"
              id="minutes"
              placeholder="00"
              step={5}
              min={5}
              max={60}
            />
            <Plus size={16} />
          </InputMinuteBox>

          <span>minutes</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separetor>:</Separetor>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <SubmitButton type="submit">
          <Play size={24} />
          Começar
        </SubmitButton>
      </form>
    </Container>
  )
}
