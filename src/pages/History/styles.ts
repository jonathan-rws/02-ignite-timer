import styled from 'styled-components'

export const HistoryContainer = styled.main`
  padding: 3.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  h1 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.5rem;
  }
`
export const List = styled.div`
  flex: 1;
  overflow: auto;

  table {
    margin-top: 2rem;
    width: 100%;
    border-collapse: collapse;
    th {
      background: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-100']};
      text-align: left;
      padding: 1rem 1.5rem;
      font-weight: bold;
      font-size: 0.875rem;
      font-weight: bold;

      &:first-child {
        border-top-left-radius: 8px;
        width: 50%;
      }
      &:last-child {
        border-top-right-radius: 8px;
      }
    }
    td {
      background: ${(props) => props.theme['gray-700']};
      border-top: 0.25rem solid ${(props) => props.theme['gray-800']};
      padding: 1rem 1.5rem;
      text-align: left;
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-300']};
    }
  }
`
const STATUS_COLOR = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: 'yellow' | 'red' | 'green'
}
export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
  }
`
