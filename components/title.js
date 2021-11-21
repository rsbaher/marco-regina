import styled from 'styled-components'

const Title = styled.h1`
  color:  ${props => props.color};
  font-family: great_vibes, adlery_swash;
  font-size: 5.5em;
  font-weight: 550;
  text-align: center;
  margin-top: 3.3em;

  @media (max-width: 414px) {
    font-size: 4em;
    margin-top: 2.5em;
  }

  @media (max-width: 375px) {
    font-size: 3.5em;
  }

  @media (max-width: 320px) {
    font-size: 3em;
  }
`

export default Title;