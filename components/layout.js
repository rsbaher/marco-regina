import Title from './title'
import styled from 'styled-components'

const GithubLink = styled.p`
  text-align: center;
  margin-top: 1em;
`
const DivContainer2 = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
`
const LeftFloat = styled.span`
  width: 100%;
  text-align: right;
  padding-left: 5%;
`
const RightFloat = styled.div`
text-align: left;
padding-top: 0.5%;
width: 0px;
padding-left: 5%;
`

const DivContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`

export default function Layout({ children }) {
    return (
        <>
            <div style={{ height: '100%' }}>
                <section className="background" />
                <div className="container">
                    <section className="content0">
                        <Title className="color-white">Marco & <br/> Regina</Title>
                    </section>

                    {children}

                    <footer className="content3">
                        <div style={{ fontSize: '1.5em', marginTop: '1em' }}>
                            { process.env.HASHTAG }
                        </div>

                        <div style={{ color: 'gray', margin: '.5em' }}>
                            Made with&nbsp;
                            <img src="/img/like.svg" style={{ height: '.8em' }} /> by
                            Regina
                        </div>
                        
                        <DivContainer > 
                        <LeftFloat >Forked from Yonas: &nbsp;</LeftFloat>
                         <RightFloat ><iframe
                                src="https://ghbtns.com/github-btn.html?user=yonasstephen&repo=yonasyulin&type=star&count=true"
                                frameBorder="0"
                                scrolling="0"
                                width="72px"
                                height="20px"
                            /></RightFloat>
                        </DivContainer>

                    </footer>
                   
                </div>
            </div>
        </>
    )
}