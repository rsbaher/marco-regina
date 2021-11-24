import styled from 'styled-components'

const Title = styled.h1`
  color:  ${props => props.color};
  font-family: great_vibes, adlery_swash;
  font-size: 5.5em;
  font-weight: 550;
  text-align: center;
  margin-top: 3.3em;

  @media (max-width: 500px) {
    font-size: 4.5em;
    margin-top: 0.3em;
    font-weight: normal;
  }

  @media (max-width: 375px) {
    font-size: 3.5em;
  }

  @media (max-width: 320px) {
    font-size: 3em;
  }
`

export default Title;