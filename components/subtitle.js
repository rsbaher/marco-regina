import styled from 'styled-components'

const Subtitle = styled.h2`
  color:  ${props => props.color};
  font-family: 'Great Vibes', cursive;
  font-size: 5em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5%;

  @media (max-width: 414px) {
    font-size: 4.5em;
    
  }

  @media (max-width: 375px) {
    font-size: 4em;
  }

  @media (max-width: 375px) {
    font-size: 3.5em;
  }
`

export default Subtitle;