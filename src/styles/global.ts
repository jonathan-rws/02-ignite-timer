import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 02px ${(props) => props.theme['green-500']};
  }
  body{
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
  }


  body, input-security, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    
  }
`
