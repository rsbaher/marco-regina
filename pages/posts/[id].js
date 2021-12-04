import { google } from 'googleapis'
import auth from '../../utilities/auth'

export async function getServerSideProps({ query }) {
    const sheets = google.sheets({ version: 'v4', auth });
    const { id } = query;
    //const range = `rsvp!A${id}:C${id}`;
    const range = `rsvp!A2:H9`;

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET,
        range,
    });

    const values = response.data.values;
    
    console.log("Sheet values: ", values)
    //const {Fname, Lname} = response.data.values[id];
    return {
        props: {

        }
    }
}

export default function Post({ }) {
    return (
        <section className="content1">
            <h1>test</h1>
            <div>test</div>
        </section>
    )

}