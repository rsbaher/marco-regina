import React, { useContext, useState } from "react"
import { Context } from '../../utilities/context'
import {getGuestsUsingCode} from '../../utilities/helper'
import Layout from '../../components/layout'
import Link from 'next/link'
import FormRsvp2 from "../../components/FormRsvp2"

export async function getServerSideProps(props) {
    console.log("invitation id ssp prop: ", props)
    let index = "/invitation/[id]"
    let invitation = await getGuestsUsingCode(props.params.id)
 
    return {
      props: {
        index: index,
        code: props.params.id,
        invitation: invitation
      }
    }
}

export default function Invitation(pageProps) {
    console.log("invitation.id page props: ", pageProps)
    const [context, setContext] = useContext(Context)
    console.log("invitation.id context: ", context);
    let inv = pageProps.invitation
    const InvitationDiv = () => {
        if(inv.error) {
            return <>
            <h2 className="title">Error</h2>
            <p>Opps. Something Went Wrong. Please try again later.</p>
            </>
        } else {
            return <>
            <h2 className="title">Success</h2>
            <FormRsvp2 data={{inv}}/>
            </>
        }
    }
    return (
        <Layout h1="- R . S . V . P -" h2="">
            <section className="content1">
                <div className="text-align-center">
                    <InvitationDiv />
                </div>    
                <br />
                <Link href="/" passHref><h3 className="underline pointer-on-hover" style={{ textAlign: 'center', }}>Back Home</h3></Link>
                < br />
            </section>
        </Layout>
    )

}