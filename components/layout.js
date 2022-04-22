import Link from 'next/link'
import Image from 'next/image'
import LikeSvg from '../public/img/like.svg'


export default function Layout(props) {
    const Children = props.children
    const h1 = props.h1
    const h2 = props.h2
    return (
        <>
            <div style={{ height: '100%' }}>
                <section className="background" />
                <div className="container">
                    <section className="content0">
                    <div className="title-container">
                        <Link href="/" passHref><h1 className="title pointer-on-hover">{ h1 }</h1></Link>
                        <h2 className="subtitle">{ h2 }</h2>
                    </div>
                    </section>

                    {Children}

                    <footer className="content3">
                        <div style={{ fontSize: '1.5em', marginTop: '0.5em' }}>
                            { process.env.NEXT_PUBLIC_HASHTAG }
                        </div>

                        <div style={{ color: 'gray', margin: '0.5em 0.5em 1em 0.5em' }}>
                            Made with&nbsp;
                            <Image src={LikeSvg} width={15} height={15} alt="Cartoon icon of a red heart"/> by
                            Regina
                        </div>
                        
                        <div style={{fontSize: '0.7em'}} >Forked from <Link href="https://github.com/yonasstephen/yonasyulin" className="pointer-on-hover">Yonas</Link></div>
                    </footer>
                   
                </div>
            </div>
        </>
    )
}