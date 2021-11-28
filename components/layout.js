import Title from './title'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import LikeSvg from '../public/img/like.svg'

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
                    <div className="title-container">
                        <Link href="/" passHref><h1 className="title pointer-on-hover">Marco & Regina</h1></Link>
                    </div>
                    </section>

                    {children}

                    <footer className="content3">
                        <div style={{ fontSize: '1.5em', marginTop: '1em' }}>
                            { process.env.NEXT_PUBLIC_HASHTAG }
                        </div>

                        <div style={{ color: 'gray', margin: '.5em' }}>
                            Made with&nbsp;
                            <Image src={LikeSvg} width={15} height={15} alt="Cartoon icon of a red heart"/> by
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