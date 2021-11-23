import { google } from 'googleapis'
import auth from '../../utilities/auth'

export async function getServerSideProps({ query }) {
    const sheets = google.sheets({ version: 'v4', auth });
    const { id } = query;
    const range = `reginabaher@gmail.com!A${id}:C${id}`;

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEET,
        range,
    });

    const [title, content] = response.data.values[0];
    console.log(title, content)

    return {
        props: {
            title,
            content
        }
    }
}

export default function Post({ title, content }) {
    return (
        <section className="content1">
            <h1>{title}</h1>
            <div>{content}</div>
        </section>
    )

}