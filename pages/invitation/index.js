import Link from 'next/link'
import Layout from '../../components/layout'

export default function Post() {

    return (
        <Layout h1="R.S.V.P" h2="Summary">
            <section className="content1">
                <div className="text-align-center">
                    <h2>T . B . D</h2>
                    <br />
                    <Link href="/" passHref><h3 className="underline pointer-on-hover" style={{ textAlign: 'center', }}>Back Home</h3></Link>
                    < br />
                </div> 
            </section>
        </Layout>
    )

}