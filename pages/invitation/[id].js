import { google } from 'googleapis'
import auth from '../../utilities/auth'
import {getGuestsUsingCode} from '../../utilities/helper'

export async function getServerSideProps({ query }) {
    const { id } = query;
    let invitation = await getGuestsUsingCode(id)

    return {
        props: {
            invitation: invitation
        }
    }
}

export default function Invitation(pageProps) {
    console.log("invitation.id page props: ", pageProps)
    return (
        <section className="content1">
            <h1>R.S.V.P</h1>
            <div>test</div>
        </section>
    )

}