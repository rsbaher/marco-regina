import styled from 'styled-components'

const Card = styled.div`
  background: ${props => props.backgroundColor};
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  font-family: 'El Messiri', sans-serif;
  line-height: 1.5em;
  padding: 1em;
  position: relative;
  overflow: hidden;
  z-index: 0;

  @media (max-width: 500px) {
    font-size: 1.2em;
  }

  @media (max-width: 375px) {
    font-size: 1.2em;
  }
`

export default Card;