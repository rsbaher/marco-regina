import styled from 'styled-components'

const Title = styled.h1`
  color:  ${props => props.color};
  font-family: great_vibes, adlery_swash;
  font-size: 5em;
  font-weight: lighter;
  text-align: center;
  margin-top: 2em;

  @media (max-width: 414px) {
    font-size: 4em;
    margin-top: 1.5em;
  }

  @media (max-width: 375px) {
    font-size: 3.5em;
  }

  @media (max-width: 320px) {
    font-size: 3em;
  }
`

export default Title;