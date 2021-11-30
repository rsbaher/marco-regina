import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.backgroundColor};
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: ${props => props.color};
  font-weight: bold;
  outline: none;
  padding: 1em 2em;
`

export default Button
