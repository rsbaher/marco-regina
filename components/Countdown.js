import styled from 'styled-components'

const CountdownDiv = styled.div`
  color: #c7a298;
  font-size: 1.5em;
  text-align: center;
`

const CountdownNumber = styled.span`
  color: #cba135;
  font-size: 1.2em;
  font-weight: bold;
  margin: 0 0.2em;
`

export default function CountdownSection({ children }) {
    
    return (
        <>
            <CountdownDiv>
            
                <CountdownNumber>9</CountdownNumber>
                months
                <CountdownNumber>00</CountdownNumber>
                days to go!
            </CountdownDiv>
        </>
    )
}

