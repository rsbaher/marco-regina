import styled from 'styled-components'

const FloralImg = styled.img`
  width: 50%;
  max-width: 35em;
  min-width: 20em;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) rotate(180deg);
  position: absolute;
`

export default function Floral({ children }) {
  return (
    <>
    <FloralImg src="/img/floral3.png" />
    </>
  )
}